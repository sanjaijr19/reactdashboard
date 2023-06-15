"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[2250],{80640:function(e,r,a){a(72791);var n=a(89743),s=a(2677),i=a(2461),c=a(80184);r.Z=function(e){return(0,c.jsx)(n.Z,{children:(0,c.jsx)(s.Z,{children:(0,c.jsxs)("div",{className:"page-title-box",children:[(0,c.jsx)("div",{className:"page-title-right",children:(0,c.jsxs)(i.Z,{listProps:{className:"m-0"},children:[(0,c.jsx)(i.Z.Item,{href:"/",children:"Stickynote"}),e.breadCrumbItems.map((function(e,r){return e.active?(0,c.jsx)(i.Z.Item,{active:!0,children:e.label},r):(0,c.jsx)(i.Z.Item,{href:e.path,children:e.label},r)}))]})}),(0,c.jsx)("h4",{className:"page-title",children:e.title})]})})})}},90248:function(e,r,a){a(72791);var n=a(89743),s=a(2677),i=a(9140),c=a(81694),t=a.n(c),d=a(80184);r.Z=function(e){var r=e.plans,a=e.containerClass;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.Z,{className:a,children:r.map((function(e,r){return(0,d.jsx)(s.Z,{md:4,children:(0,d.jsx)(i.Z,{className:t()("card-pricing",{"card-pricing-recommended":e.isRecommended}),children:(0,d.jsxs)(i.Z.Body,{className:"text-center",children:[e.isRecommended&&(0,d.jsx)("div",{className:"card-pricing-plan-tag",children:"Recommended"}),(0,d.jsx)("p",{className:"card-pricing-plan-name fw-bold text-uppercase",children:e.name}),(0,d.jsx)("i",{className:t()("card-pricing-icon",e.icon,"text-primary")}),(0,d.jsxs)("h2",{className:"card-pricing-price",children:[e.price," ",(0,d.jsxs)("span",{children:["/ ",e.duration]})]}),(0,d.jsx)("ul",{className:"card-pricing-features",children:e.features.map((function(e,r){return(0,d.jsx)("li",{children:e},r)}))}),(0,d.jsx)("button",{className:"btn btn-primary mt-4 mb-2 btn-rounded",children:"Choose Plan"})]})})},r)}))})})}},62250:function(e,r,a){a.r(r);a(72791);var n=a(89743),s=a(2677),i=a(80640),c=a(90248),t=a(80184);r.default=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{breadCrumbItems:[{label:"Pages",path:"/pages/pricing"},{label:"Pricing",path:"/pages/pricing",active:!0}],title:"Pricing"}),(0,t.jsx)(n.Z,{className:"justify-content-center",children:(0,t.jsxs)(s.Z,{xl:10,children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h3",{className:"mb-2",children:"Our Plans and Pricing"}),(0,t.jsx)("p",{className:"text-muted w-50 m-auto",children:"We have plans and prices that fit your business perfectly. Make your client site a success with our products."})]}),(0,t.jsx)(c.Z,{plans:[{id:1,name:"Professional Pack",icon:"dripicons-user",price:"$19",duration:"Month",features:["10 GB Storage","500 GB Bandwidth","No Domain","1 User","Email Support","24x7 Support"],isRecommended:!1},{id:2,name:"Business Pack",icon:"dripicons-briefcase",price:"$29",duration:"Month",features:["50 GB Storage","900 GB Bandwidth","2 Domain","10 User","Email Support","24x7 Support"],isRecommended:!0},{id:3,name:"Enterprise Pack",icon:"dripicons-store",price:"$39",duration:"Month",features:["100 GB Storage","Unlimited Bandwidth","10 Domain","Unlimited Users","Email Support","24x7 Support"],isRecommended:!1}],containerClass:"mt-sm-5 mt-3 mb-3"})]})})]})}},9140:function(e,r,a){a.d(r,{Z:function(){return R}});var n=a(1413),s=a(45987),i=a(81694),c=a.n(i),t=a(72791),d=a(10162),l=a(66543),o=a(27472),m=a(80184),u=["bsPrefix","className","variant","as"],p=t.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,t=e.variant,l=e.as,o=void 0===l?"img":l,p=(0,s.Z)(e,u),x=(0,d.vE)(a,"card-img");return(0,m.jsx)(o,(0,n.Z)({ref:r,className:c()(t?"".concat(x,"-").concat(t):x,i)},p))}));p.displayName="CardImg";var x=p,h=a(96040),f=["bsPrefix","className","as"],b=t.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,l=e.as,o=void 0===l?"div":l,u=(0,s.Z)(e,f),p=(0,d.vE)(a,"card-header"),x=(0,t.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,m.jsx)(h.Z.Provider,{value:x,children:(0,m.jsx)(o,(0,n.Z)((0,n.Z)({ref:r},u),{},{className:c()(i,p)}))})}));b.displayName="CardHeader";var Z=b,j=["bsPrefix","className","bg","text","border","body","children","as"],v=(0,o.Z)("h5"),g=(0,o.Z)("h6"),N=(0,l.Z)("card-body"),y=(0,l.Z)("card-title",{Component:v}),P=(0,l.Z)("card-subtitle",{Component:g}),C=(0,l.Z)("card-link",{Component:"a"}),w=(0,l.Z)("card-text",{Component:"p"}),B=(0,l.Z)("card-footer"),k=(0,l.Z)("card-img-overlay"),S=t.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,t=e.bg,l=e.text,o=e.border,u=e.body,p=void 0!==u&&u,x=e.children,h=e.as,f=void 0===h?"div":h,b=(0,s.Z)(e,j),Z=(0,d.vE)(a,"card");return(0,m.jsx)(f,(0,n.Z)((0,n.Z)({ref:r},b),{},{className:c()(i,Z,t&&"bg-".concat(t),l&&"text-".concat(l),o&&"border-".concat(o)),children:p?(0,m.jsx)(N,{children:x}):x}))}));S.displayName="Card";var R=Object.assign(S,{Img:x,Title:y,Subtitle:P,Body:N,Link:C,Text:w,Header:Z,Footer:B,ImgOverlay:k})},96040:function(e,r,a){var n=a(72791).createContext(null);n.displayName="CardHeaderContext",r.Z=n},27472:function(e,r,a){var n=a(1413),s=a(72791),i=a(81694),c=a.n(i),t=a(80184);r.Z=function(e){return s.forwardRef((function(r,a){return(0,t.jsx)("div",(0,n.Z)((0,n.Z)({},r),{},{ref:a,className:c()(r.className,e)}))}))}}}]);
//# sourceMappingURL=2250.aff89b9a.chunk.js.map