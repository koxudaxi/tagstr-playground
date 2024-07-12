var Q=Object.defineProperty;var c=(e,t)=>Q(e,"name",{value:t,configurable:!0}),O=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,o)=>(typeof require<"u"?require:t)[o]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});function Z(e){return!isNaN(parseFloat(e))&&isFinite(e)}c(Z,"_isNumber");function h(e){return e.charAt(0).toUpperCase()+e.substring(1)}c(h,"_capitalize");function P(e){return function(){return this[e]}}c(P,"_getter");var w=["isConstructor","isEval","isNative","isToplevel"],N=["columnNumber","lineNumber"],_=["fileName","functionName","source"],ee=["args"],te=["evalOrigin"],I=w.concat(N,_,ee,te);function p(e){if(e)for(var t=0;t<I.length;t++)e[I[t]]!==void 0&&this["set"+h(I[t])](e[I[t]])}c(p,"StackFrame");p.prototype={getArgs:function(){return this.args},setArgs:function(e){if(Object.prototype.toString.call(e)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=e},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(e){if(e instanceof p)this.evalOrigin=e;else if(e instanceof Object)this.evalOrigin=new p(e);else throw new TypeError("Eval Origin must be an Object or StackFrame")},toString:function(){var e=this.getFileName()||"",t=this.getLineNumber()||"",o=this.getColumnNumber()||"",r=this.getFunctionName()||"";return this.getIsEval()?e?"[eval] ("+e+":"+t+":"+o+")":"[eval]:"+t+":"+o:r?r+" ("+e+":"+t+":"+o+")":e+":"+t+":"+o}};p.fromString=c(function(t){var o=t.indexOf("("),r=t.lastIndexOf(")"),a=t.substring(0,o),n=t.substring(o+1,r).split(","),i=t.substring(r+1);if(i.indexOf("@")===0)var s=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i,""),l=s[1],d=s[2],u=s[3];return new p({functionName:a,args:n||void 0,fileName:l,lineNumber:d||void 0,columnNumber:u||void 0})},"StackFrame$$fromString");for(b=0;b<w.length;b++)p.prototype["get"+h(w[b])]=P(w[b]),p.prototype["set"+h(w[b])]=function(e){return function(t){this[e]=!!t}}(w[b]);var b;for(v=0;v<N.length;v++)p.prototype["get"+h(N[v])]=P(N[v]),p.prototype["set"+h(N[v])]=function(e){return function(t){if(!Z(t))throw new TypeError(e+" must be a Number");this[e]=Number(t)}}(N[v]);var v;for(E=0;E<_.length;E++)p.prototype["get"+h(_[E])]=P(_[E]),p.prototype["set"+h(_[E])]=function(e){return function(t){this[e]=String(t)}}(_[E]);var E,x=p;function ne(){var e=/^\s*at .*(\S+:\d+|\(native\))/m,t=/^(eval@)?(\[native code])?$/;return{parse:c(function(r){if(r.stack&&r.stack.match(e))return this.parseV8OrIE(r);if(r.stack)return this.parseFFOrSafari(r);throw new Error("Cannot parse given Error object")},"ErrorStackParser$$parse"),extractLocation:c(function(r){if(r.indexOf(":")===-1)return[r];var a=/(.+?)(?::(\d+))?(?::(\d+))?$/,n=a.exec(r.replace(/[()]/g,""));return[n[1],n[2]||void 0,n[3]||void 0]},"ErrorStackParser$$extractLocation"),parseV8OrIE:c(function(r){var a=r.stack.split(`
`).filter(function(n){return!!n.match(e)},this);return a.map(function(n){n.indexOf("(eval ")>-1&&(n=n.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(,.*$)/g,""));var i=n.replace(/^\s+/,"").replace(/\(eval code/g,"(").replace(/^.*?\s+/,""),s=i.match(/ (\(.+\)$)/);i=s?i.replace(s[0],""):i;var l=this.extractLocation(s?s[1]:i),d=s&&i||void 0,u=["eval","<anonymous>"].indexOf(l[0])>-1?void 0:l[0];return new x({functionName:d,fileName:u,lineNumber:l[1],columnNumber:l[2],source:n})},this)},"ErrorStackParser$$parseV8OrIE"),parseFFOrSafari:c(function(r){var a=r.stack.split(`
`).filter(function(n){return!n.match(t)},this);return a.map(function(n){if(n.indexOf(" > eval")>-1&&(n=n.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),n.indexOf("@")===-1&&n.indexOf(":")===-1)return new x({functionName:n});var i=/((.*".+"[^@]*)?[^@]*)(?:@)/,s=n.match(i),l=s&&s[1]?s[1]:void 0,d=this.extractLocation(n.replace(i,""));return new x({functionName:l,fileName:d[0],lineNumber:d[1],columnNumber:d[2],source:n})},this)},"ErrorStackParser$$parseFFOrSafari")}}c(ne,"ErrorStackParser");var re=new ne;var M=re;var g=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&typeof process.browser>"u",A=g&&typeof module<"u"&&typeof module.exports<"u"&&typeof O<"u"&&typeof __dirname<"u",W=g&&!A,ie=typeof Deno<"u",B=!g&&!ie,$=B&&typeof window=="object"&&typeof document=="object"&&typeof document.createElement=="function"&&typeof sessionStorage=="object"&&typeof importScripts!="function",j=B&&typeof importScripts=="function"&&typeof self=="object",Ne=typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome")==-1&&navigator.userAgent.indexOf("Safari")>-1;var z,L,V,H,D;async function T(){if(!g||(z=(await import("node:url")).default,H=await import("node:fs"),D=await import("node:fs/promises"),V=(await import("node:vm")).default,L=await import("node:path"),U=L.sep,typeof O<"u"))return;let e=H,t=await import("node:crypto"),o=await import("ws"),r=await import("node:child_process"),a={fs:e,crypto:t,ws:o,child_process:r};globalThis.require=function(n){return a[n]}}c(T,"initNodeModules");function oe(e,t){return L.resolve(t||".",e)}c(oe,"node_resolvePath");function ae(e,t){return t===void 0&&(t=location),new URL(e,t).toString()}c(ae,"browser_resolvePath");var k;g?k=oe:k=ae;var U;g||(U="/");function se(e,t){return e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?{response:fetch(e)}:{binary:D.readFile(e).then(o=>new Uint8Array(o.buffer,o.byteOffset,o.byteLength))}}c(se,"node_getBinaryResponse");function ce(e,t){let o=new URL(e,location);return{response:fetch(o,t?{integrity:t}:{})}}c(ce,"browser_getBinaryResponse");var R;g?R=se:R=ce;async function q(e,t){let{response:o,binary:r}=R(e,t);if(r)return r;let a=await o;if(!a.ok)throw new Error(`Failed to load '${e}': request failed.`);return new Uint8Array(await a.arrayBuffer())}c(q,"loadBinaryFile");var F;if($)F=c(async e=>await import(e),"loadScript");else if(j)F=c(async e=>{try{globalThis.importScripts(e)}catch(t){if(t instanceof TypeError)await import(e);else throw t}},"loadScript");else if(g)F=le;else throw new Error("Cannot determine runtime environment");async function le(e){e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")?V.runInThisContext(await(await fetch(e)).text()):await import(z.pathToFileURL(e).href)}c(le,"nodeLoadScript");async function J(e){if(g){await T();let t=await D.readFile(e,{encoding:"utf8"});return JSON.parse(t)}else return await(await fetch(e)).json()}c(J,"loadLockFile");async function K(){if(A)return __dirname;let e;try{throw new Error}catch(r){e=r}let t=M.parse(e)[0].fileName;if(W){let r=await import("node:path");return(await import("node:url")).fileURLToPath(r.dirname(t))}let o=t.lastIndexOf(U);if(o===-1)throw new Error("Could not extract indexURL path from pyodide module location");return t.slice(0,o)}c(K,"calculateDirname");function Y(e){let t=e.FS,o=e.FS.filesystems.MEMFS,r=e.PATH,a={DIR_MODE:16895,FILE_MODE:33279,mount:function(n){if(!n.opts.fileSystemHandle)throw new Error("opts.fileSystemHandle is required");return o.mount.apply(null,arguments)},syncfs:async(n,i,s)=>{try{let l=a.getLocalSet(n),d=await a.getRemoteSet(n),u=i?d:l,m=i?l:d;await a.reconcile(n,u,m),s(null)}catch(l){s(l)}},getLocalSet:n=>{let i=Object.create(null);function s(u){return u!=="."&&u!==".."}c(s,"isRealDir");function l(u){return m=>r.join2(u,m)}c(l,"toAbsolute");let d=t.readdir(n.mountpoint).filter(s).map(l(n.mountpoint));for(;d.length;){let u=d.pop(),m=t.stat(u);t.isDir(m.mode)&&d.push.apply(d,t.readdir(u).filter(s).map(l(u))),i[u]={timestamp:m.mtime,mode:m.mode}}return{type:"local",entries:i}},getRemoteSet:async n=>{let i=Object.create(null),s=await de(n.opts.fileSystemHandle);for(let[l,d]of s)l!=="."&&(i[r.join2(n.mountpoint,l)]={timestamp:d.kind==="file"?(await d.getFile()).lastModifiedDate:new Date,mode:d.kind==="file"?a.FILE_MODE:a.DIR_MODE});return{type:"remote",entries:i,handles:s}},loadLocalEntry:n=>{let s=t.lookupPath(n).node,l=t.stat(n);if(t.isDir(l.mode))return{timestamp:l.mtime,mode:l.mode};if(t.isFile(l.mode))return s.contents=o.getFileDataAsTypedArray(s),{timestamp:l.mtime,mode:l.mode,contents:s.contents};throw new Error("node type not supported")},storeLocalEntry:(n,i)=>{if(t.isDir(i.mode))t.mkdirTree(n,i.mode);else if(t.isFile(i.mode))t.writeFile(n,i.contents,{canOwn:!0});else throw new Error("node type not supported");t.chmod(n,i.mode),t.utime(n,i.timestamp,i.timestamp)},removeLocalEntry:n=>{var i=t.stat(n);t.isDir(i.mode)?t.rmdir(n):t.isFile(i.mode)&&t.unlink(n)},loadRemoteEntry:async n=>{if(n.kind==="file"){let i=await n.getFile();return{contents:new Uint8Array(await i.arrayBuffer()),mode:a.FILE_MODE,timestamp:i.lastModifiedDate}}else{if(n.kind==="directory")return{mode:a.DIR_MODE,timestamp:new Date};throw new Error("unknown kind: "+n.kind)}},storeRemoteEntry:async(n,i,s)=>{let l=n.get(r.dirname(i)),d=t.isFile(s.mode)?await l.getFileHandle(r.basename(i),{create:!0}):await l.getDirectoryHandle(r.basename(i),{create:!0});if(d.kind==="file"){let u=await d.createWritable();await u.write(s.contents),await u.close()}n.set(i,d)},removeRemoteEntry:async(n,i)=>{await n.get(r.dirname(i)).removeEntry(r.basename(i)),n.delete(i)},reconcile:async(n,i,s)=>{let l=0,d=[];Object.keys(i.entries).forEach(function(f){let y=i.entries[f],S=s.entries[f];(!S||t.isFile(y.mode)&&y.timestamp.getTime()>S.timestamp.getTime())&&(d.push(f),l++)}),d.sort();let u=[];if(Object.keys(s.entries).forEach(function(f){i.entries[f]||(u.push(f),l++)}),u.sort().reverse(),!l)return;let m=i.type==="remote"?i.handles:s.handles;for(let f of d){let y=r.normalize(f.replace(n.mountpoint,"/")).substring(1);if(s.type==="local"){let S=m.get(y),X=await a.loadRemoteEntry(S);a.storeLocalEntry(f,X)}else{let S=a.loadLocalEntry(f);await a.storeRemoteEntry(m,y,S)}}for(let f of u)if(s.type==="local")a.removeLocalEntry(f);else{let y=r.normalize(f.replace(n.mountpoint,"/")).substring(1);await a.removeRemoteEntry(m,y)}}};e.FS.filesystems.NATIVEFS_ASYNC=a}c(Y,"initializeNativeFS");var de=c(async e=>{let t=[];async function o(a){for await(let n of a.values())t.push(n),n.kind==="directory"&&await o(n)}c(o,"collect"),await o(e);let r=new Map;r.set(".",e);for(let a of t){let n=(await e.resolve(a)).join("/");r.set(n,a)}return r},"getFsHandles");function G(e){let t={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preRun:ge(e),quit(o,r){throw t.exited={status:o,toThrow:r},r},print:e.stdout,printErr:e.stderr,arguments:e.args,API:{config:e},locateFile:o=>e.indexURL+o,instantiateWasm:ye(e.indexURL)};return t}c(G,"createSettings");function ue(e){return function(t){let o="/";try{t.FS.mkdirTree(e)}catch(r){console.error(`Error occurred while making a home directory '${e}':`),console.error(r),console.error(`Using '${o}' for a home directory instead`),e=o}t.FS.chdir(e)}}c(ue,"createHomeDirectory");function fe(e){return function(t){Object.assign(t.ENV,e)}}c(fe,"setEnvironment");function me(e){return t=>{for(let o of e)t.FS.mkdirTree(o),t.FS.mount(t.FS.filesystems.NODEFS,{root:o},o)}}c(me,"mountLocalDirectories");function pe(e){let t=q(e);return o=>{let r=o._py_version_major(),a=o._py_version_minor();o.FS.mkdirTree("/lib"),o.FS.mkdirTree(`/lib/python${r}.${a}/site-packages`),o.addRunDependency("install-stdlib"),t.then(n=>{o.FS.writeFile(`/lib/python${r}${a}.zip`,n)}).catch(n=>{console.error("Error occurred while installing the standard library:"),console.error(n)}).finally(()=>{o.removeRunDependency("install-stdlib")})}}c(pe,"installStdlib");function ge(e){let t;return e.stdLibURL!=null?t=e.stdLibURL:t=e.indexURL+"python_stdlib.zip",[pe(t),ue(e.env.HOME),fe(e.env),me(e._node_mounts),Y]}c(ge,"getFileSystemInitializationFuncs");function ye(e){let{binary:t,response:o}=R(e+"pyodide.asm.wasm");return function(r,a){return async function(){try{let n;o?n=await WebAssembly.instantiateStreaming(o,r):n=await WebAssembly.instantiate(await t,r);let{instance:i,module:s}=n;typeof WasmOffsetConverter<"u"&&(wasmOffsetConverter=new WasmOffsetConverter(wasmBinary,s)),a(i,s)}catch(n){console.warn("wasm instantiation failed!"),console.warn(n)}}(),{}}}c(ye,"getInstantiateWasmFunc");var C="0.27.0.dev0";async function Be(e={}){var u,m;await T();let t=e.indexURL||await K();t=k(t),t.endsWith("/")||(t+="/"),e.indexURL=t;let o={fullStdLib:!1,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,lockFileURL:t+"pyodide-lock.json",args:[],_node_mounts:[],env:{},packageCacheDir:t,packages:[],enableRunUntilComplete:!1},r=Object.assign(o,e);(u=r.env).HOME??(u.HOME="/home/pyodide"),(m=r.env).PYTHONINSPECT??(m.PYTHONINSPECT="1");let a=G(r),n=a.API;if(n.lockFilePromise=J(r.lockFileURL),typeof _createPyodideModule!="function"){let f=`${r.indexURL}pyodide.asm.js`;await F(f)}let i;if(e._loadSnapshot){let f=await e._loadSnapshot;ArrayBuffer.isView(f)?i=f:i=new Uint8Array(f),a.noInitialRun=!0,a.INITIAL_MEMORY=i.length}let s=await _createPyodideModule(a);if(a.exited)throw a.exited.toThrow;if(e.pyproxyToStringRepr&&n.setPyProxyToStringMethod(!0),n.version!==C)throw new Error(`Pyodide version does not match: '${C}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`);s.locateFile=f=>{throw new Error("Didn't expect to load any more file_packager files!")};let l;i&&(l=n.restoreSnapshot(i));let d=n.finalizeBootstrap(l);return n.sys.path.insert(0,n.config.env.HOME),d.version.includes("dev")||n.setCdnUrl(`https://cdn.jsdelivr.net/pyodide/v${d.version}/full/`),n._pyodide.set_excepthook(),await n.packageIndexReady,n.initializeStreams(r.stdin,r.stdout,r.stderr),d}c(Be,"loadPyodide");export{Be as loadPyodide,C as version};
//# sourceMappingURL=pyodide.mjs.map
