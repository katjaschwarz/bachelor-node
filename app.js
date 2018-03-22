"use strict";
const express = require('express')
import fetch from 'node-fetch';
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const socket_io    = require( "socket.io" );
const fs = require('fs'); // required for file serving
const app = express()
//import graphMock from './mock/graphSmall'
import exampleGraph from './mock/example_graph'
//import { mergeLinksToNodes } from "./util/mergeLinksToNodes";
import { compareAndClean } from "./util/compareAndClean";
import { getRandomColor } from "./util/getRandomColor";


const colorTable = {
    0: '#ff3b14',
    1: '#1313ff',
    2: '#00ff0a',
    3: '#fffa00',
    4: '#ff00c0',
    5: '#04fff0',
    6: '#ff8685',
    7: '#858bff',
    9: '#7cff6d',
    10: '#fffe6f',
    11: '#ff6af1',
    12: '#85feff'
}


// Socket.io
const io = socket_io();
app.io = io;

const fileHash = {}

let nodesStore = {}



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
//app.use(cookieParser())


//console.log(process.env.NODE_ENV === 'development')

app.use("/", express.static("public"))
//app.use('/api/v1/users', users)



// checking for allready used color

// socket.io events

io.on( "connection", function( socket )
{
    console.log( "A user connected: ", socket.id );
    console.log('# sockets connected', io.engine.clientsCount);

    socket.on("requestImage", function(data) {
        //console.log("requestImage")
        //console.log(data.name)
        if(data.name) {
            const iconPath = `${__dirname}/images/${data.name}.jpg`
            fs.readFile(iconPath, function(err, buf){
                if (err) {
                    console.error(err)
                    return
                }
                socket.emit('receiveImage', {name: data.name, buffer: buf.toString('base64'), index: data.index});
            });
        }
    })

    socket.on('updateNodes', async function(data){
        console.log("updateNodes from client")
        console.log(typeof data)
        console.log(data)

        // first time data is empty (the client should send a empty object {})
        let updatedNodes = data //|| {}
        ///if(typeof updatedNodes !== 'object') updatedNodes = JSON.parse(updatedNodes)
        //updatedNodes = JSON.parse(updatedNodes)

        // the nodes object for mutating data before sending
        let nodes = {}

        // the data, on the first time an empty object is
        // in production mode send to the server
        // in dev mode ...

        // before they should be cleaned and compared with maybe old data
        updatedNodes = compareAndClean(nodesStore, updatedNodes)



        if(process.env.NODE_ENV === 'development') {
            const count = 20 //Object.keys(exampleGraph).length //
            console.log("nodes generated from mock #: " + count)

            // generate dummy nodes
            for (let i = 0; i < count; i++) {
                nodes[i] = exampleGraph[i]
                if(!nodes[i].x && !nodes[i].y) {
                    nodes[i].x = Math.random()*40 -20
                    nodes[i].y = Math.random()*40 -20
                }
            }

        } else {
            console.log("get nodes from python")

            try {
                const res = await fetch('http://localhost:8000/nodes', {
                    method: 'POST',
                    header: { 'Content-type': 'application/json'},
                    body: JSON.stringify(updatedNodes)
                })
                // there are only nodes comming back from here
                nodes = await res.json()
            } catch (err) {
                console.error("error - get nodes from python - error")
                console.error(err)
            }
        }


        // add index before storing
        Object.values((node, i) => node.index = i)

        // store data data for comparing later
        nodesStore = nodes
        //console.log("this nodes are stored")
        //console.log(nodesStore)

        // saving used colorKeys
        const colorKeyHash = {};

        // saving used colors for labels
        const colorHash = {}

        // doing everything for each node and send it back
        Object.values(nodes).forEach((node, i) => {

            // that this is not inside !!! DONT FORGET THIS
            node.index = i

            // setting color based on label
            if(colorHash[node.label]) {
                node.color = colorHash[node.label]
            } else {
                const index = Object.keys(colorHash).length
                colorHash[node.label] = colorTable[index]
                node.color = colorHash[node.label]
            }


            // get a unique color for each node as a key
            while(true) {
                const colorKey = getRandomColor();
                if (!colorKeyHash[colorKey]) {
                    node.colorKey = colorKey;
                    colorKeyHash[colorKey] = node;
                    break;
                }
            }

            const iconPath = `${__dirname}/icons/${node.name}.jpg`

            if(fileHash[node.name]) {
                node.buffer = fileHash[node.name]
                socket.emit('node', node);
            } else {
                try {
                    fs.readFile(iconPath, function(err, buf){
                        if(err) {
                            console.error(err)
                            return
                        }
                        //node.iconExists = true
                        const buffer = buf.toString('base64');
                        fileHash[node.name] = buffer
                        node.buffer =  buffer
                        socket.emit('node', node);
                        //console.log('node is send: ' + node.name);

                    })
                } catch (err) {
                    console.error(err)
                }

            }
        });

        // sending back the labels and the colors
        socket.emit("updateLabels", colorHash)










        /*
        // TODO convert data to graph again
        if(process.env.NODE_ENV === 'development') {
            console.log("get mock data")
            // console.log(Object.keys(nodesStore).length)

            // reset nodes
            nodes = {}
            // generate dummy nodes
            for(let i = 0; i < 10; i++) {
                nodes[i] = exampleGraph[i]

            }


            // empty in first time starting

            // saving used colors
            const colorKeyHash = {};

            const colorHash = {}

            Object.values(updatedNodes).forEach(node => {

                if(colorHash[node.label]) {
                    node.color = colorHash[node.label]
                } else {
                    const index = Object.keys(colorHash).length
                    colorHash[node.label] = colorTable[index]
                    node.color = colorHash[node.label]
                }


                while(true) {
                    const colorKey = getRandomColor();
                    if (!colorKeyHash[colorKey]) {
                        node.colorKey = colorKey;
                        colorKeyHash[colorKey] = node;
                        return;
                    }
                }
            });

            socket.emit("updateLabels", colorHash)

            nodesStore = updatedNodes

            for(let i = 0; i < Object.keys(updatedNodes).length; i++) {
                const node = updatedNodes[i]
                node.index = i      // !important -
                if(!node.x && !node.y) {
                    node.x = Math.random()*40 -20
                    node.y = Math.random()*40 -20
                }

                const iconPath = `${__dirname}/icons/${node.name}.jpg`

                if(fileHash[node.name]) {
                    node.buffer = fileHash[node.name]
                    socket.emit('node', node);
                } else {
                    try {
                        fs.readFile(iconPath, function(err, buf){
                            if(err) {
                                console.error(err)
                                return
                            }
                            //node.iconExists = true
                            const buffer = buf.toString('base64');
                            fileHash[node.name] = buffer
                            node.buffer =  buffer
                            socket.emit('node', node);
                            console.log('node is send: ' + node.name);

                        })
                    } catch (err) {
                        console.error(err)
                    }

                }
            }

        // PRODUCTION MODE
        }
        else {
            console.log("send data to python api")
            // console.log(Object.keys(nodesStore).length)

            //updatedNodes = compareAndClean(nodesStore, updatedNodes)



            try {
                fetch('http://localhost:8000/nodes', {
                    method: 'POST',
                    header: { 'Content-type': 'application/json'},
                    body: JSON.stringify(updatedNodes)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("nodes received from python")
                        console.log(data)
                        const nodes = data
                        // check if the updatedNodes are not empty what they are on first time
                        // store nodes from python
                        nodesStore = nodes

                        Object.values(nodes).map((node, i) =>  {
                            node.index = i

                            // add colorKey
                            while(true) {
                                const colorKey = getRandomColor();
                                if (!colorsKeyHash[colorKey]) {
                                    node.colorKey = colorKey;
                                    colorsKeyHash[colorKey] = node;
                                    break;
                                }
                            }

                            // add label color
                            if(colorHash[node.label]) {
                                node.color = colorHash[node.label]
                            } else {
                                const index = Object.keys(colorHash).length
                                colorHash[node.label] = colorTable[index]
                                node.color = colorHash[node.label]
                            }

                            const iconPath = `${__dirname}/icons/${node.name}.jpg`
                            fs.readFile(iconPath, function(err, buf){
                                if(err) console.log(err)
                                else {
                                    // TODO file hash
                                    // TODO handle error
                                    node.buffer =  buf.toString('base64');
                                    console.log('node is send: ' + node.name);
                                    socket.emit('node', node);
                                }
                            });
                        })

                        socket.emit("updateLabels", colorHash)
                    })
            } catch(err) {
                console.error(err)
            }
        }
        */
    })

    socket.on('disconnect', function() {
        console.log("disconnect: ", socket.id);
    });
});

module.exports = app;

