(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a(3),d=a(5),n=a(4),c=a(1),o=a.n(c),i=a(7),p=a.n(i),m=(a(12),a(13),a(0)),u=function(e){Object(d.a)(a,e);var t=Object(n.a)(a);function a(){var e;Object(r.a)(this,a);for(var s=arguments.length,d=new Array(s),n=0;n<s;n++)d[n]=arguments[n];return(e=t.call.apply(t,[this].concat(d))).handleKeydown=function(t){t.keyCode===e.props.keyCode&&e.playSound()},e.playSound=function(){e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id);var t=document.getElementById(e.props.id);t.classList.add("drum-pad-active"),setTimeout((function(){t.classList.remove("drum-pad-active")}),100)},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"drum-pad",id:this.props.id,onClick:this.playSound,children:[Object(m.jsx)("h2",{children:this.props.letter}),Object(m.jsx)("audio",{className:"clip",id:this.props.letter,src:this.props.src,ref:function(t){return e.audio=t},keyCode:this.props.keyCode})]})}}]),a}(o.a.Component),l=u,h=function(e){Object(d.a)(a,e);var t=Object(n.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleDisplay=function(e){return s.setState({display:e})},s.state={display:"Let's Start!"},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{id:"drum-machine",children:[Object(m.jsx)("div",{id:"display",children:this.state.display}),Object(m.jsx)("div",{id:"drum-pads",children:y.map((function(t){return Object(m.jsx)(l,{id:t.id,letter:t.letter,src:t.src,keyCode:t.keyCode,handleDisplay:e.handleDisplay},t.id)}))})]})}}]),a}(o.a.Component),y=[{keyCode:81,letter:"Q",id:"Heater-1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,letter:"W",id:"Heater-2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,letter:"E",id:"Heater-3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,letter:"A",id:"Heater-4",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,letter:"S",id:"Clap",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,letter:"D",id:"Open-HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,letter:"Z",id:"Kick-n'-Hat",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,letter:"X",id:"Kick",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,letter:"C",id:"Closed-HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}];p.a.render(Object(m.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0542e067.chunk.js.map