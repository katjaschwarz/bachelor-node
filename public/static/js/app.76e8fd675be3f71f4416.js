webpackJsonp([1],{0:function(t,e){},"2pbd":function(t,e){},"B+Ni":function(t,e){t.exports=function(t,e,s,i,o,n,c){for(var a=[0,t.length-1,0],l=[],r=void 0,h=void 0;a.length;){var d=a.pop(),u=a.pop(),v=a.pop();if(u-v<=c)for(var g=v;g<=u;g++)r=e[2*g],h=e[2*g+1],r>=s&&r<=o&&h>=i&&h<=n&&l.push(t[g]);else{var f=Math.floor((v+u)/2);r=e[2*f],h=e[2*f+1],r>=s&&r<=o&&h>=i&&h<=n&&l.push(t[f]);var _=(d+1)%2;(0===d?s<=r:i<=h)&&(a.push(v),a.push(f-1),a.push(_)),(0===d?o>=r:n>=h)&&(a.push(f+1),a.push(u),a.push(_))}}return l}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"header"}},[s("router-link",{attrs:{to:"/svm"}},[t._v("SVM")]),t._v(" "),s("router-link",{attrs:{to:"/classifier"}},[t._v("Classifier")]),t._v(" "),s("router-link",{attrs:{to:"/triblets"}},[t._v("Triblets")]),t._v(" "),s("router-link",{attrs:{to:"/neighbours"}},[t._v("Neighbours")]),t._v(" "),s("router-link",{attrs:{to:"/tsne"}},[t._v("t-SNE")]),t._v(" "),s("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)},staticRenderFns:[]};var n=s("VU/8")({name:"NavHeader"},o,!1,function(t){s("oqat")},"data-v-4a01dfd2",null).exports,c=s("fZjL"),a=s.n(c),l=s("DmT9"),r=s.n(l),h=s("Xxa5"),d=s.n(h),u=s("exGp"),v=s.n(u),g=s("Zrlr"),f=s.n(g),_=s("wxAW"),m=s.n(_),p=function(){function t(e,s,i){f()(this,t),this.name=e.name,this.links=e.links,this.index=e.index,this._x=e.x,this._y=e.y,this._width=1,this._height=1,this.colorKey=e.colorKey,this.color=e.color,this.ctx=s,this.hitCtx=i,this.cluster=e.cluster,this.positives=e.positives,this.negatives=e.negatives,this.label=e.label,this.labels=e.labels,this.initX=e.x,this.initY=e.y,this.activeScale=3,this.scale=1,this.icon=new Image,this.icon.src=e.buffer,this._isActive=!1,this.isActiveNeighbour=!1,this.hasImage=!1,this.image=new Image,this.scale=null,this.imgScale=null,this.timerId=0,this._value=null}return m()(t,[{key:"move",value:function(t,e){this._x+=t,this._y+=e}},{key:"draw",value:function(){var t=v()(d.a.mark(function t(e,s,i,o){var n,c,a,l,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=this.icon,c=n.width*i/100/s,a=n.height*i/100/s,l=this._x-c/2,r=this._y-a/2,this.ctx.drawImage(n,l,r,c,a),this.hitCtx.fillStyle=this.colorKey,this.hitCtx.fillRect(l,r,c,a);case 8:case"end":return t.stop()}},t,this)}));return function(e,s,i,o){return t.apply(this,arguments)}}()},{key:"drawClusterd",value:function(t,e,s,i){var o=1/t,n=this._x,c=this._y;this.ctx.fillStyle="grey",this.ctx.fillRect(n,c,o,o)}},{key:"drawAsActive",value:function(t,e){this.scale=1;var s=this.icon,i=s.width*e/1e3,o=s.height*e/1e3,n=this._x-i/2,c=this._y-o/2;this.isActive?(this.ctx.globalAlpha=1,this.ctx.drawImage(s,n,c,i,o),this.ctx.globalAlpha=.3):this.isActiveNeighbour&&(this.ctx.globalAlpha=1,this.ctx.drawImage(s,n,c,i,o),this.ctx.globalAlpha=.3),this.hitCtx.fillStyle=this.colorKey,this.hitCtx.fillRect(n,c,i,o)}},{key:"drawAsNeighbour",value:function(t,e,s){this.scale=1;var i=this.icon,o=i.width*e/1e3*this.value,n=i.height*e/1e3*this.value,c=this._x-o/2,a=this._y-n/2;this.ctx.globalAlpha=1,this.ctx.drawImage(i,c,a,o,n),this.ctx.globalAlpha=.3,this.hitCtx.fillStyle=this.colorKey,this.hitCtx.fillRect(c,a,o,n)}},{key:"drawBorder",value:function(t,e,s,i,o,n){var c=this.icon.width*(this.isActive?s:this.isActiveNeighbour?s*this.value:e)/1e3,a=this.icon.height*(this.isActive?s:this.isActiveNeighbour?s*this.value:e)/1e3,l=this._x-c/2,r=this._y-a/2,h=o/10/t;this.ctx.strokeStyle=n||this.color,this.ctx.lineWidth=h,this.cluster<i||this.isActive||this.isActiveNeighbour?h&&this.ctx.strokeRect(l,r,c,a):(h&&this.ctx.strokeRect(l,r,c/t,a/t),this.hitCtx.fillStyle=this.colorKey,this.hitCtx.fillRect(l,r,c/t,a/t))}},{key:"width",get:function(){var t=this._width;return this.isActive?t+t*this.activeScale:this.isActiveNeighbour?t+t*this.activeScale*this.value:t},set:function(t){this._width=t}},{key:"height",get:function(){var t=this._height;return this.isActive?t+t*this.activeScale:this.isActiveNeighbour?t+t*this.activeScale*this.value:t},set:function(t){this._height=t}},{key:"value",get:function(){return this._value},set:function(t){this._value=t<.1?.1:t>1?1:t}},{key:"isActive",get:function(){return this._isActive},set:function(t){this._isActive=t}},{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}}]),t}(),b=s("d7EF"),w=s.n(b),k=s("W3Iv"),C=s.n(k),x=s("gRE1"),N=s.n(x),S=s("B+Ni"),y=s.n(S),A="svm",I=function(){function t(e,s,i,o){var n=this;f()(this,t),this.triggerDraw=function(){n.valid=!1},this.addNode=function(t){n.nodes[t.index]=t,n.colorHash[t.colorKey]=t.index,n.valid=!1},this.draw=function(){if(!n.valid){if(console.log("reDraw started"),n.clear(),N()(n.nodes).forEach(function(t){n.cluster<t.cluster?t.drawClusterd(n.scale,n.scale2,n.imgScale,n.cluster):t.draw(n.scale,n.scale2,n.imgScale,n.cluster)}),n.showKLabels?N()(n.nodes).forEach(function(t){t.drawBorder(n.scale,n.imgScale,n.activeImgScale,n.cluster,n.borderWidth)}):n.selectedLabel&&N()(n.nodes).forEach(function(t){-1!==t.labels.indexOf(n.selectedLabel)&&t.drawBorder(n.scale,n.imgScale,n.activeImgScale,n.cluster,n.borderWidth,n.labelColor)}),n.drawScissors){var t=(n.scissorsStartX-n.translateX)/n.scale,e=(n.scissorsStartY-n.translateY)/n.scale,s=(n.scissorsEndX-n.scissorsStartX)/n.scale,i=(n.scissorsEndY-n.scissorsStartY)/n.scale;n.ctx.strokeStyle="#3882ff",n.ctx.lineWidth=2/n.scale,n.ctx.strokeRect(t,e,s,i),n.ctx.globalAlpha=.2,n.ctx.fillRect(t,e,s,i),n.ctx.globalAlpha=1}n.valid=!0}},this.zoom=function(t){console.log("zoom event"),t.preventDefault(),t.stopPropagation();var e=n.findNodeByMousePosition(t.offsetX,t.offsetY);if(n.selection&&e&&e.isActiveNeighbour)console.log("nodeUnderMouse"),console.log(e.name),t.deltaY<0&&(console.log("zoom in - image smaller"),e.value-=.1),t.deltaY>0&&(console.log("zoom out - image bigger"),e.value+=.1),n.valid=!1;else{var s=t.offsetX,i=t.offsetY,o=(s-n.translateX)/n.scale,c=(i-n.translateY)/n.scale,a=n.scale;t.deltaY<0&&(console.log("zoom in"),n.scale*=n.scrollGrowth,n.scale2*=n.scrollImgGrowth,n.cluster*=n.clusterGrowth),t.deltaY>0&&(console.log("zoom out"),n.scale/=n.scrollGrowth,n.scale2/=n.scrollImgGrowth,n.cluster/=n.clusterGrowth);var l=n.scale-a;n.translateX-=o*l,n.translateY-=c*l,n.valid=!1}return!1},this.handleMouseDown=function(t){t.preventDefault(),t.stopPropagation();var e=t.shiftKey,s=t.ctrlKey,i=t.altKey,o=n.findNodeByMousePosition(t.offsetX,t.offsetY);n.nodeUnderMouse=o,console.log("mousedown"),n.startX=t.offsetX,n.startY=t.offsetY,o?(n.draggNode=o,n.activeMode&&(s?n.activeNode.negatives.push(o):(i||e)&&n.activeNode.positives.push(o))):n.scissors?(console.log("Scissors"),n.drawScissors=!0,n.scissorsStartX=n.startX,n.scissorsStartY=n.startY,n.valid=!1):n.dragging=!0},this.handleMouseMove=function(t){var e=t.offsetX,s=t.offsetY;n.scissors&&(n.scissorsEndX=e,n.scissorsEndY=s,n.valid=!1);var i=n.findNodeByMousePosition(e,s);if(i&&!i.hasImage&&n.socket.emit("requestImage",{name:i.name,index:i.index}),n.activeMode||(n.ui.activeNode=i||!1),n.draggNode||n.dragging){var o=e-n.startX,c=s-n.startY;if(n.startX=e,n.startY=s,n.dragging)n.translateX+=o,n.translateY+=c;else if(n.draggNode){var l=o/n.scale,r=c/n.scale;n.draggNode.move(l,r),n.activeMode&&n.draggNode.isActive&&a()(n.draggNode.links).forEach(function(t){var e=n.nodes[t];e&&e.move(l*e.value,r*e.value)})}n.triggerDraw()}else n.activeMode||(!i&&n.selection?n.removeSelection():!n.selection&&i?n.selectNode(i):i&&i!==n.selection&&(n.removeSelection(),n.selectNode(i)))},this.handleMouseUp=function(t){console.log("mouseup");var e=n.findNodeByMousePosition(t.offsetX,t.offsetY);if(e===n.nodeUnderMouse)switch(n.ui.clickedNode=e,console.log("click on node"),n.ui.$route.name){case A:break;default:console.log("no mode selected - what to do with a node click now?")}if(n.dragging=!1,n.draggNode=!1,n.scissors){n.ui.cuttedNodes=[];var s=(n.scissorsStartX-n.translateX)/n.scale,i=(n.scissorsStartY-n.translateY)/n.scale,o=(n.scissorsEndX-n.translateX)/n.scale,c=(n.scissorsEndY-n.translateY)/n.scale;N()(n.nodes).forEach(function(t){(t.x>s&&t.x<o||t.x<s&&t.x>o)&&(t.y<i&&t.y>c||t.y>i&&t.y<c)&&n.ui.cuttedNodes.push(t)}),n.scissors=!1,n.ui.scissors=!1,n.drawScissors=!1,n.valid=!1}},this.handleDoubleClick=function(){console.log("Double click"),n.selection&&!n.activeMode?(n.activeMode=!0,n.ui.activeNode=n.activeNode):n.activeMode&&(n.ui.activeNode=!1,n.activeNode=!1),n.triggerDraw()},this.socket=i,this.ui=o,this.canvas=e,this.ctx=e.getContext("2d"),this.width=e.width,this.height=e.height,this.hitCanvas=s,this.hitCtx=s.getContext("2d"),this.kdtree={},this.valid=!1,this._valid=!1,this.nodes={},this.colorHash={},this.dragging=!1,this.draggNode=!1,this.selection=null,this.nodeUnderMouse=null,this.showKLabels=!1,this.selectedLabel=null,this.labelColor=null,this.activeMode=!1,this.activeNode=!1,this.scissors=!1,this.drawScissors=!1,this.scissorsStartX=0,this.scissorsStartY=0,this.scissorsEndX=0,this.scissorsEndY=0,this._cluster=500,this.updateClusterUI=null,this._scale=20,this._scale2=20,this.updateScaleUI=null,this.updateScale2UI=null,this._imgScale=12,this._activeImgScale=5,this._borderWidth=5,this._scrollGrowth=1.3,this._scrollImgGrowth=1.1,this._clusterGrowth=1.2,this.interval=100,this.offsetLeft=e.getBoundingClientRect().left,this.offsetTop=e.getBoundingClientRect().top,this.translateX=this.width/2,this.translateY=this.height/2,this.startX=null,this.startY=null,this.canvas.onmousedown=this.handleMouseDown,this.canvas.onmousemove=this.handleMouseMove,this.canvas.onmouseup=this.handleMouseUp,this.canvas.ondblclick=this.handleDoubleClick,this.canvas.onwheel=this.zoom}return m()(t,[{key:"getNodes",value:function(){return this.removeSelection(),this.nodes}},{key:"getNode",value:function(t){return this.nodes[t]}},{key:"range",value:function(t,e,s,i){var o=y()(this.kdtree.ids,this.kdtree.coords,t,e,s,i,this.kdtree.nodeSize);console.log("range"),console.log(o)}},{key:"resetStore",value:function(){this.nodes={},this.colorHash={},this.valid=!1}},{key:"clear",value:function(){this.ctx.resetTransform(),this.ctx.clearRect(0,0,this.width,this.height),this.ctx.translate(this.translateX,this.translateY),this.ctx.scale(this.scale,this.scale),this.hitCtx.resetTransform(),this.hitCtx.clearRect(0,0,this.width,this.height),this.hitCtx.translate(this.translateX,this.translateY),this.hitCtx.scale(this.scale,this.scale)}},{key:"findNodeByMousePosition",value:function(t,e){var s=this.hitCtx.getImageData(t,e,1,1).data,i="rgb("+s[0]+","+s[1]+","+s[2]+")",o=this.colorHash[i];return o>=0?this.nodes[o]:null}},{key:"selectNode",value:function(t){var e=this;this.selection&&this.selection!==t&&this.removeSelection(),this.selection=t,console.log("selected Node"),console.log(t),this.selection.isActive=!0,C()(t.links).forEach(function(t){var s=w()(t,2),i=s[0],o=s[1],n=e.nodes[i];n&&(n.isActiveNeighbour=!0,n.value=o)}),this.triggerDraw()}},{key:"removeSelection",value:function(){var t=this,e=this.selection;e&&(e.isActive=!1,a()(e.links).forEach(function(s){var i=t.nodes[s];i&&(i.isActiveNeighbour=!1,e.links[s]=i.value)})),this.selection=null,this.valid=!1}},{key:"scale",set:function(t){this._scale=t<1?1:t,this.valid=!1,this.updateScaleUI(this.scale)},get:function(){return this._scale}},{key:"scale2",set:function(t){t<1?this._scale=1:this._scale2=t,this.valid=!1,this.updateScale2UI(this.scale2)},get:function(){return this._scale2}},{key:"imgScale",set:function(t){this._imgScale=t<1?1:t,this.valid=!1},get:function(){return this._imgScale}},{key:"activeImgScale",set:function(t){this._activeImgScale=t<1?1:t,this.valid=!1},get:function(){return this._activeImgScale}},{key:"borderWidth",set:function(t){this._borderWidth=t<0?0:t,this.valid=!1},get:function(){return this._borderWidth}},{key:"cluster",set:function(t){this._cluster=t<1?1:t,this.valid=!1,this.ui.cluster=this.cluster},get:function(){return this._cluster}},{key:"scrollGrowth",set:function(t){this._scrollGrowth=t<=1?1.01:t},get:function(){return this._scrollGrowth}},{key:"scrollImgGrowth",set:function(t){this._scrollImgGrowth=t<=1?1.01:t},get:function(){return this._scrollImgGrowth}},{key:"clusterGrowth",get:function(){return this._clusterGrowth},set:function(t){this._clusterGrowth=t<=1?1.01:t,this.ui.clusterGrowth=this.clusterGrowth}},{key:"valid",set:function(t){t||window.requestAnimationFrame(this.draw),this._valid=t},get:function(){return this._valid}}]),t}(),G={render:function(){var t=this.$createElement;return(this._self._c||t)("input",{attrs:{type:"range",min:"0",max:"800",step:"10"},domProps:{value:this.value}})},staticRenderFns:[]};var W=s("VU/8")({name:"range-slider",props:["value","change","input","slide"]},G,!1,function(t){s("zUi4")},"data-v-0f9d6ee5",null).exports,L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"triblet-area"},[t.node.negatives?s("div",{staticClass:"negatives area",class:{redActive:t.redActive},on:{click:t.toogleRed}},[t.node.negatives?t._l(t.node.negatives,function(e,i){return s("div",{staticClass:"image"},[s("img",{key:i,attrs:{src:e.icon.src,alt:""},on:{click:function(e){t.removeNegativ(i)}}})])}):t._e()],2):t._e(),t._v(" "),t.node.icon?s("div",{staticClass:"node"},[t.node.icon?[s("img",{attrs:{src:t.node.icon.src,alt:""}})]:t._e()],2):t._e(),t._v(" "),t.node.positives?s("div",{staticClass:"positives area",class:{greenActive:t.greenActive},on:{click:t.toogleBlue}},[t.node.positives?t._l(t.node.positives,function(e,i){return s("div",{staticClass:"image"},[s("img",{key:i,attrs:{src:e.icon.src,alt:""},on:{click:function(e){t.removePositiv(i)}}})])}):t._e()],2):t._e()])},staticRenderFns:[]};var M=s("VU/8")({name:"triblets",props:["node","positives","negatives"],data:function(){return{redActive:!1,greenActive:!1}},methods:{toogleRed:function(){!this.redActive&&this.greenActive&&(this.greenActive=!1),this.redActive=!this.redActive},toogleBlue:function(){!this.greenActive&&this.redActive&&(this.redActive=!1),this.greenActive=!this.greenActive},removePositiv:function(t){this.node.positives.splice(t,1)},removeNegativ:function(t){this.node.negatives.splice(t,1)}}},L,!1,function(t){s("bHXA")},"data-v-737c4794",null).exports,E={name:"classifier",props:["nodes","node","labels"],data:function(){return{label:"",showLabels:!1,selectedNodes:[]}},watch:{node:function(t){this.addNode(t)},nodes:function(t){var e=this;t&&t.forEach(function(t){return e.addNode(t)})}},methods:{addNode:function(t){t&&-1===this.selectedNodes.indexOf(t)&&this.selectedNodes.push(t)},removeNode:function(t){this.selectedNodes.splice(t,1)},addLabel:function(t){var e=this;t.target;console.log("addLabel clicked"),console.log(this.label),-1===this.labels.indexOf(this.label)&&this.labels.push(this.label),this.selectedNodes.forEach(function(t){-1===t.labels.indexOf(e.label)&&t.labels.push(e.label)}),this.label="",this.showLabels=!1},handleFocus:function(t){console.log("input focus"),this.showLabels=!0},handleBlur:function(t){console.log("input blur")},chooseLabel:function(t){this.label=t,this.showLabels=!1}},computed:{labelsFiltered:function(){var t=this;return this.labels.filter(function(e){return e.includes(t.label)})}}},Y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"classifier"},[s("div",{staticClass:"imgArea"},t._l(t.selectedNodes,function(e,i){return s("div",{key:i,staticClass:"image"},[s("img",{attrs:{src:e.icon.src,alt:""},on:{click:function(e){t.removeNode(i)}}})])})),t._v(" "),s("div",{staticClass:"row"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.label,expression:"label"}],attrs:{type:"text"},domProps:{value:t.label},on:{focus:t.handleFocus,blur:t.handleBlur,input:function(e){e.target.composing||(t.label=e.target.value)}}}),t._v(" "),t.showLabels?s("div",{staticClass:"dropdown"},t._l(t.labelsFiltered,function(e){return s("div",{key:e,staticClass:"item",on:{click:function(s){t.chooseLabel(e)}}},[t._v(t._s(e))])})):t._e(),t._v(" "),s("div",{staticClass:"btn",on:{click:t.addLabel}},[t._v("add label")])])])},staticRenderFns:[]};var X=s("VU/8")(E,Y,!1,function(t){s("tv5F")},"data-v-308181db",null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"scissors",class:{active:this.active},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},on:{click:this.clickHandler}},[e("circle",{attrs:{cx:"6",cy:"6",r:"3"}}),this._v(" "),e("circle",{attrs:{cx:"6",cy:"18",r:"3"}}),this._v(" "),e("line",{attrs:{x1:"20",y1:"4",x2:"8.12",y2:"15.88"}}),this._v(" "),e("line",{attrs:{x1:"14.47",y1:"14.48",x2:"20",y2:"20"}}),this._v(" "),e("line",{attrs:{x1:"8.12",y1:"8.12",x2:"12",y2:"12"}})])},staticRenderFns:[]};var K={store:null,name:"TsneMap",components:{Scissors:s("VU/8")({name:"Scissors",props:["clickHandler","active"]},U,!1,function(t){s("jyKv")},"data-v-7a755806",null).exports,RangeSlider:W,Triblets:M,Classifier:X},data:function(){return{items:[],positives:[],negatives:[],socket:null,connectedToSocket:!1,loadingNodes:!1,nodesCount:0,scale:0,scale2:0,labels:[],selectedLabel:null,clickedNode:null,labelColor:"#6057ff",showKLabels:!1,scissors:!1,width:0,height:0,activeNode:{},cluster:5,imgWidth:0,activeImgWidth:0,borderWidth:0,range:0,cuttedNodes:[],showOptions:!1,scrollGrowth:0,scrollImgGrowth:0,clusterGrowth:0}},methods:{getNode:function(t){return this.store.getNode(t)},sendData:function(){console.log("send data clicked");var t=this.store.getNodes();this.store.resetStore(),this.socket.emit("updateNodes",t),this.loadingNodes=!0,this.nodesCount=0},changeCluster:function(t){this.store.cluster+=t,this.cluster=this.store.cluster},updateSelection:function(t){this.activeNode=t||{}},updateScale:function(t){this.scale=t},updateScale2:function(t){this.scale2=t},changeImgWidth:function(t){this.store.imgScale+=t,this.imgWidth=this.store.imgScale},activeImgWidthMore:function(){this.store.activeImgScale+=1,this.activeImgWidth=this.store.activeImgScale},activeImgWidthLess:function(){this.store.activeImgScale-=1,this.activeImgWidth=this.store.activeImgScale},borderWidthMore:function(){this.store.borderWidth+=1,this.borderWidth=this.store.borderWidth},borderWidthLess:function(){this.store.borderWidth-=1,this.borderWidth=this.store.borderWidth},addNodeToClassify:function(t){console.log("addNodeToClassify"),console.log(t),-1===this.cuttedNodes.indexOf(t)&&this.cuttedNodes.push(t)},toggleShowOptions:function(){this.showOptions=!this.showOptions},changeScrollGrowth:function(t){this.store.scrollGrowth=Math.round(100*(this.store.scrollGrowth+t))/100,this.scrollGrowth=this.store.scrollGrowth},changeScrollImgGrowth:function(t){this.store.scrollImgGrowth=Math.round(100*(this.store.scrollImgGrowth+t))/100,this.scrollImgGrowth=this.store.scrollImgGrowth},changeClusterGrowth:function(t){this.store.clusterGrowth=Math.round(100*(this.store.clusterGrowth+t))/100},toggleShowKLabels:function(){this.showKLabels=!this.showKLabels,this.store.showKLabels=this.showKLabels,this.store.valid=!1,console.log(this.showKLabels)},toogleLabel:function(t){this.selectedLabel===t?this.selectedLabel=null:this.selectedLabel=t,this.store.selectedLabel=this.selectedLabel,this.store.triggerDraw()},selectScissors:function(){console.log("selectScissors"),this.scissors=!this.scissors,this.store.scissors=this.scissors}},watch:{cluster:function(t){console.log("change cluster"),this.store.cluster=t}},computed:{selectedNode:function(){return this.store&&this.store.selection&&this.store.selection.name},selectedNodeNeighboursCount:function(){return this.activeNode.links&&a()(this.activeNode.links).length},imageScale:function(){return this.store&&this.store.selection&&this.store.selection.imageScale}},mounted:function(){var t=this,e=r.a.connect("http://localhost:3000",{transports:["websocket"],reconnectionDelay:100,reconnectionDelayMax:1e3}),s=document.getElementById("canvas"),i=.8*s.parentNode.clientWidth;this.width=i,this.height=700;var o=document.createElement("canvas");s.width=i,s.height=700,o.width=i,o.height=700;var n=new I(s,o,e,this);this.store=n,n.updateSelectionUI=this.updateSelection,n.updateScaleUI=this.updateScale,n.updateScale2UI=this.updateScale2,n.addNodeToClassify=this.addNodeToClassify,n.labelColor=this.labelColor,this.cluster=n.cluster,this.imgWidth=n.imgScale,this.activeImgWidth=n.activeImgScale,this.borderWidth=n.borderWidth,this.scrollGrowth=n.scrollGrowth,this.scrollImgGrowth=n.scrollImgGrowth,console.log("Save store"),console.log(this.store),this.socket=e,e.on("connect",function(){t.connectedToSocket=!0,console.log("conected"),console.log("Socket id: "+e.id),console.log(e);var s=t.store.getNodes();console.log("nodes in store while connect (its maybe just a reconnect)"),console.log(s),a()(s).length||t.loadingNodes||(e.emit("updateNodes",{}),t.loadingNodes=!0)}),e.on("disconnect",function(s){t.connectedToSocket=!1,console.log("disconnect: "+s),console.log(e)}),e.on("node",function(t,e){t.index%100==0&&(console.log("receive node "+t.index),console.log(t)),n.addNode(new p(t,n.ctx,n.hitCtx)),n.triggerDraw(),e(t.index)}),e.on("receiveImage",function(t){var e=n.nodes[t.index];e.image.src="data:image/jpeg;base64,"+t.buffer,e.hasImage=!0,n.valid=!1}),e.on("allNodesUpdated",function(){t.loadingNodes=!1}),e.on("nodesCount",function(e){console.log("nodesCount: "+e),t.nodesCount=e}),e.on("updateLabels",function(e){console.log("updateLabels"),console.log(e),t.labels=e}),e.on("updateKdtree",function(t){console.log("updateKdtree"),console.log(t),n.kdtree=t}),e.on("connect_error",function(){console.log("connect_error")}),e.on("connect_timeout",function(){console.log("connect_timeout")}),e.on("reconnect",function(){console.log("reconnect")}),e.on("connecting",function(){console.log("connecting")}),e.on("reconnecting",function(){console.log("reconnecting")}),e.on("connect_failed",function(){console.log("connect_failed")}),e.on("reconnect_failed",function(){console.log("reconnect_failed")}),e.on("close",function(){console.log("close")})},beforeDestroy:function(){this.socket&&this.socket.disconnect(),clearInterval(this.store.timerId)}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"body"},[s("div",{staticClass:"sub-header"},[s("div",{staticClass:"tool-box row"},[t.loadingNodes?s("div",{staticClass:"loader"}):t._e(),t._v(" "),s("scissors",{attrs:{active:t.scissors,clickHandler:t.selectScissors}},[t._v("a")])],1),t._v(" "),s("div",[s("div",{staticClass:"row"},[s("div",[t._v("# "+t._s(t.nodesCount))]),t._v(" "),s("div",[t._v("connected: "+t._s(t.connectedToSocket))])])]),t._v(" "),s("div",{staticClass:"row"},[t._l(t.labels,function(e,i){return s("div",{key:i,staticClass:"btn",class:{active:t.selectedLabel===e},style:{color:e},on:{click:function(s){t.toogleLabel(e)}}},[t._v("\n                "+t._s(e)+"\n            ")])}),t._v(" "),s("div",{staticClass:"btn",class:{active:t.showKLabels},on:{click:t.toggleShowKLabels}},[t._v("\n                K-Label\n            ")])],2),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",class:{active:t.showOptions},on:{click:t.toggleShowOptions}},[t._v("Options")]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.sendData}},[t._v("Update Data")])])]),t._v(" "),s("div",{staticClass:"row"},[s("canvas",{ref:"canvas",attrs:{id:"canvas",tabindex:"0"}}),t._v(" "),s("div",{staticClass:"details"},[t.showOptions?s("div",{staticClass:"options info-box"},[s("div",{staticClass:"row-btn"},[s("div",[t._v("Cluster: "+t._s(Math.round(t.cluster)))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:function(e){t.changeCluster(-100)}}},[t._v("-100")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeCluster(-1e3)}}},[t._v("-1000")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeCluster(100)}}},[t._v("+100")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeCluster(1e3)}}},[t._v("+1000")])])]),t._v(" "),s("div",{staticClass:"row-btn"},[s("div",[t._v("ImageWidth: "+t._s(t.imgWidth))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:function(e){t.changeImgWidth(-2)}}},[t._v("-2")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeImgWidth(2)}}},[t._v("+2")])])]),t._v(" "),s("div",{staticClass:"row-btn"},[s("div",[t._v("ImageWidth(active): "+t._s(t.activeImgWidth))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:t.activeImgWidthLess}},[t._v("-1")]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.activeImgWidthMore}},[t._v("+1")])])]),t._v(" "),s("div",{staticClass:"row-btn"},[s("div",[t._v("BorderWidth: "+t._s(t.borderWidth))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:t.borderWidthLess}},[t._v("-1")]),t._v(" "),s("div",{staticClass:"btn",on:{click:t.borderWidthMore}},[t._v("+1")])])]),t._v(" "),s("div",{staticClass:"row-btn"},[s("div",[t._v("ScrollGrowth: "+t._s(t.scrollGrowth))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:function(e){t.changeScrollGrowth(-.01)}}},[t._v("-0.1")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeScrollGrowth(.01)}}},[t._v("+0.1")])])]),t._v(" "),s("div",{staticClass:"row-btn"},[s("div",[t._v("ScrollImgGrowth: "+t._s(t.scrollImgGrowth))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:function(e){t.changeScrollImgGrowth(-.01)}}},[t._v("-0.1")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeScrollImgGrowth(.01)}}},[t._v("+0.1")])])]),t._v(" "),s("div",{staticClass:"row-btn"},[s("div",[t._v("ClusterGrowth: "+t._s(t.clusterGrowth))]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:function(e){t.changeClusterGrowth(-.01)}}},[t._v("-0.1")]),t._v(" "),s("div",{staticClass:"btn",on:{click:function(e){t.changeClusterGrowth(.01)}}},[t._v("+0.1")])])])]):t._e(),t._v(" "),s("router-view",{attrs:{nodes:t.cuttedNodes,labels:t.labels,node:t.clickedNode,getNode:t.getNode}}),t._v(" "),s("div",{staticClass:"info-box"},[t.activeNode.hasImage?s("img",{staticClass:"img",attrs:{src:t.activeNode.image.src}}):t._e(),t._v(" "),s("div",[t._v("Name: "+t._s(t.activeNode.name))]),t._v(" "),s("div",[t._v("Label: "+t._s(t.activeNode.label))]),t._v(" "),s("div",[t._v("Labels: "+t._s(t.activeNode.labels))]),t._v(" "),s("div",[t._v("Links #: "+t._s(t.selectedNodeNeighboursCount))]),t._v(" "),s("div",[t._v("S: "+t._s(t.scale))]),t._v(" "),s("div",[t._v("IS: "+t._s(t.scale2))])])],1)]),t._v(" "),s("triblets",{attrs:{node:t.activeNode}})],1)},staticRenderFns:[]};var D={name:"App",components:{NavHeader:n,TsneMap:s("VU/8")(K,R,!1,function(t){s("rrVe")},"data-v-47576895",null).exports}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("nav-header"),this._v(" "),e("tsne-map")],1)},staticRenderFns:[]};var B=s("VU/8")(D,P,!1,function(t){s("luPe")},null,null).exports,O=s("/ocq"),T={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("Hallo Welt")])},staticRenderFns:[]};var F=s("VU/8")({name:"Welcome"},T,!1,function(t){s("2pbd")},"data-v-5548b6b7",null).exports,H=s("mvHQ"),V=s.n(H),z={name:"Svm",props:["node","nodes","getNode"],data:function(){return{positives:[],positivesAll:[],negatives:[],negativesAll:[],selectPositives:!0,loading:!1}},watch:{node:function(t){this.addNode(t)},nodes:function(t){var e=this;t&&t.forEach(function(t){return e.addNode(t)})}},methods:{addNode:function(t){t&&-1===this.positives.indexOf(t)&&-1===this.negatives.indexOf(t)&&(this.selectPositives?this.positives.push(t):this.negatives.push(t))},toggleActive:function(t){this.selectPositives=t},removePositives:function(t){this.negatives.push(this.positives[t]),this.positives.splice(t,1)},removeNegatives:function(t){this.positives.push(this.negatives[t]),this.negatives.splice(t,1)},sendData:function(){var t=this;return v()(d.a.mark(function e(){var s,i;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,t.positives.forEach(function(e){return-1===t.positivesAll.indexOf(e)&&t.positivesAll.push(e)}),t.negatives.forEach(function(e){return-1===t.negativesAll.indexOf(e)&&t.negativesAll.push(e)}),console.log("send data clicked"),s=V()({p:t.positivesAll,n:t.negativesAll}),e.next=7,fetch("/api/v1/updateSvm",{method:"POST",headers:{"Content-type":"application/json"},body:s}).then(function(t){return t.json()}).catch(function(t){return console.error(t)});case 7:i=e.sent,t.positives=[],i.p.forEach(function(e){return t.positives.push(t.getNode(e))}),t.negatives=[],i.n.forEach(function(e){return t.negatives.push(t.getNode(e))}),t.loading=!1;case 13:case"end":return e.stop()}},e,t)}))()}}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"area"},[t.loading?s("div",{staticClass:"loading"},[s("div",{staticClass:"loading-wheel"})]):t._e(),t._v(" "),s("div",{staticClass:"imgArea",class:{activePositiv:t.selectPositives},on:{click:function(e){t.toggleActive(!0)}}},t._l(t.positives,function(e,i){return s("div",{key:i,staticClass:"image"},[s("img",{attrs:{src:e.icon.src,alt:""},on:{click:function(e){t.removePositives(i)}}})])})),t._v(" "),s("div",{staticClass:"imgArea",class:{activeNegativ:!t.selectPositives},on:{click:function(e){t.toggleActive(!1)}}},t._l(t.negatives,function(e,i){return s("div",{key:i,staticClass:"image"},[s("img",{attrs:{src:e.icon.src,alt:""},on:{click:function(e){t.removeNegatives(i)}}})])})),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"btn",on:{click:t.sendData}},[t._v("train")]),t._v(" "),s("div",{staticClass:"btn"},[t._v("stop")])])])},staticRenderFns:[]};var j=s("VU/8")(z,$,!1,function(t){s("da1V")},"data-v-c1bfa4e8",null).exports;i.a.use(O.a);var q=new O.a({routes:[{path:"/",name:"Welcome",component:F},{path:"/classifier",name:"classifier",component:X,props:!0},{path:"/"+A,name:A,component:j,props:!0}]});s("cilB");i.a.config.productionTip=!1,new i.a({el:"#app",router:q,components:{App:B},template:"<App/>"})},bHXA:function(t,e){},cilB:function(t,e){},da1V:function(t,e){},jyKv:function(t,e){},luPe:function(t,e){},oqat:function(t,e){},rrVe:function(t,e){},tv5F:function(t,e){},zUi4:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.76e8fd675be3f71f4416.js.map