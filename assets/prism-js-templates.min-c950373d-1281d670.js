(function(r){var v=r.languages.javascript["template-string"],_=v.pattern.source,d=v.inside.interpolation,z=d.inside["interpolation-punctuation"],O=d.pattern.source;function y(e,a){if(r.languages[e])return{pattern:RegExp("((?:"+a+")\\s*)"+_),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function T(e,a){return"___"+a.toUpperCase()+"_"+e+"___"}function j(e,a,t){var n={code:e,grammar:a,language:t};return r.hooks.run("before-tokenize",n),n.tokens=r.tokenize(n.code,n.grammar),r.hooks.run("after-tokenize",n),n.tokens}function E(e){var a={};a["interpolation-punctuation"]=z;var t=r.tokenize(e,a);if(t.length===3){var n=[1,1];n.push.apply(n,j(t[1],r.languages.javascript,"javascript")),t.splice.apply(t,n)}return new r.Token("interpolation",t,d.alias,e)}function R(e,a,t){var n=r.tokenize(e,{interpolation:{pattern:RegExp(O),lookbehind:!0}}),g=0,u={},s=j(n.map(function(p){if(typeof p=="string")return p;for(var i,l=p.content;e.indexOf(i=T(g++,t))!==-1;);return u[i]=l,i}).join(""),a,t),c=Object.keys(u);return g=0,function p(i){for(var l=0;l<i.length;l++){if(g>=c.length)return;var o=i[l];if(typeof o=="string"||typeof o.content=="string"){var k=c[g],m=typeof o=="string"?o:o.content,b=m.indexOf(k);if(b!==-1){++g;var q=m.substring(0,b),B=E(u[k]),w=m.substring(b+k.length),f=[];if(q&&f.push(q),f.push(B),w){var x=[w];p(x),f.push.apply(f,x)}typeof o=="string"?(i.splice.apply(i,[l,1].concat(f)),l+=f.length-1):o.content=f}}else{var A=o.content;Array.isArray(A)?p(A):p([A])}}}(s),new r.Token(t,s,"language-"+t,e)}r.languages.javascript["template-string"]=[y("css","\\b(?:styled(?:\\([^)]*\\))?(?:\\s*\\.\\s*\\w+(?:\\([^)]*\\))*)*|css(?:\\s*\\.\\s*(?:global|resolve))?|createGlobalStyle|keyframes)"),y("html","\\bhtml|\\.\\s*(?:inner|outer)HTML\\s*\\+?="),y("svg","\\bsvg"),y("markdown","\\b(?:markdown|md)"),y("graphql","\\b(?:gql|graphql(?:\\s*\\.\\s*experimental)?)"),y("sql","\\bsql"),v].filter(Boolean);var S={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function h(e){return typeof e=="string"?e:Array.isArray(e)?e.map(h).join(""):h(e.content)}r.hooks.add("after-tokenize",function(e){e.language in S&&function a(t){for(var n=0,g=t.length;n<g;n++){var u=t[n];if(typeof u!="string"){var s=u.content;if(Array.isArray(s))if(u.type==="template-string"){var c=s[1];if(s.length===3&&typeof c!="string"&&c.type==="embedded-code"){var p=h(c),i=c.alias,l=Array.isArray(i)?i[0]:i,o=r.languages[l];if(!o)continue;s[1]=R(p,o,l)}}else a(s);else typeof s!="string"&&a([s])}}}(e.tokens)})})(Prism);
