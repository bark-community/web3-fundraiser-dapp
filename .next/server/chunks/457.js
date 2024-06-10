"use strict";exports.id=457,exports.ids=[457],exports.modules={1076:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(997);r(6689);var n=r(580),i=r.n(n),o=r(19),s=r.n(o);let l=({children:e,...t})=>a.jsx(s(),{maxWidth:{sm:720,md:1236},width:1,margin:"0 auto",paddingX:2,paddingY:{xs:4,sm:6,md:8},...t,children:e});l.propTypes={children:i().node};let p=l},369:(e,t,r)=>{r.d(t,{Z:()=>U});var a=r(997),n=r(6689),i=r(580),o=r.n(i),s=r(8442),l=r(9868),p=r.n(l),d=r(19),h=r.n(d),c=r(3646),x=r.n(c),m=r(3882),g=r.n(m),u=r(4156),f=r.n(u),y=r(1076),j=r(6337),w=r.n(j),b=r(3890),v=r.n(b),k=r(3365),T=r.n(k),C=r(3819),$=r.n(C),I=r(7163),M=r.n(I);let R=({items:e,colorInvert:t=!1})=>{let r=(0,s.useTheme)(),[i,o]=(0,n.useState)("");return(0,n.useEffect)(()=>{o(window&&window.location?window.location.pathname:"")},[]),a.jsx(h(),{children:e.map((e,t)=>(0,a.jsxs)($(),{component:"a",href:e.href,sx:{marginLeft:4,justifyContent:"flex-start",color:i===e.href?r.palette.primary.main:r.palette.text.primary,backgroundColor:i===e.href?(0,s.alpha)(r.palette.primary.main,.1):"transparent",fontWeight:i===e.href?700:500},children:[e.title,e.isNew&&a.jsx(h(),{padding:.5,display:"inline-flex",borderRadius:1,bgcolor:"primary.main",marginLeft:2,children:a.jsx(M(),{variant:"caption",sx:{color:"common.white",lineHeight:1},children:"new"})})]},t))})};R.propTypes={items:o().array.isRequired,colorInvert:o().bool};let E=()=>{let e=(0,s.useTheme)(),{themeToggler:t}=e,{mode:r}=e.palette;return a.jsx($(),{variant:"outlined",onClick:()=>t(),"aria-label":"Dark mode toggler",color:"light"===r?"primary":"secondary",sx:{borderRadius:2,minWidth:"auto",padding:.5,borderColor:(0,s.alpha)(e.palette.divider,.2)},children:"light"===r?a.jsx("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):a.jsx("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})};!function(){var e=Error("Cannot find module 'web3/Login'");throw e.code="MODULE_NOT_FOUND",e}();let O=({onSidebarOpen:e,pages:t,colorInvert:r=!1})=>{let n=(0,s.useTheme)(),{mode:i}=n.palette;return(0,a.jsxs)(w(),{display:"flex",justifyContent:"space-between",alignItems:"center",width:1,children:[a.jsx(w(),{display:"flex",component:"a",href:"/",title:"crypto charity",width:{xs:360,md:360},children:a.jsx(w(),{component:"img",src:"light"!==i||r?"https:///https://github.com/bark-community/web-fundraising-platform/logo-dark.svg?raw=true":"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-light.svg?raw=true",height:.4,width:.4})}),(0,a.jsxs)(w(),{sx:{display:{xs:"none",md:"flex"}},alignItems:"center",children:[a.jsx(w(),{children:a.jsx(R,{items:t,colorInvert:r})}),a.jsx(w(),{marginLeft:4,children:a.jsx(Object(function(){var e=Error("Cannot find module 'web3/Login'");throw e.code="MODULE_NOT_FOUND",e}()),{})}),a.jsx(w(),{marginLeft:4,children:a.jsx(E,{})})]}),(0,a.jsxs)(w(),{sx:{display:{xs:"flex",md:"none"}},alignItems:"center",children:[a.jsx(w(),{children:a.jsx(Object(function(){var e=Error("Cannot find module 'web3/Login'");throw e.code="MODULE_NOT_FOUND",e}()),{})}),a.jsx(w(),{marginLeft:1,children:a.jsx(v(),{onClick:()=>e(),"aria-label":"Menu",variant:"outlined",sx:{borderRadius:2,minWidth:"auto",padding:1,borderColor:(0,s.alpha)(n.palette.divider,.2)},children:a.jsx(T(),{})})})]})]})};O.propTypes={onSidebarOpen:o().func,pages:o().array,colorInvert:o().bool};var L=r(7898),F=r.n(L),S=r(5612),B=r.n(S);let D=({items:e})=>{let t=(0,s.useTheme)(),[r,i]=(0,n.useState)("");return(0,n.useEffect)(()=>{i(window&&window.location?window.location.pathname:"")},[]),a.jsx(h(),{children:a.jsx(B(),{container:!0,spacing:1,children:e.map((e,n)=>a.jsx(B(),{item:!0,xs:12,children:(0,a.jsxs)($(),{size:"large",component:"a",href:e.href,fullWidth:!0,sx:{justifyContent:"flex-start",color:r===e.href?t.palette.primary.main:t.palette.text.primary,backgroundColor:r===e.href?(0,s.alpha)(t.palette.primary.main,.1):"transparent",fontWeight:r===e.href?600:400},children:[e.title,e.isNew&&a.jsx(h(),{padding:.5,display:"inline-flex",borderRadius:1,bgcolor:"primary.main",marginLeft:2,children:a.jsx(M(),{variant:"caption",sx:{color:"common.white",lineHeight:1},children:"new"})})]})},n))})})};D.propTypes={items:o().array.isRequired,onClose:o().func};let W=({pages:e})=>{let{mode:t}=(0,s.useTheme)().palette;return(0,a.jsxs)(h(),{children:[a.jsx(h(),{width:1,paddingX:2,paddingY:1,children:a.jsx(h(),{display:"flex",component:"a",href:"/",title:"Virtualground",width:{xs:140,md:380},children:a.jsx(h(),{component:"img",src:"light"===t?"https://github.com/bark-community/web-fundraising-platform/logo-light.svg?raw=true":"https://github.com/bark-community/web-fundraising-platform-dark.svg?raw=true",height:1,width:1})})}),a.jsx(h(),{paddingX:2,paddingY:2,children:a.jsx(h(),{children:a.jsx(D,{items:e})})})]})};W.propTypes={pages:o().array.isRequired};let q=({pages:e,open:t,variant:r,onClose:n})=>a.jsx(F(),{anchor:"left",onClose:()=>n(),open:t,variant:r,sx:{"& .MuiPaper-root":{width:"100%",maxWidth:280}},children:a.jsx(h(),{sx:{height:"100%",padding:1},children:a.jsx(W,{pages:e})})});q.propTypes={onClose:o().func,open:o().bool.isRequired,variant:o().string.isRequired,pages:o().array.isRequired};var N=r(5246),P=r.n(N);let _=()=>{let{mode:e}=(0,s.useTheme)().palette;return(0,a.jsxs)(B(),{container:!0,spacing:2,children:[a.jsx(B(),{item:!0,xs:12,children:(0,a.jsxs)(h(),{display:"flex",justifyContent:"space-between",alignItems:"center",width:1,flexDirection:{xs:"column",sm:"row"},children:[a.jsx(h(),{display:"flex",component:"a",href:"/",title:"theFront",width:350,children:a.jsx(h(),{component:"img",src:"light"===e?"https://github.com/bark-community/web-fundraising-platform/blob/main/images/logo-light.svg?raw=true":"https://github.com//https://github.com/bark-community/web-fundraising-platform/blob/main/images/logo-dark.svg?raw=true",height:.4,width:.4})}),a.jsx(h(),{display:"flex",flexWrap:"wrap",alignItems:"center",children:a.jsx(h(),{marginTop:1,marginRight:1,children:a.jsx(P(),{underline:"none",component:"a",href:"/",color:"text.primary",variant:"subtitle2",children:"Home"})})})]})}),a.jsx(B(),{item:!0,xs:12,children:(0,a.jsxs)(M(),{align:"center",variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:["BARK Protocol. ",new Date().getFullYear(),". All rights reserved"]})})]})},A=[{title:"Create Campaign",href:"/create"},{title:"Projects",href:"/projects"}],H=({children:e,colorInvert:t=!1,bgcolor:r="transparent"})=>{let i=(0,s.useTheme)(),o=p()(i.breakpoints.up("md"),{defaultMatches:!0}),[l,d]=(0,n.useState)(!1),c=f()({disableHysteresis:!0,threshold:38});return(0,a.jsxs)(h(),{children:[a.jsx(g(),{position:"sticky",sx:{top:0,backgroundColor:c?i.palette.background.paper:r},elevation:c?1:0,children:a.jsx(y.Z,{paddingY:1,children:a.jsx(O,{onSidebarOpen:()=>{d(!0)},pages:A,colorInvert:!c&&t})})}),a.jsx(q,{onClose:()=>{d(!1)},open:!o&&l,variant:"temporary",pages:A}),(0,a.jsxs)("main",{children:[e,a.jsx(x(),{})]}),a.jsx(y.Z,{paddingY:4,children:a.jsx(_,{})})]})};H.propTypes={children:o().node,colorInvert:o().bool,bgcolor:o().string};let U=H},1801:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var a=r(997),n=r(6689),i=r.n(n),o=r(580),s=r.n(o),l=r(968),p=r.n(l),d=r(8442),h=r(1598),c=r.n(h),x=r(4960),m=r.n(x),g=r(3168);let u=(e="light")=>{let t="light"===e?"#8c98a4":"#000000";return["none",`0 3px 6px 0 ${(0,d.alpha)(t,.25)}`,`0 12px 15px ${(0,d.alpha)(t,.1)}`,`0 6px 24px 0 ${(0,d.alpha)(t,.125)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`,`0 10px 40px 10px ${(0,d.alpha)(t,.175)}`]},f={alternate:{main:"#f4efea",dark:"#edf1f7"},cardShadow:"rgba(23, 70, 161, .11)",mode:"light",primary:{main:"#171717",light:"#454545",dark:"#454545",contrastText:"#fff"},secondary:{light:"#ffb74d",main:"#f9b934",dark:"#FF9800",contrastText:"rgba(0, 0, 0, 0.87)"},text:{primary:"#1e2022",secondary:"#677788"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:"#ffffff",default:"#ffffff",level2:"#f5f5f5",level1:"#ffffff"}},y={alternate:{main:"#1a2138",dark:"#151a30"},cardShadow:"rgba(0, 0, 0, .11)",common:{black:"#000",white:"#fff"},mode:"dark",primary:{main:"#1976d2",light:"#2196f3",dark:"#0d47a1",contrastText:"#fff"},secondary:{light:"#FFEA41",main:"#FFE102",dark:"#DBBE01",contrastText:"rgba(0, 0, 0, 0.87)"},text:{primary:"#EEEEEF",secondary:"#AEB0B4"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#222B45",default:"#222B45",level2:"#333",level1:"#2D3748"}},j=(e,t)=>(0,g.Z)((0,d.createTheme)({palette:"light"===e?f:y,shadows:u(e),typography:{fontFamily:'"Inter", sans-serif',button:{textTransform:"none",fontWeight:"medium"}},zIndex:{appBar:1200,drawer:1300},components:{MuiButton:{styleOverrides:{root:{fontWeight:400,borderRadius:5,paddingTop:10,paddingBottom:10},containedSecondary:"light"===e?{color:"white"}:{}}},MuiInputBase:{styleOverrides:{root:{borderRadius:5}}},MuiOutlinedInput:{styleOverrides:{root:{borderRadius:5},input:{borderRadius:5}}},MuiCard:{styleOverrides:{root:{borderRadius:8}}}},themeToggler:t}));r(9783);let w=()=>{let[e,t]=(0,n.useState)("light"),[r,a]=(0,n.useState)(!1),i=e=>{try{window.localStorage.setItem("themeMode",e)}catch{}t(e)};return(0,n.useEffect)(()=>{try{let e=window.localStorage.getItem("themeMode");e?t(e):i("light")}catch{i("light")}a(!0)},[]),[e,()=>{"light"===e?i("dark"):i("light")},r]};function b({children:e}){let[t,r,n]=w();return(0,a.jsxs)(d.ThemeProvider,{theme:j(t,r),children:[a.jsx(m(),{}),a.jsx(c(),{elevation:0,children:e})]})}function v({Component:e,pageProps:t}){return(0,a.jsxs)(i().Fragment,{children:[(0,a.jsxs)(p(),{children:[a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),a.jsx("title",{children:"crypto charity"})]}),a.jsx(b,{children:a.jsx(e,{...t})})]})}b.propTypes={children:s().node.isRequired},r(4082),r(8278),r(782),r(4763),r(1759),v.propTypes={Component:s().elementType.isRequired,pageProps:s().object.isRequired}},9981:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var n=r(997);r(6689);var i=r(6859),o=r.n(i),s=r(8440),l=r(730),p=e([s,l]);[s,l]=p.then?(await p)():p;class d extends o(){render(){return(0,n.jsxs)(i.Html,{lang:"en",children:[(0,n.jsxs)(i.Head,{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("link",{rel:"shortcut icon",href:"https://github.com/ac12644/Fundraising-Dapp/blob/main/images/cc-box-light.png?raw=true"}),n.jsx("meta",{name:"theme-color",content:"#ffffff"}),n.jsx("meta",{name:"description",content:"Raise fund for social work in crypto built on polygon network. Create fundraising campaign, donate MATIC, generate a receipt, and withdraw the amount."}),n.jsx("meta",{name:"robots",content:"max-snippet:-1, max-image-preview:large, max-video-preview:-1"}),n.jsx("meta",{property:"og:locale",content:"en_US"}),n.jsx("meta",{property:"og:type",content:"website"}),n.jsx("meta",{property:"og:image",content:"https://github.com/ac12644/Fundraising-Dapp/blob/main/images/crypto%20charity-light.png?raw=true"}),n.jsx("meta",{property:"og:title",content:"crypto charity"}),n.jsx("meta",{property:"og:description",content:"Raise fund for social work in crypto built on polygon network. Create fundraising campaign, donate MATIC, generate a receipt, and withdraw the amount."}),n.jsx("meta",{property:"og:url",content:"www.google.com"}),n.jsx("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),n.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap",rel:"stylesheet"})]}),(0,n.jsxs)("body",{children:[n.jsx(i.Main,{}),n.jsx(i.NextScript,{})]})]})}}d.getInitialProps=async e=>{let t=e.renderPage,r=(0,s.default)({key:"css",prepend:!0}),{extractCriticalToChunks:a}=(0,l.default)(r);e.renderPage=()=>t({enhanceApp:e=>function(t){return n.jsx(e,{emotionCache:r,...t})}});let i=await o().getInitialProps(e),p=a(i.html).styles.map(e=>n.jsx("style",{"data-emotion":`${e.key} ${e.ids.join(" ")}`,dangerouslySetInnerHTML:{__html:e.css}},e.key));return{...i,emotionStyleTags:p}},a()}catch(e){a(e)}})}};