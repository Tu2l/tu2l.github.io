(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[444],{9086:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(3428),o=n(791),s=n(2265),c=n(7437);let a=["value"],l=s.createContext(),i=()=>{let e=s.useContext(l);return null!=e&&e};t.Z=function(e){let{value:t}=e,n=(0,o.Z)(e,a);return(0,c.jsx)(l.Provider,(0,r.Z)({value:null==t||t},n))}},2392:function(e,t,n){Promise.resolve().then(n.bind(n,733))},733:function(e,t,n){"use strict";n.r(t);var r=n(7437),o=n(6190),s=n(9050),c=n(2265);t.default=()=>{let{setLoading:e,loading:t}=c.useContext(o.ThemeSelectorContext);return(0,r.jsx)(s.Z,{variant:"contained",sx:{borderRadius:30},onClick:()=>{console.log("clicked"),e(!0),setTimeout(()=>e(!1),5e3)},children:"Test button"})}},6190:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeSelectorContext:function(){return y},default:function(){return p}});var r=n(7437),o=n(2265),s=n(3948),c=n(8874),a=n(3226),l=n(6882),i=()=>(0,r.jsx)(c.ZP,{container:!0,height:"100vh",direction:"row",children:(0,r.jsx)(c.ZP,{item:!0,xs:12,sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)(a.Z,{variant:"h2",textAlign:"center",children:[(0,r.jsx)(l.Z,{})," Loading, please wait a moment"]})})});let u="selected_theme_key";var d=n(8595),x=n(1171),f=n(9115),h=n(5782),m=n.n(h),_=n(6507),g=n(471),v=n(2467),j=n.n(v),Z=()=>(0,r.jsx)(_.Z,{component:"div",className:"".concat(j().overlay),children:(0,r.jsxs)(a.Z,{variant:"h4",className:"abs_center",children:[(0,r.jsx)(g.Z,{color:"secondary"})," Please wait"]})}),p=e=>{let{children:t,...n}=e,{themes:c,components:a}=n,[l,h]=o.useState(!1),[_,g]=o.useState(!0),[v,j,p,C,k]=function(e,t){let n=o.useRef(0),[s,c]=o.useState("light"),[a,l]=o.useState(!0),i=(0,d.Z)({...{...e.find(e=>0==e.palette.type.localeCompare(s)),components:t}}),h=0==s.localeCompare("dark")?(0,r.jsx)(x.Z,{className:"".concat(m().icon," ").concat(m().orangeBg)}):(0,r.jsx)(f.Z,{className:"".concat(m().icon," ").concat(m().orangeBg)});return o.useEffect(()=>{var e;c(null==(e=localStorage).getItem(u)?"light":e.getItem(u))},[]),[s,e=>{clearTimeout(n.current),c(e),l(!1),function(e,t){t.setItem(u,e)}(e,localStorage),n.current=setTimeout(()=>{l(!0)},1e3)},i,a,h]}(c,a);return o.useEffect(()=>{g(!1)},[]),(0,r.jsx)(y.Provider,{value:{selectedTheme:v,setTheme:j,setLoading:h,loading:l},children:(0,r.jsxs)(s.Z,{theme:p,children:[C?null:k,l?(0,r.jsx)(Z,{}):null,!0==_?(0,r.jsx)(i,{}):t]})})};let y=o.createContext()},2467:function(e){e.exports={overlay:"styles_overlay__9F5YO"}},5782:function(e){e.exports={icon:"styles_icon___H1o2",fade:"styles_fade__G9AxA",orangeBg:"styles_orangeBg__pad1O"}}},function(e){e.O(0,[566,50,518,288,971,938,744],function(){return e(e.s=2392)}),_N_E=e.O()}]);