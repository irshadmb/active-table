"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[416],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),i=a(6550),s=a(1980),d=a(7392),p=a(12);function u(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,d]=b({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,p.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=s??u;return c({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!c({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,r]),tabValues:r}}var h=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=d[a].value;n!==i&&(u(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},d.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},o,{className:(0,r.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y.tabList)},l.createElement(w,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return l.createElement(x,(0,n.Z)({key:String(t)},e))}},9814:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294);function l(){return n.createElement("div",{style:{height:"1px"}})}},1853:(e,t,a)=>{function n(e){window.scrollY>0?e.style.boxShadow="0 1px 2px 0 rgb(0 0 0 / 10%)":e.style.boxShadow="unset"}function l(){setTimeout((()=>{window.removeEventListener("scroll",window.toggleNavOnScroll);const e=document.getElementsByClassName("navbar--fixed-top");if(e[0]){const t=e[0];n(t),window.toggleNavOnScroll=n.bind(this,t),window.addEventListener("scroll",window.toggleNavOnScroll)}}),2)}function r(){setTimeout((()=>{const e=document.querySelectorAll(".plugin-pages > body > #__docusaurus > nav")?.[0];try{e.classList.add("fade-in")}catch(t){console.error(t),console.log("element was not rendered in time - use MutationObserver")}}),2)}a.r(t),a.d(t,{fadeIn:()=>r,readdAutoNavShadowToggle:()=>l})},9272:(e,t,a)=>{a.d(t,{Z:()=>r,v:()=>l});var n=a(7294);function l(e){return e?.children[0]?.children[0]}function r(e){let{children:t,minHeight:a}=e;return n.createElement("div",{className:"documentation-example-container",style:{minHeight:`${a||343}px`}},n.createElement("div",null,t))}},8030:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>w,frontMatter:()=>u,metadata:()=>c,toc:()=>k});var n=a(7462),l=(a(7294),a(3905)),r=a(4336),o=a(9272),i=a(9814),s=a(1262),d=a(5162),p=a(4866);const u={sidebar_position:5},m="Row",c={unversionedId:"docs/row",id:"docs/row",title:"Row",description:"Properties related to table rows.",source:"@site/docs/docs/row.mdx",sourceDirName:"docs",slug:"/docs/row",permalink:"/docs/row",draft:!1,editUrl:"https://github.com/OvidijusParsiunas/active-table/tree/main/website/docs/docs/row.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Header",permalink:"/docs/header"},next:{title:"Column",permalink:"/docs/column"}},b={},k=[{value:"<code>rowHoverStyles</code>",id:"rowHoverStyles",level:3},{value:"Example",id:"example",level:4},{value:"<code>stripedRows</code>",id:"stripedRows",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>rowDropdown</code>",id:"rowDropdown",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>maxRows</code>",id:"maxRows",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>displayAddNewRow</code>",id:"displayAddNewRow",level:3},{value:"Example",id:"example-4",level:4}],h={toc:k},y="wrapper";function w(e){let{components:t,...u}=e;return(0,l.kt)(y,(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"row"},"Row"),(0,l.kt)("p",null,"Properties related to table rows."),(0,l.kt)("h3",{id:"rowHoverStyles"},(0,l.kt)("inlineCode",{parentName:"h3"},"rowHoverStyles")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("a",{parentName:"li",href:"/docs/sharedTypes#CSSStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"style: CSSStyle")),", ",(0,l.kt)("inlineCode",{parentName:"li"},"header?: boolean"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"addNewRowButton?: boolean"),"}"),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("em",{parentName:"li"},"unset"),", but if ",(0,l.kt)("em",{parentName:"li"},"style")," is set then ",(0,l.kt)("em",{parentName:"li"},"header")," and ",(0,l.kt)("em",{parentName:"li"},"addNewRowButton")," are ",(0,l.kt)("em",{parentName:"li"},"true"))),(0,l.kt)("p",null,"Custom styling for row mouse hover. ",(0,l.kt)("inlineCode",{parentName:"p"},"header")," property denotes if ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," can be applied to the header row\nand ",(0,l.kt)("inlineCode",{parentName:"p"},"addNewRowButton")," denotes if ",(0,l.kt)("inlineCode",{parentName:"p"},"style")," can be applied to the add new row button if it is displayed."),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)(s.Z,{mdxType:"BrowserOnly"},(()=>a(1853).readdAutoNavShadowToggle())),(0,l.kt)(o.Z,{mdxType:"TableContainer"},(0,l.kt)(r.Z,{rowHoverStyles:{style:{backgroundColor:"#d6d6d630",transitionDuration:"0.05s"}},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<active-table rowHoverStyles=\'{"style":{"backgroundColor": "#d6d6d630", "transitionDuration": "0.05s"}}\'></active-table>\n'))),(0,l.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  rowHoverStyles=\'{"style":{"backgroundColor": "#d6d6d630", "transitionDuration": "0.05s"}}\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Custom default cell styles will override this property's styling. Additionally, using this property unsets the header (if set to ",(0,l.kt)("em",{parentName:"p"},"true"),")\nand ",(0,l.kt)("a",{parentName:"p",href:"/docs/table#frameComponentsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"frameComponentsStyles"))," hover color properties.")),(0,l.kt)(i.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"stripedRows"},(0,l.kt)("inlineCode",{parentName:"h3"},"stripedRows")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")," | { ",(0,l.kt)("a",{parentName:"li",href:"/docs/sharedTypes#CSSStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"odd?: CSSStyle")),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/sharedTypes#CSSStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"even?: CSSStyle"))," }"),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("em",{parentName:"li"},"false"),", but if set to ",(0,l.kt)("em",{parentName:"li"},"true")," then ",(0,l.kt)("em",{parentName:"li"},"even")," is ",(0,l.kt)("em",{parentName:"li"},"{backgroundColor: ''}")," and ",(0,l.kt)("em",{parentName:"li"},"odd")," is ",(0,l.kt)("em",{parentName:"li"},"{backgroundColor: '#dcdcdc7a'}}"))),(0,l.kt)("p",null,"Stripe based styling for rows."),(0,l.kt)("h4",{id:"example-1"},"Example"),(0,l.kt)(o.Z,{mdxType:"TableContainer"},(0,l.kt)(r.Z,{stripedRows:{odd:{backgroundColor:""},even:{backgroundColor:"#ebebeb7a"}},cellStyle:{borderBottom:"unset"},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<active-table stripedRows=\'{"odd": {"backgroundColor": ""}, "even": {"backgroundColor": "#ebebeb7a"}}\'></active-table>\n'))),(0,l.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  stripedRows=\'{"odd": {"backgroundColor": ""}, "even": {"backgroundColor": "#ebebeb7a"}}\'\n  cellStyle=\'{"borderBottom": "unset"}\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"boxShadow": "rgb(172 172 172 / 17%) 0px 0.5px 1px 0px", "borderRadius":"2px"}\'\n></active-table>\n')))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Using this property unsets the default header and ",(0,l.kt)("a",{parentName:"p",href:"/docs/table#frameComponentsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"frameComponentsStyles"))," hover color properties.\nIf the component is set with a ",(0,l.kt)("a",{parentName:"p",href:"/docs/content#cellStyle"},(0,l.kt)("inlineCode",{parentName:"a"},"cellStyle"))," property - this will be overriden.")),(0,l.kt)(i.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"rowDropdown"},(0,l.kt)("inlineCode",{parentName:"h3"},"rowDropdown")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("a",{parentName:"li",href:"/docs/sharedTypes#DropdownDisplaySettings"},(0,l.kt)("inlineCode",{parentName:"a"},"displaySettings: DropdownDisplaySettings")),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"isInsertUpAvailable?: boolean"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"isInsertDownAvailable?: boolean"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"isMoveAvailable?: boolean"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"isDeleteAvailable?: boolean"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("inlineCode",{parentName:"li"},"canEditHeaderRow?: boolean"),", ",(0,l.kt)("br",null),"\n}"),(0,l.kt)("li",{parentName:"ul"},"Default: {",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("em",{parentName:"li"},"displaySettings: {isAvailable: true, openMethod: {cellClick: true}}"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("em",{parentName:"li"},"isInsertUpAvailable: true"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("em",{parentName:"li"},"isInsertDownAvailable: true"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("em",{parentName:"li"},"isMoveAvailable: true"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("em",{parentName:"li"},"isDeleteAvailable: true"),", ",(0,l.kt)("br",null),"\xa0","\xa0","\xa0","\xa0"," ",(0,l.kt)("em",{parentName:"li"},"isHeaderRowEditable: true"),", ",(0,l.kt)("br",null),"\n}")),(0,l.kt)("p",null,"Row dropdown settings. If ",(0,l.kt)("a",{parentName:"p",href:"/docs/sharedTypes#DropdownDisplaySettings"},(0,l.kt)("inlineCode",{parentName:"a"},"displaySettings"))," object's ",(0,l.kt)("inlineCode",{parentName:"p"},"openMethod")," property has ",(0,l.kt)("inlineCode",{parentName:"p"},"cellClick")," set to ",(0,l.kt)("em",{parentName:"p"},"true")," - simply click on the left-most\nrow cell to open the dropdown. If ",(0,l.kt)("inlineCode",{parentName:"p"},"openMethod")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"overlayClick")," - hover over the left-most cell and click on the overlay. ",(0,l.kt)("br",null),"\nThe ",(0,l.kt)("inlineCode",{parentName:"p"},"canEditHeaderRow")," property denotes whether this dropdown can be used to change the header row e.g. move or delete it, therefore\nit does not open on header row when set to ",(0,l.kt)("em",{parentName:"p"},"false"),"."),(0,l.kt)("h4",{id:"example-2"},"Example"),(0,l.kt)(o.Z,{mdxType:"TableContainer"},(0,l.kt)(r.Z,{rowDropdown:{displaySettings:{isAvailable:!0,openMethod:{overlayClick:!0}},canEditHeaderRow:!1},columnDropdown:{displaySettings:{isAvailable:!0,openMethod:{overlayClick:!0}}},content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<active-table\n  rowDropdown=\'{"displaySettings":{"isAvailable": true, "openMethod": {"overlayClick": true}}, "canEditHeaderRow": false}\'\n></active-table>\n'))),(0,l.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  rowDropdown=\'{"displaySettings":{"isAvailable": true, "openMethod": {"overlayClick": true}}, "canEditHeaderRow": false}\'\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"boxShadow": "rgb(172 172 172 / 17%) 0px 0.5px 1px 0px", "borderRadius":"2px"}\'\n></active-table>\n')))),(0,l.kt)(i.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"maxRows"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxRows")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("em",{parentName:"li"},"unset"))),(0,l.kt)("p",null,"Maximum number of rows allowed (including header row)."),(0,l.kt)("h4",{id:"example-3"},"Example"),(0,l.kt)(o.Z,{minHeight:"215",mdxType:"TableContainer"},(0,l.kt)(r.Z,{maxRows:4,content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<active-table maxRows="4"></active-table>\n'))),(0,l.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  maxRows="4"\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))),(0,l.kt)(i.Z,{mdxType:"LineBreak"}),(0,l.kt)("h3",{id:"displayAddNewRow"},(0,l.kt)("inlineCode",{parentName:"h3"},"displayAddNewRow")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean")),(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("em",{parentName:"li"},"true"))),(0,l.kt)("p",null,"A toggle for a clickable '+ New' row at the bottom of the table which is used to add new empty rows. ",(0,l.kt)("br",null),"\nYou can set the add new row style via ",(0,l.kt)("a",{parentName:"p",href:"/docs/table#frameComponentsStyles"},(0,l.kt)("inlineCode",{parentName:"a"},"frameComponentsStyles")),"."),(0,l.kt)("h4",{id:"example-4"},"Example"),(0,l.kt)(o.Z,{mdxType:"TableContainer"},(0,l.kt)(r.Z,{displayAddNewRow:!0,content:[["Planet","Diameter","Mass","Moons","Density"],["Earth",12756,5.97,1,5514],["Mars",6792,.642,2,3934],["Jupiter",142984,1898,79,1326],["Saturn",120536,568,82,687],["Neptune",49528,102,14,1638]],tableStyle:{width:"100%",boxShadow:"rgb(172 172 172 / 17%) 0px 0.5px 1px 0px",borderRadius:"2px"},mdxType:"ActiveTable"})),(0,l.kt)(p.Z,{mdxType:"Tabs"},(0,l.kt)(d.Z,{value:"js",label:"Sample code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<active-table displayAddNewRow="true"></active-table>\n'))),(0,l.kt)(d.Z,{value:"py",label:"Full code",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- This example is for Vanilla JS and should be tailored to your framework (see Examples) --\x3e\n\n<active-table\n  displayAddNewRow="true"\n  content=\'[\n    ["Planet", "Diameter", "Mass", "Moons", "Density"],\n    ["Earth", 12756, 5.97, 1, 5514],\n    ["Mars", 6792, 0.642, 2, 3934],\n    ["Jupiter", 142984, 1898, 79, 1326],\n    ["Saturn", 120536, 568, 82, 687],\n    ["Neptune", 49528, 102, 14, 1638]]\'\n  tableStyle=\'{"borderRadius":"2px"}\'\n></active-table>\n')))))}w.isMDXComponent=!0}}]);