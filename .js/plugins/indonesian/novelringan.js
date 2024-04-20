"use strict";var e=this&&this.__awaiter||function(e,l,a,t){return new(a||(a=Promise))((function(n,i){function r(e){try{u(t.next(e))}catch(e){i(e)}}function o(e){try{u(t.throw(e))}catch(e){i(e)}}function u(e){var l;e.done?n(e.value):(l=e.value,l instanceof a?l:new a((function(e){e(l)}))).then(r,o)}u((t=t.apply(e,l||[])).next())}))},l=this&&this.__generator||function(e,l){var a,t,n,i,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(u){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(r=0)),r;)try{if(a=1,t&&(n=2&o[0]?t.return:o[0]?t.throw||((n=t.return)&&n.call(t),0):t.next)&&!(n=n.call(t,o[1])).done)return n;switch(t=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return r.label++,{value:o[1],done:0};case 5:r.label++,t=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(n=r.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){r.label=o[1];break}if(6===o[0]&&r.label<n[1]){r.label=n[1],n=o;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(o);break}n[2]&&r.ops.pop(),r.trys.pop();continue}o=l.call(e,r)}catch(e){o=[6,e],t=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:1}}([o,u])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("cheerio"),t=require("@libs/fetch"),n=require("@libs/filterInputs"),i=function(){function i(){this.id="novelringan.com",this.name="NovelRingan",this.icon="src/id/novelringan/icon.png",this.site="https://novelringan.com/",this.version="1.0.0",this.coverUriPrefix="https://i0.wp.com/novelringan.com/wp-content/uploads/",this.filters={status:{value:"",label:"Status",options:[{label:"All",value:""},{label:"Ongoing",value:"Ongoing"},{label:"Completed",value:"Completed"}],type:n.FilterTypes.Picker},sort:{value:"popular",label:"Urutkan",options:[{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Terbarui",value:"update"},{label:"Ditambahkan",value:"latest"},{label:"Terpopuler",value:"popular"}],type:n.FilterTypes.Picker},type:{value:[],label:"Tipe",options:[{label:"Chinese Novel",value:"chinese-novel"},{label:"Chinese Web Novel",value:"chinese-web-novel"},{label:"Filipino Novel",value:"filipino-novel"},{label:"Indonesia Novel",value:"indonesia-novel"},{label:"Korean Novel",value:"korean-novel"},{label:"Light Novel",value:"light-novel"},{label:"Light Novel (CN)",value:"light-novel-cn"},{label:"Light Novel (JP)",value:"light-novel-jp"},{label:"Light Novel (KR)",value:"light-novel-kr"},{label:"Malaysian Novel",value:"malaysian-novel"},{label:"Published Novel (CN)",value:"published-novel-cn"},{label:"Published Novel (JP)",value:"published-novel-jp"},{label:"Published Novel (KR)",value:"published-novel-kr"},{label:"Published Novel (TH)",value:"published-novel-th"},{label:"Thai Novel",value:"thai-novel"},{label:"Vietnamese Novel",value:"vietnamese-novel"},{label:"Web Novel",value:"web-novel"},{label:"Webnovel",value:"webnovel"}],type:n.FilterTypes.CheckboxGroup},genre:{value:[],label:"Genres",options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Celebrity",value:"celebrity"},{label:"Comedy",value:"comedy"},{label:"ction",value:"ction"},{label:"Drama",value:"drama"},{label:"Eastern",value:"eastern"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Game",value:"game"},{label:"Games",value:"games"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"Isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"Life",value:"life"},{label:"LitRPG",value:"litrpg"},{label:"Magical Realism",value:"magical-realism"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Mecha",value:"mecha"},{label:"Mystery",value:"mystery"},{label:"Psychologic",value:"psychologic"},{label:"Psychological",value:"psychological"},{label:"Recarnation",value:"recarnation"},{label:"Reincarnation",value:"reincarnation"},{label:"Romance",value:"romance"},{label:"School",value:"school"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shotacon",value:"shotacon"},{label:"Shoujo",value:"shoujo"},{label:"Shoujo Ai",value:"shoujo-ai"},{label:"Shounen",value:"shounen"},{label:"Shounen Ai",value:"shounen-ai"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"},{label:"Urban",value:"urban"},{label:"Urban Life",value:"urban-life"},{label:"ve names:N/A Genre:Romance",value:"ve-namesn-a-genreromance"},{label:"Wuxia",value:"wuxia"},{label:"Xianxia",value:"xianxia"},{label:"Xuanhuan",value:"xuanhuan"},{label:"Yaoi",value:"yaoi"},{label:"Yuri",value:"yuri"}],type:n.FilterTypes.CheckboxGroup}}}return i.prototype.parseNovels=function(e){var l=this,a=[];return e("article.post").each((function(t,n){var i,r=null===(i=e(n).find(".entry-title").text())||void 0===i?void 0:i.trim(),o=l.coverUriPrefix+e(n).find("img").attr("data-sxrx"),u=e(n).find("h2 > a").attr("href");if(u){var s={name:r,cover:o,path:u.replace(l.site,"")};a.push(s)}})),a},i.prototype.popularNovels=function(n,i){var r=i.filters;return e(this,void 0,void 0,(function(){var e,i,o;return l(this,(function(l){switch(l.label){case 0:return e="".concat(this.site,"advanced-search/page/").concat(n,"/?title"),e+="&status=".concat(r.status.value),e+="&order=".concat(r.sort.value),r.type.value.length&&(e+=r.type.value.map((function(e){return"&type[]=".concat(e)})).join("")),r.genre.value.length&&(e+=r.genre.value.map((function(e){return"&genre[]=".concat(e)})).join("")),[4,(0,t.fetchApi)(e)];case 1:return[4,l.sent().text()];case 2:return i=l.sent(),o=(0,a.load)(i),[2,this.parseNovels(o)]}}))}))},i.prototype.parseNovel=function(n){var i;return e(this,void 0,void 0,(function(){var e,r,o,u,s,v=this;return l(this,(function(l){switch(l.label){case 0:return[4,(0,t.fetchApi)(this.site+n)];case 1:return[4,l.sent().text()];case 2:return e=l.sent(),r=(0,a.load)(e),o=Array.from((null===(i=r("meta[name=msapplication-TileImage] + style").html())||void 0===i?void 0:i.matchAll(/"(.*?)"/g))||[],(function(e){return e[1]})),(u={path:n,name:o[0]||r(".entry-title").text()||"Untitled",author:o[1],summary:r(".maininfo span p").text(),chapters:[]}).cover=this.coverUriPrefix+r("img.ts-post-image").attr("data-sxrx"),r(".maininfo li").each((function(){var e=r(this).find("b").text().trim(),l=r(this).find("b").remove().end().text().trim();switch(e){case"Status:":u.status=l;break;case"Genre:":u.genres=l}})),s=[],r(".bxcl > ul > li").each((function(e,l){var a=r(l).find("a").text(),t=r(l).find("a").attr("href");t&&s.push({name:a,path:t.replace(v.site,"")})})),u.chapters=s.reverse(),[2,u]}}))}))},i.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,i,r;return l(this,(function(l){switch(l.label){case 0:return e=this.site+n,[4,(0,t.fetchApi)(e)];case 1:return[4,l.sent().text()];case 2:return i=l.sent(),(r=(0,a.load)(i))('.entry-content div[style="display:none"]').remove(),[2,r(".entry-content").html()||""]}}))}))},i.prototype.searchNovels=function(n,i){return e(this,void 0,void 0,(function(){var e,r,o;return l(this,(function(l){switch(l.label){case 0:return e=this.site+"page/"+i+"/?s="+n,[4,(0,t.fetchApi)(e)];case 1:return[4,l.sent().text()];case 2:return r=l.sent(),o=(0,a.load)(r),[2,this.parseNovels(o)]}}))}))},i.prototype.fetchImage=function(a){return e(this,void 0,void 0,(function(){return l(this,(function(e){return[2,(0,t.fetchFile)(a)]}))}))},i}();exports.default=new i;