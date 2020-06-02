(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return c}));var n=a(2),r=(a(0),a(161));const i={title:"WebApp Meta"},l={id:"html/webapp",title:"WebApp Meta",description:"## WebApp Meta \u6807\u7b7e\u8bbe\u7f6e(iOS)",source:"@site/docs/html/webapp.md",permalink:"/jdc_fe_guide/docs/html/webapp",editUrl:"https://git.jd.com/JDC_FE/jdc_fe_guide/tree/master/docs/html/webapp.md",sidebar:"someSidebar",previous:{title:"\u6587\u4ef6\u6a21\u7248",permalink:"/jdc_fe_guide/docs/html/template"},next:{title:"\u56fe\u7247\u683c\u5f0f",permalink:"/jdc_fe_guide/docs/image/format"}},p=[{value:"WebApp Meta \u6807\u7b7e\u8bbe\u7f6e(iOS)",id:"webapp-meta-\u6807\u7b7e\u8bbe\u7f6eios",children:[{value:"Viewport Meta Tag",id:"viewport-meta-tag",children:[]},{value:"Apple-Specific Meta Tag Keys",id:"apple-specific-meta-tag-keys",children:[]}]}],o={rightToc:p};function c({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"webapp-meta-\u6807\u7b7e\u8bbe\u7f6eios"},"WebApp Meta \u6807\u7b7e\u8bbe\u7f6e(iOS)"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A web application is designed to look and behave in a way similar to a native application\u2014for example, it is scaled to fit the entire screen on iOS. You can tailor your web application for Safari on iOS even further, by making it appear like a native application when the user adds it to the Home screen. You do this by using settings for iOS that are ignored by other platforms.")),Object(r.b)("p",null,"WebApp\u76ee\u7684\u5728\u4e8e\u4f7f\u5176\u754c\u9762\u548c\u884c\u4e3a\u5728\u67d0\u79cd\u7a0b\u5ea6\u4e0a\u7c7b\u4f3c\u4e8e\u539f\u751fAPP\u5e94\u7528\u3002\u4f8b\u5982\uff0cWebApp \u53ef\u4ee5\u5728 iOS \u8bbe\u5907\u4e0a\u901a\u8fc7\u7f29\u653e\u53bb\u9002\u914d\u8bbe\u5907\u5c4f\u5e55\u3002\u5f53\u7528\u6237\u5c06WebApp\u7a0b\u5e8f\u6dfb\u52a0\u5230\u4e3b\u5c4f\u5e55\u540e\uff0c\u4f1a\u4f7f\u5f97\u5b83\u770b\u4e0a\u53bb\u50cf\u539f\u751fAPP\u4e00\u6837\uff0c\u4ee5\u6b64\uff0c\u4f60\u53ef\u4ee5\u8fdb\u4e00\u6b65\u4e3a Safari \u5b9a\u5236\u81ea\u5df1\u7684 WebApp\uff0c\u800c\u4f7f\u7528\u67d0\u4e9b\u4e13\u4e3a iOS \u5e73\u53f0\u8bbe\u5b9a\u7684\u8bbe\u7f6e\u5c31\u53ef\u4ee5\u505a\u5230\u3002"),Object(r.b)("p",null,"WebApp\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e meta \u6807\u7b7e\u6765\u6539\u53d8\u9875\u9762\u7684\u4e00\u4e9b\u8868\u73b0\uff0c\u6709\u4e9b meta \u8bbe\u7f6e\u5728 Safari \u5e94\u7528\u6216\u539f\u751f App \u7684\u5185\u5d4c\u7f51\u9875\u4e2d\u90fd\u53ef\u4ee5\u751f\u6548\uff0c\u800c\u6709\u4e9b\u8bbe\u7f6e\u4fa7\u9700\u8981\u5c06\u5e94\u7528\u6dfb\u52a0\u5230\u4e3b\u5c4f\u5e55\u7684\u65f6\u5019\u624d\u4f1a\u751f\u6548\u3002"),Object(r.b)("h3",{id:"viewport-meta-tag"},"Viewport Meta Tag"),Object(r.b)("h4",{id:"\u901a\u7528\u7c7b\u8bbe\u7f6e"},"\u901a\u7528\u7c7b\u8bbe\u7f6e"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<meta name="viewport" content="width=device-width, initial-scale=1.0, \nmaximum-scale=1.0, user-scalable=no">\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"width -- viewport\u7684\u5bbd\u5ea6"),Object(r.b)("li",{parentName:"ul"},"height -- viewport\u7684\u9ad8\u5ea6"),Object(r.b)("li",{parentName:"ul"},"initial-scale -- \u521d\u59cb\u7684\u7f29\u653e\u6bd4\u4f8b"),Object(r.b)("li",{parentName:"ul"},"minimum-scale -- \u5141\u8bb8\u7528\u6237\u7f29\u653e\u5230\u7684\u6700\u5c0f\u6bd4\u4f8b"),Object(r.b)("li",{parentName:"ul"},"maximum-scale -- \u5141\u8bb8\u7528\u6237\u7f29\u653e\u5230\u7684\u6700\u5927\u6bd4\u4f8b"),Object(r.b)("li",{parentName:"ul"},"user-scalable -- \u662f\u5426\u5141\u8bb8\u7528\u6237\u7f29\u653e")),Object(r.b)("h4",{id:"safari-on-ios-viewport"},"Safari on iOS viewport"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The width of the viewport in pixels. The default is 980. The range is from 200 to 10,000."),Object(r.b)("p",{parentName:"blockquote"},"The minimum-scale and maximum-scale properties also affect the behavior when changing orientations. The range of these property values is from >0 to 10.0. The default value for minimum-scale is 0.25 and maximum-scale is 5.0")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"user-scalable -- The default is yes.\nSetting user-scalable to no also prevents a webpage from scrolling when entering text in an input field.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5bbd\u5ea6\u662f 980px\uff0c\u8303\u56f4\u4ece 200px \u5230 10000px"),Object(r.b)("li",{parentName:"ul"},"initial-scale \u7f29\u653e\u6bd4\u4f8b\u8303\u56f4\u503c\u662f \u4ece >0 \u5230 10 \u4e4b\u95f4"),Object(r.b)("li",{parentName:"ul"},"minimum-scale \u9ed8\u8ba4\u503c\u662f 0.25"),Object(r.b)("li",{parentName:"ul"},"maximum-scale \u9ed8\u8ba4\u503c\u662f 5"),Object(r.b)("li",{parentName:"ul"},"user-scalable -- \u9ed8\u8ba4\u503c\u662f yes\uff0c\u8bbe\u7f6e no \u8fd8\u53ef\u4ee5\u5728\u6587\u672c\u6846\u8f93\u5165\u6587\u672c\u7684\u65f6\u5019\u963b\u6b62\u9875\u9762\u6eda\u52a8")),Object(r.b)("p",null,"\u66f4\u591a\u5173\u4e8e Safari on iOS viewport \u7684\u8bbe\u7f6e:"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html#//apple_ref/doc/uid/TP40006509-SW19"}),"Configuring the Viewport"),"\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html"}),"Safari HTML Reference")),Object(r.b)("h3",{id:"apple-specific-meta-tag-keys"},"Apple-Specific Meta Tag Keys"),Object(r.b)("h4",{id:"apple-mobile-web-app-capable"},"apple-mobile-web-app-capable"),Object(r.b)("p",null,"\u8bbe\u7f6e WebApp \u662f\u5426\u8fdb\u5165\u5168\u5c4f\u6a21\u5f0f\uff0c\u8be5\u8bbe\u7f6e\u9700\u8981\u6dfb\u52a0\u5230\u4e3b\u5c4f\u5e55\u624d\u751f\u6548"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'<meta name="apple-mobile-web-app-capable" content="yes">\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If content is set to yes, the web application runs in full-screen mode;otherwise, it does not. The default behavior is to use Safari to display web content.You can determine whether a webpage is displayed in full-screen mode using the window.navigator.standalone read-only Boolean JavaScript property.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"content\u8bbe\u7f6e yes \u8fdb\u5165\u5168\u5c4f\u6a21\u5f0f"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u542f\u52a8 Safari \u5e94\u7528\uff0c\u4f7f\u7528 Safari \u5e94\u7528\u6d4f\u89c8"),Object(r.b)("li",{parentName:"ul"},"\u901a\u8fc7\u68c0\u6d4b window.navigator.standalone \u7684 Boolean \u503c\u53ef\u4ee5\u5224\u65ad web \u5e94\u7528\u662f\u5426\u5904\u4e8e\u5168\u5c4f\u6a21\u5f0f")),Object(r.b)("h4",{id:"apple-mobile-web-app-status-bar-style"},"apple-mobile-web-app-status-bar-style"),Object(r.b)("p",null,"\u4e3a webapp \u8bbe\u7f6e\u72b6\u6001\u680f\u6837\u5f0f"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'<meta name="apple-mobile-web-app-status-bar-style" content="black">\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This meta tag has no effect unless you first specify full-screen mode as described in apple-apple-mobile-web-app-capable."),Object(r.b)("p",{parentName:"blockquote"},"If content is set to default, the status bar appears normal. If set to black, the status bar has a black background. If set to black-translucent, the status bar is black and translucent. If set to default or black, the web content is displayed below the status bar. If set to black-translucent, the web content is displayed on the entire screen, partially obscured by the status bar. The default value is default.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6b64 meta \u8bbe\u7f6e\u53ea\u5728\u5168\u5c4f\u6a21\u5f0f\u751f\u6548"),Object(r.b)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\u662f default"),Object(r.b)("li",{parentName:"ul"},'content="black"\uff0c\u72b6\u6001\u680f\u80cc\u666f\u9ed1\u8272\uff0c\u7f51\u9875\u5185\u5bb9\u5728\u72b6\u6001\u680f\u4e0b\u9762'),Object(r.b)("li",{parentName:"ul"},'content="black-translucent"\uff0c\u72b6\u6001\u680f\u534a\u900f\u660e\uff0c\u80cc\u666f\u9ed1\u8272\uff0c\u7f51\u9875\u5185\u5bb9\u5360\u6ee1\u5168\u5c4f')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"\u8be5\u8bbe\u7f6e\u5728 iOS6 \u548c iOS7 \u8868\u73b0\u8fd8\u53ef\u4ee5\uff0c\u4f46\u5230\u4e86 iOS8 \u540e\u4f1a\u51fa\u73b0\u5404\u79cd\u95ee\u9898\uff0c\u800c\u4e14\u5728 iOS9 \u4e2d\u5e76\u6ca1\u6709\u751f\u6548\u3002\u53c2\u9605\uff1a",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://stackoverflow.com/questions/25884806/ios-8-web-app-status-bar-position-and-resizing-problems"}),"iOS 8: web app status bar position and resizing problems"))),Object(r.b)("h4",{id:"format-detection"},"format-detection"),Object(r.b)("p",null,"\u81ea\u52a8\u8bc6\u522b\u9875\u9762\u4e2d\u6709\u53ef\u80fd\u662f\u7535\u8bdd\u683c\u5f0f\u7684\u6570\u5b57 "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'<meta name="format-detection" content="telephone=no">\n')),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"By default, Safari on iOS detects any string formatted like a phone number and makes it a link that calls the number. Specifying telephone=no disables this feature.")),Object(r.b)("p",null,"iOS\u4e2d\u7684 Safari \u4f1a\u9ed8\u8ba4\u8bc6\u522b\u4e0e\u7535\u8bdd\u683c\u5f0f\u76f8\u4f3c\u7684\u6570\u5b57\u5e76\u751f\u6210\u4e00\u4e2a\u53ef\u4ee5\u62c9\u8d77\u7535\u8bdd\u5e94\u7528\u5e76\u5c06\u8be5\u6570\u5b57\u4f5c\u4e3a\u7535\u8bdd\u53f7\u7801\u62e8\u6253\u7684\u94fe\u63a5\u3002\u5b9a\u4e49 telephone=no \u53ef\u4ee5\u5c4f\u853d\u8be5\u529f\u80fd"),Object(r.b)("p",null,"\u66f4\u591a WebApp \u8bbe\u7f6e\u53c2\u8003 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4"}),"Configuring Web Applications")))}c.isMDXComponent=!0},161:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p({},t,{},e)),a},s=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(a),m=n,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||i;return a?r.a.createElement(f,p({ref:t},c,{components:a})):r.a.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);