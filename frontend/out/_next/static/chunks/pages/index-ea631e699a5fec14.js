(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1228:function(e,n,t){"use strict";t.d(n,{p:function(){return k}});var l,a,s,r=t(9642),o=t(7294),i=t(133),c=t(8529),u=t(7471),d=t(2659),m=t(9016),p=t(2506),f=t(3980),x=t(6637);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(a||(a={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(s||(s={}));var v=((l={})[s.ToggleDisclosure]=function(e){var n;return(0,r.gY)({},e,{disclosureState:(0,i.E)(e.disclosureState,(n={},n[a.Open]=a.Closed,n[a.Closed]=a.Open,n))})},l[s.CloseDisclosure]=function(e){return e.disclosureState===a.Closed?e:(0,r.gY)({},e,{disclosureState:a.Closed})},l[s.LinkPanel]=function(e){return!0===e.linkedPanel?e:(0,r.gY)({},e,{linkedPanel:!0})},l[s.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:(0,r.gY)({},e,{linkedPanel:!1})},l[s.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,r.gY)({},e,{buttonId:n.buttonId})},l[s.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,r.gY)({},e,{panelId:n.panelId})},l),g=(0,o.createContext)(null);function h(e){var n=(0,o.useContext)(g);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+k.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,h),t}return n}g.displayName="DisclosureContext";var b=(0,o.createContext)(null);function y(e){var n=(0,o.useContext)(b);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+k.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,y),t}return n}b.displayName="DisclosureAPIContext";var j=(0,o.createContext)(null);function N(e,n){return(0,i.E)(n.type,v,e,n)}j.displayName="DisclosurePanelContext";var w=o.Fragment;function k(e){var n,t=e.defaultOpen,l=void 0!==t&&t,u=(0,r.gK)(e,["defaultOpen"]),d="headlessui-disclosure-button-"+(0,p.M)(),m="headlessui-disclosure-panel-"+(0,p.M)(),x=(0,o.useReducer)(N,{disclosureState:l?a.Open:a.Closed,linkedPanel:!1,buttonId:d,panelId:m}),v=x[0].disclosureState,h=x[1];(0,o.useEffect)((function(){return h({type:s.SetButtonId,buttonId:d})}),[d,h]),(0,o.useEffect)((function(){return h({type:s.SetPanelId,panelId:m})}),[m,h]);var y=(0,o.useCallback)((function(e){h({type:s.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(d):document.getElementById(d);null==n||n.focus()}),[h,d]),j=(0,o.useMemo)((function(){return{close:y}}),[y]),k=(0,o.useMemo)((function(){return{open:v===a.Open,close:y}}),[v,y]);return o.createElement(g.Provider,{value:x},o.createElement(b.Provider,{value:j},o.createElement(f.up,{value:(0,i.E)(v,(n={},n[a.Open]=f.ZM.Open,n[a.Closed]=f.ZM.Closed,n))},(0,c.sY)({props:u,slot:k,defaultTag:w,name:"Disclosure"}))))}var C=(0,c.yV)((function e(n,t){var l=h([k.name,e.name].join(".")),i=l[0],p=l[1],f=(0,o.useRef)(null),v=(0,u.T)(f,t),g=(0,o.useContext)(j),b=null!==g&&g===i.panelId,y=(0,o.useCallback)((function(e){var n;if(b){if(i.disclosureState===a.Closed)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:s.ToggleDisclosure}),null==(n=document.getElementById(i.buttonId))||n.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),p({type:s.ToggleDisclosure})}}),[p,b,i.disclosureState]),N=(0,o.useCallback)((function(e){switch(e.key){case d.R.Space:e.preventDefault()}}),[]),w=(0,o.useCallback)((function(e){var t;(0,m.P)(e.currentTarget)||(n.disabled||(b?(p({type:s.ToggleDisclosure}),null==(t=document.getElementById(i.buttonId))||t.focus()):p({type:s.ToggleDisclosure})))}),[p,n.disabled,i.buttonId,b]),C=(0,o.useMemo)((function(){return{open:i.disclosureState===a.Open}}),[i]),S=(0,x.f)(n,f),P=n,I=b?{ref:v,type:S,onKeyDown:y,onClick:w}:{ref:v,id:i.buttonId,type:S,"aria-expanded":n.disabled?void 0:i.disclosureState===a.Open,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:y,onKeyUp:N,onClick:w};return(0,c.sY)({props:(0,r.gY)({},P,I),slot:C,defaultTag:"button",name:"Disclosure.Button"})})),S=c.AN.RenderStrategy|c.AN.Static,P=(0,c.yV)((function e(n,t){var l=h([k.name,e.name].join(".")),i=l[0],d=l[1],m=y([k.name,e.name].join(".")).close,p=(0,u.T)(t,(function(){i.linkedPanel||d({type:s.LinkPanel})})),x=(0,f.oJ)(),v=null!==x?x===f.ZM.Open:i.disclosureState===a.Open;(0,o.useEffect)((function(){return function(){return d({type:s.UnlinkPanel})}}),[d]),(0,o.useEffect)((function(){var e;i.disclosureState!==a.Closed||null!=(e=n.unmount)&&!e||d({type:s.UnlinkPanel})}),[i.disclosureState,n.unmount,d]);var g=(0,o.useMemo)((function(){return{open:i.disclosureState===a.Open,close:m}}),[i,m]),b={ref:p,id:i.panelId},N=n;return o.createElement(j.Provider,{value:i.panelId},(0,c.sY)({props:(0,r.gY)({},N,b),slot:g,defaultTag:"div",features:S,visible:v,name:"Disclosure.Panel"}))}));k.Button=C,k.Panel=P},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6555)}])},6555:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var l=t(5893),a=(t(7302),t(1561),t(7294)),s=t(9196),r=t(5220),o=t(1228),i=t(3801),c=t(3153),u=t(98),d=[{id:"color",name:"Color",options:[{value:"white",label:"White"},{value:"beige",label:"Beige"},{value:"blue",label:"Blue"},{value:"brown",label:"Brown"},{value:"green",label:"Green"},{value:"purple",label:"Purple"}]},{id:"category",name:"Category",options:[{value:"new-arrivals",label:"All New Arrivals"},{value:"tees",label:"Tees"},{value:"crewnecks",label:"Crewnecks"},{value:"sweatshirts",label:"Sweatshirts"},{value:"pants-shorts",label:"Pants & Shorts"}]},{id:"sizes",name:"Sizes",options:[{value:"xs",label:"XS"},{value:"s",label:"S"},{value:"m",label:"M"},{value:"l",label:"L"},{value:"xl",label:"XL"},{value:"2xl",label:"2XL"}]}];function m(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}var p=function(){var e=(0,a.useState)(!1),n=e[0],t=e[1];return(0,l.jsx)("div",{className:"bg-white",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(s.u.Root,{show:n,as:a.Fragment,children:(0,l.jsxs)(r.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:t,children:[(0,l.jsx)(s.u.Child,{as:a.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,l.jsx)(r.V.Overlay,{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,l.jsx)(s.u.Child,{as:a.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,l.jsxs)("div",{className:"ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto",children:[(0,l.jsxs)("div",{className:"px-4 flex items-center justify-between",children:[(0,l.jsx)("h2",{className:"text-lg font-medium text-gray-900",children:"Filters"}),(0,l.jsxs)("button",{type:"button",className:"-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500",onClick:function(){return t(!1)},children:[(0,l.jsx)("span",{className:"sr-only",children:"Close menu"}),(0,l.jsx)(i.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})]}),(0,l.jsx)("form",{className:"mt-4",children:d.map((function(e){return(0,l.jsx)(o.p,{as:"div",className:"border-t border-gray-200 pt-4 pb-4",children:function(n){var t=n.open;return(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{className:"w-full px-2",children:(0,l.jsxs)(o.p.Button,{className:"w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500",children:[(0,l.jsx)("span",{className:"text-sm font-medium text-gray-900",children:e.name}),(0,l.jsx)("span",{className:"ml-6 h-7 flex items-center",children:(0,l.jsx)(c.v4q,{className:m(t?"-rotate-180":"rotate-0","h-5 w-5 transform"),"aria-hidden":"true"})})]})}),(0,l.jsx)(o.p.Panel,{className:"pt-4 pb-2 px-4",children:(0,l.jsx)("div",{className:"space-y-6",children:e.options.map((function(n,t){return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",{id:"".concat(e.id,"-").concat(t,"-mobile"),name:"".concat(e.id,"[]"),defaultValue:n.value,type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),(0,l.jsx)("label",{htmlFor:"".concat(e.id,"-").concat(t,"-mobile"),className:"ml-3 text-sm text-gray-500",children:n.label})]},n.value)}))})})]})}},e.name)}))})]})})]})}),(0,l.jsxs)("main",{className:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",children:[(0,l.jsxs)("div",{className:"border-b border-gray-200 pb-10",children:[(0,l.jsx)("h1",{className:"text-4xl font-extrabold tracking-tight text-gray-900",children:"New Arrivals"}),(0,l.jsx)("p",{className:"mt-4 text-base text-gray-500",children:"Checkout out the latest release of Basic Tees, new and improved with four openings!"})]}),(0,l.jsxs)("div",{className:"pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4",children:[(0,l.jsxs)("aside",{children:[(0,l.jsx)("h2",{className:"sr-only",children:"Filters"}),(0,l.jsxs)("button",{type:"button",className:"inline-flex items-center lg:hidden",onClick:function(){return t(!0)},children:[(0,l.jsx)("span",{className:"text-sm font-medium text-gray-700",children:"Filters"}),(0,l.jsx)(c.d2U,{className:"flex-shrink-0 ml-1 h-5 w-5 text-gray-400","aria-hidden":"true"})]}),(0,l.jsx)("div",{className:"hidden lg:block",children:(0,l.jsx)("form",{className:"divide-y divide-gray-200 space-y-10",children:d.map((function(e,n){return(0,l.jsx)("div",{className:0===n?null:"pt-10",children:(0,l.jsxs)("fieldset",{children:[(0,l.jsx)("legend",{className:"block text-sm font-medium text-gray-900",children:e.name}),(0,l.jsx)("div",{className:"pt-6 space-y-3",children:e.options.map((function(n,t){return(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("input",{id:"".concat(e.id,"-").concat(t),name:"".concat(e.id,"[]"),defaultValue:n.value,type:"checkbox",className:"h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"}),(0,l.jsx)("label",{htmlFor:"".concat(e.id,"-").concat(t),className:"ml-3 text-sm text-gray-600",children:n.label})]},n.value)}))})]})},e.name)}))})})]}),(0,l.jsx)("div",{className:"mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3",children:(0,l.jsx)(u.Z,{})})]})]})]})})},f=function(){return(0,l.jsx)("div",{children:(0,l.jsx)(p,{})})}}},function(e){e.O(0,[453,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);