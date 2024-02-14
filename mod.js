// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function s(r){return"string"==typeof r}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=f.call(i,y,"$1e"),i=f.call(i,b,"e"),i=f.call(i,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),r.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,v,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===u.call(r.specifier)?u.call(i):p.call(i)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function S(r,e,t){var i=e-r.length;return i<0?r:r=t?r+E(i):E(i)+r}var x=String.fromCharCode,k=isNaN,T=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function V(r){var e,t,i,a,o,l,p,u,f;if(!T(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",p=1,u=0;u<r.length;u++)if(s(i=r[u]))l+=i;else{if(e=void 0!==i.precision,!(i=j(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,k(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,k(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!k(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=k(o)?String(i.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=S(i.arg,i.width,i.padRight)),l+=i.arg||"",p+=1}return l}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,t,i,n;for(t=[],n=0,i=I.exec(r);i;)(e=r.slice(n,I.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=I.lastIndex,i=I.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function O(r){return"string"==typeof r}function _(r){var e,t;if(!O(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[F(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return V.apply(null,e)}var A,C=Object.prototype,R=C.toString,Z=C.__defineGetter__,P=C.__defineSetter__,N=C.__lookupGetter__,W=C.__lookupSetter__;A=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var L=A;function G(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var U=Object.prototype.hasOwnProperty;function X(r,e){return null!=r&&U.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0;var M="function"==typeof B&&"symbol"==typeof B("foo")&&X(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;function z(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var Y=z();var q=Object.prototype.toString;var D="function"==typeof B?B.toStringTag:"";var H=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return q.call(r);t=r[D],e=X(r,D);try{r[D]=void 0}catch(e){return q.call(r)}return i=q.call(r),e?r[D]=t:delete r[D],i}:function(r){return q.call(r)};var J=Array.isArray?Array.isArray:function(r){return"[object Array]"===H(r)};var K=/./;function Q(r){return"boolean"==typeof r}var rr=z();function er(){return rr&&"symbol"==typeof Symbol.toStringTag}var tr=Object.prototype.toString;var ir="function"==typeof B?B.toStringTag:"";var nr=er()?function(r){var e,t,i;if(null==r)return tr.call(r);t=r[ir],e=X(r,ir);try{r[ir]=void 0}catch(e){return tr.call(r)}return i=tr.call(r),e?r[ir]=t:delete r[ir],i}:function(r){return tr.call(r)},ar=Boolean,or=Boolean.prototype.toString;var cr=er();function sr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===nr(r)))}function lr(r){return Q(r)||sr(r)}function pr(r){return"number"==typeof r}function ur(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function fr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ur(n):ur(n)+r,i&&(r="-"+r)),r}G(lr,"isPrimitive",Q),G(lr,"isObject",sr);var gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase;function hr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!pr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=fr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=fr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===dr.call(r.specifier)?dr.call(t):gr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function vr(r){return"string"==typeof r}var wr=Math.abs,br=String.prototype.toLowerCase,yr=String.prototype.toUpperCase,mr=String.prototype.replace,Er=/e\+(\d)$/,Sr=/e-(\d)$/,xr=/^(\d+)$/,kr=/^(\d+)e/,Tr=/\.0$/,jr=/\.0*e/,Vr=/(\..*[^0])0*e/;function Ir(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":wr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=mr.call(t,Vr,"$1e"),t=mr.call(t,jr,"e"),t=mr.call(t,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=mr.call(t,Er,"e+0$1"),t=mr.call(t,Sr,"e-0$1"),r.alternate&&(t=mr.call(t,xr,"$1."),t=mr.call(t,kr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===yr.call(r.specifier)?yr.call(t):br.call(t)}function $r(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Fr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+$r(i):$r(i)+r}var Or=String.fromCharCode,_r=isNaN,Ar=Array.isArray;function Cr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Rr(r){var e,t,i,n,a,o,c,s,l;if(!Ar(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(vr(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Cr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,_r(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,_r(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=hr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!_r(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=_r(a)?String(i.arg):Or(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Ir(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=fr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Fr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Zr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Nr(r){var e,t,i,n;for(t=[],n=0,i=Zr.exec(r);i;)(e=r.slice(n,Zr.lastIndex-i[0].length)).length&&t.push(e),t.push(Pr(i)),n=Zr.lastIndex,i=Zr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Wr(r){return"string"==typeof r}function Lr(r){var e,t;if(!Wr(r))throw new TypeError(Lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Nr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Rr.apply(null,e)}function Gr(){return new Function("return this;")()}var Ur="object"==typeof self?self:null,Xr="object"==typeof window?window:null,Br="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Mr="object"==typeof Br?Br:null,zr="object"==typeof globalThis?globalThis:null;var Yr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(Lr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Gr()}if(zr)return zr;if(Ur)return Ur;if(Xr)return Xr;if(Mr)return Mr;throw new Error("unexpected error. Unable to resolve global object.")}(),qr=Yr.document&&Yr.document.childNodes,Dr=Int8Array;var Hr=z();var Jr=Object.prototype.toString;var Kr="function"==typeof B?B.toStringTag:"";var Qr=Hr&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Jr.call(r);t=r[Kr],e=X(r,Kr);try{r[Kr]=void 0}catch(e){return Jr.call(r)}return i=Jr.call(r),e?r[Kr]=t:delete r[Kr],i}:function(r){return Jr.call(r)};function re(){return/^\s*function\s*([^(]*)/i}var ee=/^\s*function\s*([^(]*)/i;function te(r){return"number"==typeof r}function ie(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function ne(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+ie(n):ie(n)+r,i&&(r="-"+r)),r}G(re,"REGEXP",ee);var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function ce(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!te(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ne(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ne(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===oe.call(r.specifier)?oe.call(t):ae.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function se(r){return"string"==typeof r}var le=Math.abs,pe=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,ve=/^(\d+)e/,we=/\.0$/,be=/\.0*e/,ye=/(\..*[^0])0*e/;function me(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!te(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":le(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=fe.call(t,ye,"$1e"),t=fe.call(t,be,"e"),t=fe.call(t,we,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fe.call(t,ge,"e+0$1"),t=fe.call(t,de,"e-0$1"),r.alternate&&(t=fe.call(t,he,"$1."),t=fe.call(t,ve,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ue.call(r.specifier)?ue.call(t):pe.call(t)}function Ee(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Se(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Ee(i):Ee(i)+r}var xe=String.fromCharCode,ke=isNaN,Te=Array.isArray;function je(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ve(r){var e,t,i,n,a,o,c,s,l;if(!Te(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(se(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=je(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,ke(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,ke(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ce(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ke(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ke(a)?String(i.arg):xe(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=me(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ne(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Se(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $e(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Fe(r){var e,t,i,n;for(t=[],n=0,i=Ie.exec(r);i;)(e=r.slice(n,Ie.lastIndex-i[0].length)).length&&t.push(e),t.push($e(i)),n=Ie.lastIndex,i=Ie.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Oe(r){return"string"==typeof r}function _e(r){var e,t;if(!Oe(r))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Fe(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Ve.apply(null,e)}function Ae(r){return null!==r&&"object"==typeof r}function Ce(r){var e,t,i,n;if(("Object"===(t=Qr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=ee.exec(i.toString()))return e[1]}return Ae(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}G(Ae,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(_e("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!J(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(Ae));var Re="function"==typeof K||"object"==typeof Dr||"function"==typeof qr?function(r){return Ce(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ce(r).toLowerCase():e};function Ze(r){return"function"===Re(r)}var Pe=Object,Ne=Object.getPrototypeOf,We=z();var Le=Object.prototype.toString;var Ge="function"==typeof B?B.toStringTag:"";var Ue,Xe=We&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return Le.call(r);t=r[Ge],e=X(r,Ge);try{r[Ge]=void 0}catch(e){return Le.call(r)}return i=Le.call(r),e?r[Ge]=t:delete r[Ge],i}:function(r){return Le.call(r)};Ue=Ze(Object.getPrototypeOf)?Ne:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Xe(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Be=Ue;var Me=z();var ze=Object.prototype.toString;var Ye="function"==typeof B?B.toStringTag:"";var qe=Me&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i;if(null==r)return ze.call(r);t=r[Ye],e=X(r,Ye);try{r[Ye]=void 0}catch(e){return ze.call(r)}return i=ze.call(r),e?r[Ye]=t:delete r[Ye],i}:function(r){return ze.call(r)},De=Object.prototype;function He(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!J(r)}(r)&&(e=function(r){return null==r?null:(r=Pe(r),Be(r))}(r),!e||!X(r,"constructor")&&X(e,"constructor")&&Ze(e.constructor)&&"[object Function]"===qe(e.constructor)&&X(e,"isPrototypeOf")&&Ze(e.isPrototypeOf)&&(e===De||function(r){var e;for(e in r)if(!X(r,e))return!1;return!0}(r)))}function Je(r){return"number"==typeof r}var Ke=z();function Qe(){return Ke&&"symbol"==typeof Symbol.toStringTag}var rt=Object.prototype.toString;var et="function"==typeof B?B.toStringTag:"";var tt=Qe()?function(r){var e,t,i;if(null==r)return rt.call(r);t=r[et],e=X(r,et);try{r[et]=void 0}catch(e){return rt.call(r)}return i=rt.call(r),e?r[et]=t:delete r[et],i}:function(r){return rt.call(r)},it=Number,nt=it.prototype.toString;var at=Qe();function ot(r){return"object"==typeof r&&(r instanceof it||(at?function(r){try{return nt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===tt(r)))}function ct(r){return Je(r)||ot(r)}G(ct,"isPrimitive",Je),G(ct,"isObject",ot);var st=Number.POSITIVE_INFINITY,lt=it.NEGATIVE_INFINITY,pt=Math.floor;function ut(r){return r<st&&r>lt&&pt(e=r)===e;var e}function ft(r){return Je(r)&&ut(r)}function gt(r){return ot(r)&&ut(r.valueOf())}function dt(r){return ft(r)||gt(r)}function ht(r){return ft(r)&&r>=0}function vt(r){return gt(r)&&r.valueOf()>=0}function wt(r){return ht(r)||vt(r)}function bt(r){return"number"==typeof r}function yt(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function mt(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+yt(n):yt(n)+r,i&&(r="-"+r)),r}G(dt,"isPrimitive",ft),G(dt,"isObject",gt),G(wt,"isPrimitive",ht),G(wt,"isObject",vt);var Et=String.prototype.toLowerCase,St=String.prototype.toUpperCase;function xt(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!bt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=mt(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=mt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===St.call(r.specifier)?St.call(t):Et.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function kt(r){return"string"==typeof r}var Tt=Math.abs,jt=String.prototype.toLowerCase,Vt=String.prototype.toUpperCase,It=String.prototype.replace,$t=/e\+(\d)$/,Ft=/e-(\d)$/,Ot=/^(\d+)$/,_t=/^(\d+)e/,At=/\.0$/,Ct=/\.0*e/,Rt=/(\..*[^0])0*e/;function Zt(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!bt(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Tt(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=It.call(t,Rt,"$1e"),t=It.call(t,Ct,"e"),t=It.call(t,At,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=It.call(t,$t,"e+0$1"),t=It.call(t,Ft,"e-0$1"),r.alternate&&(t=It.call(t,Ot,"$1."),t=It.call(t,_t,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Vt.call(r.specifier)?Vt.call(t):jt.call(t)}function Pt(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function Nt(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Pt(i):Pt(i)+r}var Wt=String.fromCharCode,Lt=isNaN,Gt=Array.isArray;function Ut(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Xt(r){var e,t,i,n,a,o,c,s,l;if(!Gt(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(kt(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Ut(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Lt(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Lt(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=xt(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Lt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Lt(a)?String(i.arg):Wt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Zt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=mt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Nt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Bt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Mt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function zt(r){var e,t,i,n;for(t=[],n=0,i=Bt.exec(r);i;)(e=r.slice(n,Bt.lastIndex-i[0].length)).length&&t.push(e),t.push(Mt(i)),n=Bt.lastIndex,i=Bt.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Yt(r){return"string"==typeof r}function qt(r){var e,t,i;if(!Yt(r))throw new TypeError(qt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=zt(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Xt.apply(null,t)}function Dt(r,e){return He(e)?X(e,"iter")&&(r.iter=e.iter,!ht(e.iter))?new TypeError(qt("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Ht(r){var e,t,i,n,a,o;if(e={iter:4503599627370496},arguments.length&&(n=Dt(e,r)))throw n;return a=0,o=0,G(t={},"next",c),G(t,"return",s),M&&G(t,M,l),t;function c(){return a+=1,i||a>e.iter?{done:!0}:{value:o-=2,done:!1}}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return Ht(e)}}export{Ht as default};
//# sourceMappingURL=mod.js.map
