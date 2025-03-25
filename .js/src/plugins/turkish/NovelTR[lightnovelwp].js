var e=this&&this.__awaiter||function(e,a,t,l){return new(t||(t=Promise))((function(s,i){function r(e){try{n(l.next(e))}catch(e){i(e)}}function o(e){try{n(l.throw(e))}catch(e){i(e)}}function n(e){var a;e.done?s(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(r,o)}n((l=l.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,l,s,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]},r=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return r.next=o(0),r.throw=o(1),r.return=o(2),"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function o(o){return function(n){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;r&&(r=0,o[0]&&(i=0)),i;)try{if(t=1,l&&(s=2&o[0]?l.return:o[0]?l.throw||((s=l.return)&&s.call(l),0):l.next)&&!(s=s.call(l,o[1])).done)return s;switch(l=0,s&&(o=[2&o[0],s.value]),o[0]){case 0:case 1:s=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,l=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!s||o[1]>s[0]&&o[1]<s[3])){i.label=o[1];break}if(6===o[0]&&i.label<s[1]){i.label=s[1],s=o;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(o);break}s[2]&&i.ops.pop(),i.trys.pop();continue}o=a.call(e,i)}catch(e){o=[6,e],l=0}finally{t=s=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,n])}}};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("cheerio"),l=require("htmlparser2"),s=require("@libs/fetch"),i=require("@libs/novelStatus"),r=require("@libs/defaultCover"),o=require("@libs/storage");function n(e,a){var t=e.match(/(\d+)$/);t&&t[0]&&(a.chapterNumber=parseInt(t[0]))}var u=new(function(){function u(e){var a,t,l;this.hideLocked=o.storage.get("hideLocked"),this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var s=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.1.".concat(7+s),this.options=null!==(t=e.options)&&void 0!==t?t:{},this.filters=e.filters,(null===(l=this.options)||void 0===l?void 0:l.hasLocked)&&(this.pluginSettings={hideLocked:{value:"",label:"Hide locked chapters",type:"Switch"}})}return u.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},u.prototype.safeFecth=function(t,l){return e(this,void 0,void 0,(function(){var e,i,r,o,n,u,c,v;return a(this,(function(a){switch(a.label){case 0:return e=t.split("://"),i=e.shift(),r=e[0].replace(/\/\//g,"/"),[4,(0,s.fetchApi)(i+"://"+r)];case 1:if(!(o=a.sent()).ok&&1!=l)throw new Error("Could not reach site ("+o.status+") try to open in webview.");return[4,o.text()];case 2:if(n=a.sent(),u=null===(v=null===(c=n.match(/<title>(.*?)<\/title>/))||void 0===c?void 0:c[1])||void 0===v?void 0:v.trim(),this.getHostname(t)!=this.getHostname(o.url)||u&&("Bot Verification"==u||"You are being redirected..."==u||"Un instant..."==u||"Just a moment..."==u||"Redirecting..."==u))throw new Error("Captcha error, please open in webview (or the website has changed url)");return[2,n]}}))}))},u.prototype.parseNovels=function(e){var a=this;e=(0,t.load)(e).html();var l=[];return(e.match(/<article([^]*?)<\/article>/g)||[]).forEach((function(e){var t=e.match(/<a href="([^\"]*)".*? title="([^\"]*)"/)||[],s=t[1],i=t[2];if(i&&s){var o=e.match(/<img [^>]*?src="([^\"]*)"[^>]*?(?: data-src="([^\"]*)")?[^>]*>/)||[],n=void 0;if(s.includes(a.site))n=s.replace(a.site,"");else{var u=s.split("/");u.shift(),u.shift(),u.shift(),n=u.join("/")}l.push({name:i,cover:o[2]||o[1]||r.defaultCover,path:n})}})),l},u.prototype.popularNovels=function(t,l){return e(this,arguments,void 0,(function(e,t){var l,s,i,r,o,n,u,c,v,h=t.filters,p=t.showLatestNovels;return a(this,(function(a){switch(a.label){case 0:for(i in l=null!==(v=null===(c=this.options)||void 0===c?void 0:c.seriesPath)&&void 0!==v?v:"/series/",s=this.site+l+"?page="+e,h||(h=this.filters||{}),p&&(s+="&order=latest"),h)if("object"==typeof h[i].value)for(r=0,o=h[i].value;r<o.length;r++)n=o[r],s+="&".concat(i,"=").concat(n);else h[i].value&&(s+="&".concat(i,"=").concat(h[i].value));return[4,this.safeFecth(s,!1)];case 1:return u=a.sent(),[2,this.parseNovels(u)]}}))}))},u.prototype.parseNovel=function(t){return e(this,void 0,void 0,(function(){var e,s,o,u,c,v,h,p,d,f,b,m,y,g,k,w,x,S,N,C,j;return a(this,(function(a){switch(a.label){case 0:return e=this.site,[4,this.safeFecth(e+t,!1)];case 1:return s=a.sent(),o={path:t,name:"",genres:"",summary:"",author:"",artist:"",status:"",chapters:[]},u=!1,c=!1,v=0,h=!1,p=!1,d=!1,f=!1,b=!1,m=!1,y=!1,g=0,k=!1,w=!1,x=[],S={},N=this.hideLocked,C=new l.Parser({onopentag:function(a,t){var l;!o.cover&&(null===(l=t.class)||void 0===l?void 0:l.includes("ts-post-image"))?(o.name=t.title,o.cover=t["data-src"]||t.src||r.defaultCover):"genxed"===t.class||"sertogenre"===t.class?u=!0:u&&"a"===a?c=!0:"div"!==a||"entry-content"!==t.class&&"description"!==t.itemprop?"spe"===t.class||"serl"===t.class?h=!0:h&&"span"===a?p=!0:"div"===a&&"sertostat"===t.class?(h=!0,p=!0,b=!0):t.class&&t.class.includes("eplister")?m=!0:m&&"li"===a?y=!0:y?"a"===a&&void 0===S.path?S.path=t.href.replace(e,"").trim():"epl-num"===t.class?g=1:"epl-title"===t.class?g=2:"epl-date"===t.class?g=3:"epl-price"===t.class&&(g=4):v&&"div"===a&&v++:v++},ontext:function(e){var a,t;if(u)c&&(o.genres+=e+", ");else if(1===v)o.summary+=e.trim();else if(h){if(p){var l=e.toLowerCase().replace(":","").trim();if(d)o.author+=e||"Unknown";else if(f)o.artist+=e||"Unknown";else if(b)switch(l){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":o.status=i.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":o.status=i.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":o.status=i.NovelStatus.OnHiatus;break;default:o.status=i.NovelStatus.Unknown}switch(l){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":d=!0;break;case"الحالة":case"status":case"statut":case"estado":case"durum":b=!0;break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":f=!0}}}else if(m&&y)if(1===g)e.includes("🔒")?(k=!0,w=!0):w&&(k=!1),n(e,S);else if(2===g)S.name=(null===(t=null===(a=e.match(RegExp("^".concat(o.name.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"\\s*(.+)"))))||void 0===a?void 0:a[1])||void 0===t?void 0:t.trim())||e.trim(),S.chapterNumber||n(e,S);else if(3===g)S.releaseTime=e;else if(4===g){switch(l=e.toLowerCase().trim()){case"free":case"gratuit":case"مجاني":case"livre":case"":k=!1;break;default:k=!0}}},onclosetag:function(e){var a,t,l;u?c?c=!1:(u=!1,o.genres=null===(a=o.genres)||void 0===a?void 0:a.slice(0,-2)):v?"br"===e?o.summary+="\n":"div"===e&&v--:h?p?"span"===e&&(p=!1,d&&o.author?d=!1:f&&o.artist?f=!1:b&&""!==o.status&&(b=!1)):"div"===e&&(h=!1,o.author=null===(t=o.author)||void 0===t?void 0:t.trim(),o.artist=null===(l=o.artist)||void 0===l?void 0:l.trim()):m&&(y?1===g||2===g||3===g||4===g?g=0:"li"===e&&(y=!1,S.chapterNumber||(S.chapterNumber=0),k&&(S.name="🔒 "+S.name),N&&k||x.push(S),S={}):"ul"===e&&(m=!1))}}),C.write(s),C.end(),x.length&&((null===(j=this.options)||void 0===j?void 0:j.reverseChapters)&&x.reverse(),o.chapters=x),[2,o]}}))}))},u.prototype.parseChapter=function(l){return e(this,void 0,void 0,(function(){var e,s,i,r,o;return a(this,(function(a){switch(a.label){case 0:return[4,this.safeFecth(this.site+l,!1)];case 1:if(e=a.sent(),null===(i=this.options)||void 0===i?void 0:i.customJs)try{s=(0,t.load)(e),e=s.html()}catch(e){throw console.error("Error executing customJs:",e),e}return[2,(null===(o=null===(r=e.match(/<div.*?class="epcontent ([^]*?)<div.*?class="?bottomnav/g))||void 0===r?void 0:r[0].match(/<p[^>]*>([^]*?)<\/p>/g))||void 0===o?void 0:o.join("\n"))||""]}}))}))},u.prototype.searchNovels=function(t,l){return e(this,void 0,void 0,(function(){var e,s;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"page/"+l+"/?s="+encodeURIComponent(t),[4,this.safeFecth(e,!0)];case 1:return s=a.sent(),[2,this.parseNovels(s)]}}))}))},u}())({id:"noveltr",sourceSite:"https://noveltr.com/",sourceName:"NovelTR",options:{lang:"Turkish"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Aksiyon",value:"aksiyon"},{label:"Bilim Kurgu",value:"bilim-kurgu"},{label:"Büyü",value:"buyu"},{label:"Comedy",value:"comedy"},{label:"Doğaüstü",value:"dogaustu"},{label:"dövüş sanatları",value:"dovus-sanatlari"},{label:"Dram",value:"dram"},{label:"Drama",value:"drama"},{label:"ecchi",value:"ecchi"},{label:"fantastik",value:"fantastik"},{label:"Fantasy",value:"fantasy"},{label:"gizem",value:"gizem"},{label:"Harem",value:"harem"},{label:"isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"Komedi",value:"komedi"},{label:"korku",value:"korku"},{label:"macera",value:"macera"},{label:"Mecha",value:"mecha"},{label:"okul",value:"okul"},{label:"oyun",value:"oyun"},{label:"psikoloji",value:"psikoloji"},{label:"Psychological",value:"psychological"},{label:"reenkarnasyon",value:"reenkarnasyon"},{label:"Romance",value:"romance"},{label:"Romantik",value:"romantik"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"seinen",value:"seinen"},{label:"Shoujo",value:"shoujo"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"süper kahraman",value:"super-kahraman"},{label:"Supernatural",value:"supernatural"},{label:"tarih",value:"tarih"},{label:"trajedi",value:"trajedi"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"yetişkin",value:"yetiskin"},{label:"Yuri",value:"yuri"}]},"type[]":{type:"Checkbox",label:"Tür",value:[],options:[{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Durum",value:"",options:[{label:"Hepsi",value:""},{label:"Devam Ediyor",value:"ongoing"},{label:"Askıda",value:"hiatus"},{label:"Tamamlanmış",value:"completed"}]},order:{type:"Picker",label:"Sıralama",value:"",options:[{label:"Varsayılan",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=u;