"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[442,470],{5867:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s(7294);function i(e){e.isClicked=!0}function r(e){let{style:t}=e;return n.createElement("div",{className:"responsive-design-resizer-handle-dots",style:t},n.createElement("div",{className:"responsive-design-resizer-handle-dot"}),n.createElement("div",{className:"responsive-design-resizer-handle-dot"}),n.createElement("div",{className:"responsive-design-resizer-handle-dot"}))}function l(e){const[t,s]=n.useState(!1);return n.createElement("div",{id:"responsive-design-resizer-container",onMouseDown:i.bind(this,e.mouseClick),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1)},n.createElement("div",{id:"responsive-design-resizer",style:{backgroundColor:t?"#46a0ff":"#909090"}}),n.createElement("div",{id:"responsive-design-resizer-handle",style:{backgroundColor:t?"#2d8bed":"#757575"}},n.createElement("div",{id:"responsive-design-resizer-handle-dot-container"},n.createElement(r,{style:{float:"left"}}),n.createElement(r,{style:{float:"right"}}))))}},3135:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s(4336),i=s(5867),r=s(7294);function l(e,t,s,n){e.isClicked&&(e.offset+=n.movementX,t.current.style.width=`calc(50% + ${e.offset-20}px)`,s.current.style.width=`calc(50% + ${-e.offset-20}px)`)}function a(e){e.isClicked=!1}const d=r.forwardRef(((e,t)=>r.createElement("div",{className:"responsive-design-panel",ref:t},r.createElement(n.Z,{tableStyle:{borderRadius:"5px",width:"100%"},content:[["Planet","Diameter","Mass","Moons"],["Earth",12756,5.97,1],["Mars",6792,.642,2],["Jupiter",142984,1898,79],["Neptune",49528,102,14]]}))));function o(){const e={isClicked:!1,offset:0},t=r.useRef(null),s=r.useRef(null);return r.createElement("div",{id:"responsive-design",onMouseMove:l.bind(this,e,t,s),onMouseUp:a.bind(this,e)},r.createElement("div",{className:"feature-sub-header"},"Responsive design"),r.createElement("div",{style:{display:"flex",marginTop:"20px"}},r.createElement(d,{ref:t}),r.createElement(i.default,{mouseClick:e}),r.createElement(d,{ref:s})))}}}]);