# -*- coding: utf-8 -*-
"""
@author: kschwarz
"""
import numpy as np
import pandas as pd
from time import time
from globals import get_globals, df_to_dict, dict_to_df
import pickle


globals = get_globals()


def initial_embedding(features, embedding_func, **kwargs):
    print('Compute embedding...')
    tic = time()
    embedding = embedding_func(np.stack(features).astype(np.double),
                               triplets=np.zeros((1, 3), dtype=np.long),     # dummy values
                               position_constraints=np.zeros((1, 3)),        # dummy values
                               **kwargs)
    toc = time()
    print('Done. ({:2.0f}min {:2.1f}s)'.format((toc - tic) / 60, (toc - tic) % 60))
    return embedding


def construct_nodes(names, positions, labels=None):
    if labels is None:
        labels = [None] * len(names)
    nodes = pd.DataFrame({'name': names, 'x': positions[0], 'y': positions[1], 'labels': list(labels)})
    nodes = df_to_dict(nodes)
    for n in nodes:
        nodes[n]['labels'] = list(nodes[n]['labels'])
    return nodes


def compute_graph(current_graph=[], embedding=None):
    if len(current_graph['nodes']) == 0:
        positions = initial_embedding(globals.features, globals.embedding_func, **globals.embedding_func_kwargs)
        nodes = construct_nodes(globals.image_names, positions.transpose(), globals.labels)
        return nodes, globals.categories

    node_df = dict_to_df(current_graph['nodes'])
    if embedding is None:
        embedding = (node_df['x'].values, node_df['y'].values)
    else:
        embedding = embedding.transpose()
    nodes = construct_nodes(node_df['name'].values, embedding, node_df['labels'].values)
    return nodes, extract_categories(node_df)


def extract_categories(nodes):
    labels = np.stack(nodes['labels'].values)
    categories = globals.categories[:]              # slice all for making a copy
    if labels.shape[1] > globals.labels.shape[1]:
        usr_labels = labels[:, 5:]
        for i in range(usr_labels.shape[1]):
            categories.append('usr_' + str(i + 1))
    return categories


def extract_labels(current_graph=[]):
    nodes = dict_to_df(current_graph['nodes'])
    labels = nodes['labels'].values
    img_name = nodes['name'].values
    labels = np.stack(labels)
    categories = globals.categories[:]              # slice all for making a copy
    if labels.shape[1] > globals.labels.shape[1]:
        usr_labels = labels[:, 5:]
        with open('_user_labels.pkl', 'wb') as f:
            pickle.dump({'image_name': img_name, 'labels': usr_labels}, f)
        for i in range(usr_labels.shape[1]):
            categories.append('usr_' + str(i+1))
        print('Saved user labels to _user_labels.pkl.')
    return current_graph['nodes'], categories