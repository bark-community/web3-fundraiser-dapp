(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[739],{33338:function(e,r,n){"use strict";var t=n(26042),i=n(69396),o=n(99534),a=n(85893);n(67294);var s=n(45697),c=n.n(s),l=n(5616),d=function(e){var r=e.children,n=(0,o.Z)(e,["children"]);return(0,a.jsx)(l.Z,(0,i.Z)((0,t.Z)({maxWidth:{sm:720,md:1236},width:1,margin:"0 auto",paddingX:2,paddingY:{xs:4,sm:6,md:8}},n),{children:r}))};d.propTypes={children:c().node},r.Z=d},80008:function(e,r,n){"use strict";n.d(r,{Z:function(){return en}});var t,i=n(85893),o=n(67294),a=n(45697),s=n.n(a),c=n(2734),l=n(61730),d=n(5616),h=n(67720),u=n(42293),p=n(8298),m=n(33338),g=n(25662),x=n(41796),f=n(326),y=n(15861),v=function(e){var r=e.items;e.colorInvert;var n=(0,c.Z)(),t=(0,o.useState)(""),a=t[0],s=t[1];return(0,o.useEffect)(function(){s(window&&window.location?window.location.pathname:"")},[]),(0,i.jsx)(d.Z,{children:r.map(function(e,r){return(0,i.jsxs)(g.Z,{component:"a",href:e.href,sx:{marginLeft:4,justifyContent:"flex-start",color:a===e.href?n.palette.primary.main:n.palette.text.primary,backgroundColor:a===e.href?(0,x.Fq)(n.palette.primary.main,.1):"transparent",fontWeight:a===e.href?700:500},children:[e.title,e.isNew&&(0,i.jsx)(d.Z,{padding:.5,display:"inline-flex",borderRadius:1,bgcolor:"primary.main",marginLeft:2,children:(0,i.jsx)(y.Z,{variant:"caption",sx:{color:"common.white",lineHeight:1},children:"new"})})]},r)})})};v.propTypes={items:s().array.isRequired,colorInvert:s().bool};var b=function(){var e=(0,c.Z)(),r=e.themeToggler,n=e.palette.mode;return(0,i.jsx)(g.Z,{variant:"outlined",onClick:function(){return r()},"aria-label":"Dark mode toggler",color:"light"===n?"primary":"secondary",sx:{borderRadius:2,minWidth:"auto",padding:.5,borderColor:(0,x.Fq)(e.palette.divider,.2)},children:"light"===n?(0,i.jsx)("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})}):(0,i.jsx)("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"})})})},Z=n(47568),j=n(26042),w=n(69396),C=n(10092),k=n(93946),I=n(33334),_=n(69661),R=n(51233),E=n(23599),P=n(23795),T=n(14924),S=n(99534),M=n(65724),L=(0,n(90948).ZP)("span")(function(e){var r=e.theme;return(0,T.Z)({},r.breakpoints.up("sm"),{top:-7,zIndex:1,width:12,right:20,height:12,content:"''",position:"absolute",borderRadius:"0 0 4px 0",transform:"rotate(-135deg)",background:r.palette.background.paper,borderRight:"solid 1px ".concat((0,x.Fq)(r.palette.grey[500],.12)),borderBottom:"solid 1px ".concat((0,x.Fq)(r.palette.grey[500],.12))})});function q(e){var r=e.children,n=e.sx,t=(0,S.Z)(e,["children","sx"]);return(0,i.jsxs)(M.ZP,(0,w.Z)((0,j.Z)({anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},PaperProps:{sx:(0,j.Z)({p:1,width:200,overflow:"inherit"},n)}},t),{children:[(0,i.jsx)(L,{className:"arrow"}),r]}))}q.propTypes={children:s().node.isRequired,sx:s().object};var A=[{label:"My Donations",route:"/my-donations"},];function W(e){var r=e.address,n=e.icon,t=e.handleLogout,a=(0,o.useRef)(null),s=(0,o.useState)(null),c=s[0],l=s[1],u=function(e){l(e.currentTarget)},p=function(){l(null)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(k.Z,{ref:a,onClick:u,sx:(0,j.Z)({p:0},c&&{"&:before":{zIndex:1,content:"''",width:"100%",height:"100%",borderRadius:"50%",position:"absolute",bgcolor:function(e){return(0,x.Fq)(e.palette.grey[900],.8)}}}),children:(0,i.jsx)(_.Z,{src:n,alt:"icon"})}),(0,i.jsxs)(q,{open:Boolean(c),anchorEl:c,onClose:p,sx:{p:0,mt:1.5,ml:.75,"& .MuiMenuItem-root":{typography:"body2",borderRadius:.75}},children:[(0,i.jsx)(d.Z,{sx:{my:1.5,px:2.5},children:(0,i.jsx)(y.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:r})}),(0,i.jsx)(h.Z,{sx:{borderStyle:"dashed"}}),(0,i.jsx)(R.Z,{sx:{p:1},children:A.map(function(e){return(0,i.jsx)(E.Z,{component:P.Z,href:e.route,onClick:p,children:e.label},e.label)})}),(0,i.jsx)(h.Z,{sx:{borderStyle:"dashed"}}),(0,i.jsx)(E.Z,{onClick:t,sx:{m:1},children:"Logout"})]})]})}W.propTypes={address:s().string.isRequired,icon:s().string.isRequired,handleLogout:s().func.isRequired};var D=[{name:"Polygon Mumbai",short_name:"matic",chain:"MATIC",network:"mumbai",chain_id:80001,network_id:80001,rpc_url:"https://rpc-mumbai.maticvigil.com",native_currency:{symbol:"MATIC",name:"MATIC",decimals:"18",contractAddress:"",balance:""}},{name:"Polygon",short_name:"matic",chain:"MATIC",network:"mumbai",chain_id:137,network_id:137,rpc_url:"https://polygon-rpc.com/",native_currency:{symbol:"MATIC",name:"MATIC",decimals:"18",contractAddress:"",balance:""}},],F=n(74845),O=n(51181),z=n(42484),B=n.n(z),N={walletconnect:{package:F.Z,options:{infuraId:"20fd42e98eae4d849d67837fca21e291"}}};t=new(B())({network:"mainnet",cacheProvider:!0,providerOptions:N});var Y={provider:null,web3Provider:null,address:null,chainId:null};function H(e,r){switch(r.type){case"SET_WEB3_PROVIDER":return(0,w.Z)((0,j.Z)({},e),{provider:r.provider,web3Provider:r.web3Provider,address:r.address,chainId:r.chainId});case"SET_ADDRESS":return(0,w.Z)((0,j.Z)({},e),{address:r.address});case"SET_CHAIN_ID":return(0,w.Z)((0,j.Z)({},e),{chainId:r.chainId});case"RESET_WEB3_PROVIDER":return Y;default:throw Error()}}var V=function(){var e=(0,o.useState)(null),r=(e[0],e[1]),n=(0,o.useReducer)(H,Y),a=n[0],s=n[1],c=a.provider,l=a.web3Provider,d=a.address,h=a.chainId,u=(0,o.useCallback)((0,Z.Z)(function(){var e,r,n,i,o;return(0,C.__generator)(this,function(n){switch(n.label){case 0:return[4,t.connect()];case 1:return e=n.sent(),[4,(r=new O.Q(e)).getSigner().getAddress()];case 2:return i=n.sent(),[4,r.getNetwork()];case 3:return s({type:"SET_WEB3_PROVIDER",provider:e,web3Provider:r,address:i,chainId:n.sent().chainId}),[2]}})}),[]),p=(0,o.useCallback)((0,Z.Z)(function(){return(0,C.__generator)(this,function(e){switch(e.label){case 0:return[4,t.clearCachedProvider()];case 1:if(e.sent(),!((null==c?void 0:c.disconnect)&&"function"==typeof c.disconnect))return[3,3];return[4,c.disconnect()];case 2:e.sent(),e.label=3;case 3:return s({type:"RESET_WEB3_PROVIDER"}),r(null),[2]}})}),[c]);return(0,o.useEffect)(function(){if(null==c?void 0:c.on){var e=function(e){console.log("accountsChanged",e),s({type:"SET_ADDRESS",address:e[0]})},r=function(e){window.location.reload()},n=function(e){console.log("disconnect",e),p()};return c.on("accountsChanged",e),c.on("chainChanged",r),c.on("disconnect",n),function(){c.removeListener&&(c.removeListener("accountsChanged",e),c.removeListener("chainChanged",r),c.removeListener("disconnect",n))}}},[c,p]),!function(e){if(!e)return null;var r=D.filter(function(r){return r.chain_id===e})[0];if(!r)throw Error("ChainId missing or not supported");var n="a1f754ea74b24beea097773f476894e0";if(r.rpc_url.includes("infura.io")&&r.rpc_url.includes("%API_KEY%")&&n){var t=r.rpc_url.replace("%API_KEY%",n);return(0,w.Z)((0,j.Z)({},r),{rpc_url:t})}return r}(h),(0,i.jsx)("div",{className:"container",children:l?(0,i.jsx)(W,{icon:"https://firebasestorage.googleapis.com/v0/b/virtualground-meta.appspot.com/o/nft%2Ficon.png?alt=media&token=51904b60-2b20-47aa-9502-67f4aabc8061",address:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:7;return e?"".concat(e.slice(0,r),"....").concat(e.slice(-r)):""}(d),handleLogout:p}):(0,i.jsx)(k.Z,{color:"primary",onClick:u,size:"medium",children:(0,i.jsx)(I.Z,{fontSize:"large"})})})},X=function(e){var r=e.onSidebarOpen,n=e.pages,t=e.colorInvert,o=void 0!==t&&t,a=(0,c.Z)(),s=a.palette.mode;return(0,i.jsxs)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:1,children:[(0,i.jsx)(d.Z,{display:"flex",component:"a",href:"/",title:"crypto charity",width:{xs:360,md:360},children:(0,i.jsx)(d.Z,{component:"img",src:"light"!==s||o?"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-dark.png?raw=true":"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-light.png?raw=true",height:.4,width:.4})}),(0,i.jsxs)(d.Z,{sx:{display:{xs:"none",md:"flex"}},alignItems:"center",children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(v,{items:n,colorInvert:o})}),(0,i.jsx)(d.Z,{marginLeft:4,children:(0,i.jsx)(V,{})}),(0,i.jsx)(d.Z,{marginLeft:4,children:(0,i.jsx)(b,{})})]}),(0,i.jsxs)(d.Z,{sx:{display:{xs:"flex",md:"none"}},alignItems:"center",children:[(0,i.jsx)(d.Z,{children:(0,i.jsx)(V,{})}),(0,i.jsx)(d.Z,{marginLeft:1,children:(0,i.jsx)(g.Z,{onClick:function(){return r()},"aria-label":"Menu",variant:"outlined",sx:{borderRadius:2,minWidth:"auto",padding:1,borderColor:(0,x.Fq)(a.palette.divider,.2)},children:(0,i.jsx)(f.Z,{})})})]})]})};X.propTypes={onSidebarOpen:s().func,pages:s().array,colorInvert:s().bool};var K=n(77533),Q=n(86886),G=function(e){var r=e.items,n=(0,c.Z)(),t=(0,o.useState)(""),a=t[0],s=t[1];return(0,o.useEffect)(function(){s(window&&window.location?window.location.pathname:"")},[]),(0,i.jsx)(d.Z,{children:(0,i.jsx)(Q.ZP,{container:!0,spacing:1,children:r.map(function(e,r){return(0,i.jsx)(Q.ZP,{item:!0,xs:12,children:(0,i.jsxs)(g.Z,{size:"large",component:"a",href:e.href,fullWidth:!0,sx:{justifyContent:"flex-start",color:a===e.href?n.palette.primary.main:n.palette.text.primary,backgroundColor:a===e.href?(0,x.Fq)(n.palette.primary.main,.1):"transparent",fontWeight:a===e.href?600:400},children:[e.title,e.isNew&&(0,i.jsx)(d.Z,{padding:.5,display:"inline-flex",borderRadius:1,bgcolor:"primary.main",marginLeft:2,children:(0,i.jsx)(y.Z,{variant:"caption",sx:{color:"common.white",lineHeight:1},children:"new"})})]})},r)})})})};G.propTypes={items:s().array.isRequired,onClose:s().func};var J=function(e){var r=e.pages,n=(0,c.Z)().palette.mode;return(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(d.Z,{width:1,paddingX:2,paddingY:1,children:(0,i.jsx)(d.Z,{display:"flex",component:"a",href:"/",title:"Virtualground",width:{xs:140,md:380},children:(0,i.jsx)(d.Z,{component:"img",src:"light"===n?"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-light.png?raw=true":"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-dark.png?raw=true",height:1,width:1})})}),(0,i.jsx)(d.Z,{paddingX:2,paddingY:2,children:(0,i.jsx)(d.Z,{children:(0,i.jsx)(G,{items:r})})})]})};J.propTypes={pages:s().array.isRequired};var U=function(e){var r=e.pages,n=e.open,t=e.variant,o=e.onClose;return(0,i.jsx)(K.ZP,{anchor:"left",onClose:function(){return o()},open:n,variant:t,sx:{"& .MuiPaper-root":{width:"100%",maxWidth:280}},children:(0,i.jsx)(d.Z,{sx:{height:"100%",padding:1},children:(0,i.jsx)(J,{pages:r})})})};U.propTypes={onClose:s().func,open:s().bool.isRequired,variant:s().string.isRequired,pages:s().array.isRequired};var $=function(){var e=(0,c.Z)().palette.mode;return(0,i.jsxs)(Q.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(Q.ZP,{item:!0,xs:12,children:(0,i.jsxs)(d.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:1,flexDirection:{xs:"column",sm:"row"},children:[(0,i.jsx)(d.Z,{display:"flex",component:"a",href:"/",title:"theFront",width:350,children:(0,i.jsx)(d.Z,{component:"img",src:"light"===e?"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-light.png?raw=true":"https://github.com/ac12644/Crypto-Charity/blob/main/images/crypto-charity-dark.png?raw=true",height:.4,width:.4})}),(0,i.jsx)(d.Z,{display:"flex",flexWrap:"wrap",alignItems:"center",children:(0,i.jsx)(d.Z,{marginTop:1,marginRight:1,children:(0,i.jsx)(P.Z,{underline:"none",component:"a",href:"/",color:"text.primary",variant:"subtitle2",children:"Home"})})})]})}),(0,i.jsx)(Q.ZP,{item:!0,xs:12,children:(0,i.jsxs)(y.Z,{align:"center",variant:"subtitle2",color:"text.secondary",gutterBottom:!0,children:["Crypto Charity. ",new Date().getFullYear(),". MIT"]})})]})},ee=[{title:"Create Campaign",href:"/create"},{title:"Projects",href:"/projects"},],er=function(e){var r=e.children,n=e.colorInvert,t=e.bgcolor,a=(0,c.Z)(),s=(0,l.Z)(a.breakpoints.up("md"),{defaultMatches:!0}),g=(0,o.useState)(!1),x=g[0],f=g[1],y=function(){f(!0)},v=function(){f(!1)},b=(0,p.Z)({disableHysteresis:!0,threshold:38});return(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(u.Z,{position:"sticky",sx:{top:0,backgroundColor:b?a.palette.background.paper:void 0===t?"transparent":t},elevation:b?1:0,children:(0,i.jsx)(m.Z,{paddingY:1,children:(0,i.jsx)(X,{onSidebarOpen:y,pages:ee,colorInvert:!b&&void 0!==n&&n})})}),(0,i.jsx)(U,{onClose:v,open:!s&&x,variant:"temporary",pages:ee}),(0,i.jsxs)("main",{children:[r,(0,i.jsx)(h.Z,{})]}),(0,i.jsx)(m.Z,{paddingY:4,children:(0,i.jsx)($,{})})]})};er.propTypes={children:s().node,colorInvert:s().bool,bgcolor:s().string};var en=er},88677:function(){},62808:function(){},46601:function(){},89214:function(){},85568:function(){},69386:function(){},31616:function(){},29120:function(){},46586:function(){},6567:function(){}}]);