"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[812],{9503:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(4336),n=a(7294);function r(){return n.createElement("div",{id:"programmatic-updates-right"},n.createElement("div",{className:"feature-text"},"Stream data and ",n.createElement("b",null,"update cells")," programmatically without any manual input. Maximimise user experience by preconfiguring reactive on-text change styling."))}function o(e){e.isConnected&&setTimeout((()=>{const t=Math.floor(5*Math.random()+1),a=Math.floor(5*Math.random()+1);let l="";l=1===a||2===a?"$"+Math.round(1e3*Math.random()*10)/100:3===a?(Math.round(Math.random())?1:-1)*Math.round(1.5*Math.random()*10)/10+"%":Math.round(2.5*Math.random()*10)/10+"%",e.updateCell({newText:l,rowIndex:t,columnIndex:a}),o(e)}),10)}function i(){const e=n.useRef(null);return setTimeout((()=>{e.current&&setTimeout((()=>o(e.current.children[0])))})),n.createElement("div",{id:"programmatic-updates-left"},n.createElement("div",{id:"programmatic-updates-left-table",ref:e},n.createElement(l.Z,{tableStyle:{borderRadius:"5px",width:"100%"},customColumnsSettings:[{headerName:"Stock",isCellTextEditable:!0,columnDropdown:{isSortAvailable:!0}},{headerName:"Current",availableDefaultColumnTypes:["Currency"],cellStyle:{fontWeight:"500"}},{headerName:"Last",cellStyle:{fontWeight:"500",color:"grey"},headerStyles:{default:{color:"#575757"}},availableDefaultColumnTypes:["Currency"]},{headerName:"Change",defaultColumnTypeName:"Change",cellStyle:{fontWeight:"500"},customColumnTypes:[{name:"Change",customTextProcessing:{changeStyleFunc:e=>({color:Number.parseFloat(e)>=0?"green":"red"})}}]}],displayIndexColumn:!1,displayAddNewColumn:!1,displayAddNewRow:!1,stripedRows:{odd:{backgroundColor:""},even:{backgroundColor:"#eeeeee7a"}},cellStyle:{paddingLeft:"10px"},isCellTextEditable:!1,availableDefaultColumnTypes:[],columnDropdown:{displaySettings:{openMethod:{overlayClick:!0}},isSortAvailable:!1,isDeleteAvailable:!1,isInsertLeftAvailable:!1,isInsertRightAvailable:!1,isMoveAvailable:!1},rowDropdown:{displaySettings:{isAvailable:!1}},displayHeaderIcons:!1,content:[["Stock","Current","Last","Change","Yield"],["JPA","$88.22","$85.73","-0.1%","1.4%"],["REFR","$18.52","$88","1.5%","0.4%"],["CORA","$69.08","$84.46","0%","1.6%"],["SOR","$46.84","$48.69","0.9%","2.4%"],["LCRDA","$20.25","$29.3","0.4%","0.8%"]]})))}function d(){return n.createElement("div",{id:"programmatic-updates"},n.createElement(i,null),n.createElement(r,null))}}}]);