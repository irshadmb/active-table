"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[202],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(1980),u=a(7392),d=a(12);function p(e){return function(e){var t;return(null==(t=l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??p;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var b=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},c=e=>{var t;let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},o,{className:(0,r.Z)("tabs__item",x.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",x.tabList)},l.createElement(f,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,b.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},7537:(e,t,a)=>{function n(){window.XLSX||a.e(105).then(a.bind(a,4105)).then((e=>{window.XLSX=e}))}a.d(t,{D:()=>n})},9814:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(){return n.createElement("div",{style:{height:"1px"}})}},1853:(e,t,a)=>{function n(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function l(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];n(t),window.toggleNavOnScroll=n.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function r(){setTimeout((()=>{var e;const t=null==(e=document.querySelectorAll(".plugin-pages > body > #__docusaurus > nav"))?void 0:e[0];try{t.classList.add("fade-in")}catch(a){console.error(a),console.log("element was not rendered in time - use MutationObserver")}}),2)}a.r(t),a.d(t,{fadeIn:()=>r,readdAutoNavShadowToggle:()=>l})},3483:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(e){return e.data.map(((e,t)=>{const a=""===e?"":JSON.stringify(e);return n.createElement("div",{key:t},">"," ",a)}))}},9272:(e,t,a)=>{a.d(t,{Z:()=>r,v:()=>l});var n=a(7294);function l(e){var t;return null==e||null==(t=e.children[0])?void 0:t.children[0]}function r(e){let{children:t,minHeight:a}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||343}px`}},n.createElement("div",null,t))}},7300:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9272),l=a(7294);function r(e){null!=e&&e.isConnected&&setTimeout((()=>{const t=Math.floor(5*Math.random()+1),a=Math.floor(5*Math.random()+1);let n="";n=1===a||2===a?"$"+Math.round(1e3*Math.random()*10)/100:3===a?(Math.round(Math.random())?1:-1)*Math.round(1.5*Math.random()*10)/10+"%":Math.round(2.5*Math.random()*10)/10+"%",e.updateCell({newText:n,rowIndex:t,columnIndex:a}),r(e)}),10)}function o(e){null!=e&&e.isConnected&&setTimeout((()=>{const t=Math.floor(5*Math.random()+1),a=Math.floor(5*Math.random()+1);let n="";n=1===a?Math.round(20*Math.random()*10)/10+"%":2===a?Math.round(1500*Math.random()*10)/10+"MB":3===a?Math.round(1.5*Math.random()*10)/10+"MB/s":Math.round(1.5*Math.random()*10)/10+"Mbps",null==e||e.updateCell({newText:n,rowIndex:t,columnIndex:a}),o(e)}),40)}function i(e){let{children:t,isStock:a,minHeight:i}=e;const s=l.useRef(null);return setTimeout((()=>{if(s.current){const e=a?r:o;setTimeout((()=>{var t;const a=(0,n.v)(null==(t=s.current)?void 0:t.children[0]);e(a)}))}})),l.createElement("div",{ref:s},l.createElement(n.Z,{minHeight:i},t))}},3693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>x,default:()=>g,frontMatter:()=>b,metadata:()=>f,toc:()=>y});var n=a(7462),l=a(7294),r=a(3905),o=a(7300),i=a(9272),s=a(3483);function u(e){return l.createElement("div",null,"Method results:",l.createElement(s.Z,{data:e.resultText}))}function d(e){let{children:t,propertyName:a,displayResults:n,argument:r}=e;const o=l.useRef(null),[s,d]=l.useState([""]);return l.createElement("div",null,l.createElement("div",{ref:o},l.createElement(i.Z,null,t)),l.createElement("div",{className:"documentation-example-container"},l.createElement("button",{className:"documentation-method-button",onClick:()=>function(e,t,a,n,l,r){const o=(0,i.v)(e)[n](r);if(l??1){let e=[...t];1===e.length&&""===e[0]&&(e=[]),e.length>3&&e.pop(),e.unshift(JSON.parse(JSON.stringify(o))),a(e)}}(o.current.children[0],s,d,a,n,r)},"Call Method"),(n??!0)&&l.createElement(u,{resultText:s})))}var p=a(4336),m=a(9814),c=a(1262),h=a(5162),k=a(4866);const b={sidebar_position:11},x="Methods",f={unversionedId:"docs/methods",id:"docs/methods",title:"Methods",description:"Method properties that can be called directly on the Active Table element.",source:"@site/docs/docs/methods.mdx",sourceDirName:"docs",slug:"/docs/methods",permalink:"/docs/methods",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/active-table/tree/main/website/docs/docs/methods.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docs",previous:{title:"Files",permalink:"/docs/files"},next:{title:"Events",permalink:"/docs/events"}},v={},y=[{value:"<code>getData</code>",id:"getData",level:3},{value:"Example",id:"example",level:4},{value:"<code>getColumnsDetails</code>",id:"getColumnsDetails",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>updateCell</code>",id:"updateCell",level:3},{value:"<code>CellDetails</code>",id:"CellDetails",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>updateStructure</code>",id:"updateStructure",level:3},{value:"<code>StructureDetails</code>",id:"StructureDetails",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>updateData</code>",id:"updateData",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>importFile</code>",id:"importFile",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>exportFile</code>",id:"exportFile",level:3},{value:"<code>ExportSingleFile</code>",id:"ExportSingleFile",level:4},{value:"Example",id:"example-6",level:4}],N={toc:y},w="wrapper";function g(e){let{components:t,...l}=e;return(0,r.kt)(w,(0,n.Z)({},N,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"methods"},"Methods"),(0,r.kt)("p",null,"Method properties that can be called directly on the Active Table element."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the Active Table component has been fully rendered on the DOM before using these.")),(0,r.kt)("h3",{id:"getData"},(0,r.kt)("inlineCode",{parentName:"h3"},"getData")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"() => (string|number)[][]"))),(0,r.kt)("p",null,"Returns current table contents 2D array."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)(c.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,r.kt)(c.Z,{mdxType:"BrowserOnly"},(()=>a(7537).D())),(0,r.kt)(d,{propertyName:"getData",mdxType:"TableContainerMethods"},(0,r.kt)(p.Z,{data:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.getData();\n")))),(0,r.kt)(m.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"getColumnsDetails"},(0,r.kt)("inlineCode",{parentName:"h3"},"getColumnsDetails")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/sharedTypes#ColumnsDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"() => ColumnsDetails")))),(0,r.kt)("p",null,"Returns details related to existing columns - ",(0,r.kt)("inlineCode",{parentName:"p"},"width"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"typeName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cellDropdownItems")," (if the column type contains a dropdown). This is particularly useful if the user has made changes to columns and you want to recreate them\nin the next session on the initial load."),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)(d,{propertyName:"getColumnsDetails",mdxType:"TableContainerMethods"},(0,r.kt)(p.Z,{data:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.getColumnsDetails();\n")))),(0,r.kt)(m.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"updateCell"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateCell")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"(update: CellDetails) => void"))),(0,r.kt)("h4",{id:"CellDetails"},(0,r.kt)("inlineCode",{parentName:"h4"},"CellDetails")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"newText:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"string | number"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"rowIndex: number"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"columnIndex: number")," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Update cell text programmatically. Both ",(0,r.kt)("inlineCode",{parentName:"p"},"rowIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"columnIndex")," start at ",(0,r.kt)("em",{parentName:"p"},"0")," where it is the header row for\n",(0,r.kt)("inlineCode",{parentName:"p"},"rowIndex")," and the left-most column for ",(0,r.kt)("inlineCode",{parentName:"p"},"columnIndex"),"."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)(o.Z,{mdxType:"TableContainerProgrammaticUpdates"},(0,r.kt)(p.Z,{data:[["Name","CPU","Memory","Disk","Network"],["Chrome","4.5%","1400MB","0.2MB/s","1.2Mbps"],["Firefox","2.5%","800MB","0.1MB/s","0.5Mbps"],["Edge","5.5%","1000MB","1.4MB/s","0.7Mbps"],["Safari","1.5%","1200MB","1.2MB/s","0.2Mbps"],["Opera","3.5%","400MB","0.8MB/s","0.5Mbps"]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.updateCell({newText: 'sample text', rowIndex: 1, columnIndex: 1});\n"))),(0,r.kt)(h.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  id="active-table"\n  data=\'[\n    ["Name", "CPU", "Memory", "Disk", "Network"],\n    ["Chrome", "4.5%", "1400MB", "0.2MB/s", "1.2Mbps"],\n    ["Firefox", "2.5%", "800MB", "0.1MB/s", "0.5Mbps"],\n    ["Edge", "5.5%", "1000MB", "1.4MB/s", "0.7Mbps"],\n    ["Safari", "1.5%", "1200MB", "1.2MB/s", "0.2Mbps"],\n    ["Opera", "3.5%", "400MB", "0.8MB/s", "0.5Mbps"]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n\n<script>\n  function updateCell(tableElement) {\n    if (!tableElement?.isConnected) return;\n    setTimeout(() => {\n      const rowIndex = Math.floor(Math.random() * 5 + 1);\n      const columnIndex = Math.floor(Math.random() * 5 + 1);\n      let newText = \'\';\n      if (columnIndex === 1) {\n        newText = `${Math.round(Math.random() * 20 * 10) / 10}%`;\n      } else if (columnIndex === 2) {\n        newText = `${Math.round(Math.random() * 1500 * 10) / 10}MB`;\n      } else if (columnIndex === 3) {\n        newText = `${Math.round(Math.random() * 1.5 * 10) / 10}MB/s`;\n      } else {\n        newText = `${Math.round(Math.random() * 1.5 * 10) / 10}Mbps`;\n      }\n      tableElement.updateCell({newText, rowIndex, columnIndex});\n      updateCell(tableElement);\n    }, 100);\n  }\n  const tableElementRef = document.getElementById(\'active-table\');\n  updateCell(tableElementRef);\n<\/script>\n')))),(0,r.kt)(m.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"updateStructure"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateStructure")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"#StructureDetails"},(0,r.kt)("inlineCode",{parentName:"a"},"(update: StructureDetails) => void")))),(0,r.kt)("h4",{id:"StructureDetails"},(0,r.kt)("inlineCode",{parentName:"h4"},"StructureDetails")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"structure:")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"row"')," | ",(0,r.kt)("inlineCode",{parentName:"li"},'"column"'),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"isInsert: boolean"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"index: number"),", ",(0,r.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"li"},"data?: (string|number)[]")," ",(0,r.kt)("br",null),"\n}")),(0,r.kt)("p",null,"Programmatically insert/remove rows/columns. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"structure")," defines whether the structure type is for a ",(0,r.kt)("em",{parentName:"p"},'"row"')," or a ",(0,r.kt)("em",{parentName:"p"},'"column"'),". ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"isInsert")," sets the update behaviour; ",(0,r.kt)("em",{parentName:"p"},"true")," will create a new structure, ",(0,r.kt)("em",{parentName:"p"},"false")," will remove an existing one. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"index")," is the row/column index. When adding a new structure, a value of ",(0,r.kt)("em",{parentName:"p"},"-1")," will append it to the end of the table. ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"data")," defines the new cells' content. If not defined and the update is for an insert, this will be populated with ",(0,r.kt)("a",{parentName:"p",href:"/docs/data#defaultText"},(0,r.kt)("inlineCode",{parentName:"a"},"defaultText")),"."),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)(d,{propertyName:"updateStructure",displayResults:!1,argument:{structure:"row",isInsert:!0,index:-1,data:["New Planet","12345","500","10","357"]},mdxType:"TableContainerMethods"},(0,r.kt)(p.Z,{data:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.updateStructure({\n  structure: 'row',\n  isInsert: true,\n  index: -1,\n  data: ['New Planet', '12345', '500', '10', '357'],\n});\n")))),(0,r.kt)(m.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"updateData"},(0,r.kt)("inlineCode",{parentName:"h3"},"updateData")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"(data: (number | string)[][]) => void"))),(0,r.kt)("p",null,"Programmatically reset table data using the new data iside the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," argument. ",(0,r.kt)("br",null)),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)(d,{propertyName:"updateData",displayResults:!1,argument:[["Planet","Diameter","Mass","Moons","Density"],["Mercury",4879,.33,0,5429],["Venus",12104,4.87,0,5243],["Uranus",51118,86.8,27,1270],["Pluto",2376,.013,5,1850],["Moon",3475,.073,0,3340]],mdxType:"TableContainerMethods"},(0,r.kt)(p.Z,{data:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.updateData([\n  ['Planet', 'Diameter', 'Mass', 'Moons', 'Density'],\n  ['Mercury', 4879, 0.33, 0, 5429],\n  ['Venus', 12104, 4.87, 0, 5243],\n  ['Uranus', 51118, 86.8, 27, 1270],\n  ['Pluto', 2376, 0.013, 5, 1850],\n  ['Moon', 3475, 0.073, 0, 3340],\n]);\n")))),(0,r.kt)(m.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"importFile"},(0,r.kt)("inlineCode",{parentName:"h3"},"importFile")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"/docs/files#ImportOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"(options?: ImportOptions) => void"))),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("em",{parentName:"li"},"({formats: ",'["csv"]',"}) => void"))),(0,r.kt)("p",null,"Opens up a file browser window to select a file and import its data. You can optionally pass an ",(0,r.kt)("a",{parentName:"p",href:"/docs/files#ImportOptions"},(0,r.kt)("inlineCode",{parentName:"a"},"options")),"\nobject to define the allowed file formats and what they will overwrite. For browser security reasons - this method can ONLY be activated\nthrough user actions, such as a click of a button."),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)(d,{propertyName:"importFile",displayResults:!1,mdxType:"TableContainerMethods"},(0,r.kt)(p.Z,{data:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.importFile();\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"csv")," files are supported natively, however if you want to import any of the other file formats - you will need to add the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/xlsx"},(0,r.kt)("inlineCode",{parentName:"a"},"xlsx"))," module\ninto your project. Please see examples ",(0,r.kt)("a",{parentName:"p",href:"../../examples/files"},"here"),".")),(0,r.kt)(m.Z,{mdxType:"LineBreak"}),(0,r.kt)("h3",{id:"exportFile"},(0,r.kt)("inlineCode",{parentName:"h3"},"exportFile")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("a",{parentName:"li",href:"#ExportSingleFile"},(0,r.kt)("inlineCode",{parentName:"a"},"(options?: ExportSingleFile) => void"))),(0,r.kt)("li",{parentName:"ul"},"Default: ",(0,r.kt)("em",{parentName:"li"},'({fileName: "table_data", format: "csv"}) => void'))),(0,r.kt)("h4",{id:"ExportSingleFile"},(0,r.kt)("inlineCode",{parentName:"h4"},"ExportSingleFile")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: {",(0,r.kt)("inlineCode",{parentName:"li"},"fileName?: string"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/files#FileFormat"},(0,r.kt)("inlineCode",{parentName:"a"},"format?: FileFormat")),"}")),(0,r.kt)("p",null,"Exports existing table data into a file. You can optionally pass a ",(0,r.kt)("a",{parentName:"p",href:"#ExportSingleFile"},(0,r.kt)("inlineCode",{parentName:"a"},"ExportSingleFile"))," object\nto define the exported file's name and its format."),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)(d,{propertyName:"exportFile",displayResults:!1,mdxType:"TableContainerMethods"},(0,r.kt)(p.Z,{data:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,r.kt)(k.Z,{mdxType:"Tabs"},(0,r.kt)(h.Z,{value:"js",label:"Code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"tableElementRef.exportFile();\n")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"csv")," files are supported natively, however if you want to export any of the other file formats - you will need to add the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/xlsx"},(0,r.kt)("inlineCode",{parentName:"a"},"xlsx"))," module\ninto your project. Please see examples ",(0,r.kt)("a",{parentName:"p",href:"../../examples/files"},"here"),".")))}g.isMDXComponent=!0}}]);