"use strict";var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(n,l){function i(e){try{s(r.next(e))}catch(e){l(e)}}function o(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,o)}s((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,n,l,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(s){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(i=0)),i;)try{if(a=1,r&&(n=2&o[0]?r.return:o[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,o[1])).done)return n;switch(r=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return i.label++,{value:o[1],done:0};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){i.label=o[1];break}if(6===o[0]&&i.label<n[1]){i.label=n[1],n=o;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(o);break}n[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{a=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:1}}([o,s])}}},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:1});var r=require("@libs/fetch"),n=require("cheerio"),l=require("@libs/defaultCover"),i=require("@libs/novelStatus"),o=a(require("dayjs")),s=function(e,t){return new RegExp(t.join("|")).test(e)},u=new(function(){function a(e){var t;this.fetchImage=r.fetchFile,this.parseData=function(e){var t,a=(0,o.default)(),r=(null===(t=e.match(/\d+/))||void 0===t?void 0:t[0])||"",n=parseInt(r,10);if(!r)return e;if(s(e,["detik","segundo","second","วินาที"]))a.subtract(n,"second");else if(s(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))a.subtract(n,"minute");else if(s(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))a.subtract(n,"hours");else if(s(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))a.subtract(n,"days");else if(s(e,["week","semana"]))a.subtract(n,"week");else if(s(e,["month","mes"]))a.subtract(n,"month");else{if(!s(e,["year","año"]))return e;a.subtract(n,"year")}return a.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),".png"),this.site=e.sourceSite;var a=(null===(t=e.options)||void 0===t?void 0:t.versionIncrements)||0;this.version="1.0.".concat(1+a),this.options=e.options,this.filters=e.filters}return a.prototype.getHostname=function(e){return e.split("/")[2]},a.prototype.getCheerio=function(a){return e(this,void 0,void 0,(function(){var e,l,i,o;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(a)];case 1:if(!(e=t.sent()).ok)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return i=n.load,[4,e.text()];case 2:if(l=i.apply(void 0,[t.sent()]),o=l("title").text().trim(),this.getHostname(a)!=this.getHostname(e.url)||"Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o)throw new Error("Captcha error, please open in webview");return[2,l]}}))}))},a.prototype.parseNovels=function(e){var t=this,a=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(r,n){var l=e(n).find(".post-title").text().trim(),i=e(n).find(".post-title").find("a").attr("href")||"";if(l&&i){var o=e(n).find("img"),s={name:l,cover:o.attr("data-src")||o.attr("src"),path:i.replace(t.site,"")};a.push(s)}})),a},a.prototype.popularNovels=function(a,r){var n=r.filters,l=r.showLatestNovels;return e(this,void 0,void 0,(function(){var e,r,i,o,s,u;return t(this,(function(t){switch(t.label){case 0:for(r in e=this.site+"/page/"+a+"/?s=&post_type=wp-manga",n||(n={}),l&&(e+="&m_orderby=latest"),n)if("object"==typeof n[r].value)for(i=0,o=n[r].value;i<o.length;i++)s=o[i],e+="&".concat(r,"=").concat(s);else n[r].value&&(e+="&".concat(r,"=").concat(n[r].value));return[4,this.getCheerio(e)];case 1:return u=t.sent(),[2,this.parseNovels(u)]}}))}))},a.prototype.parseNovel=function(a){var s;return e(this,void 0,void 0,(function(){var e,u,c,h,v,p,m,d,b=this;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=t.sent(),(u=(0,n.load)(e))(".manga-title-badges, #manga-title span").remove(),(c={path:a,name:u(".post-title h1").text().trim()||u("#manga-title h1").text()}).cover=u(".summary_image > a > img").attr("data-lazy-src")||u(".summary_image > a > img").attr("data-src")||u(".summary_image > a > img").attr("src")||u(".summary_image > a > img").attr("src")||l.defaultCover,u(".post-content_item, .post-content").each((function(){var e=u(this).find("h5").text().trim(),t=u(this).find(".summary-content").text().trim();switch(e){case"Genre(s)":case"Género(s)":case"التصنيفات":c.genres=t;break;case"Author(s)":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":c.author=t;break;case"Status":case"Estado":c.status=t.includes("OnGoing")||t.includes("مستمرة")?i.NovelStatus.Ongoing:i.NovelStatus.Completed}})),u("div.summary__content .code-block,script").remove(),c.summary=u("div.summary__content").text().trim()||u("#tab-manga-about").text().trim()||u('.post-content_item h5:contains("Summary")').next().text().trim(),h=[],v="",(null===(s=this.options)||void 0===s?void 0:s.useNewChapterEndpoint)?[4,(0,r.fetchApi)(this.site+a+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return v=t.sent(),[3,5];case 3:return p=u(".rating-post-id").attr("value")||u("#manga-chapters-holder").attr("data-id")||"",(m=new FormData).append("action","manga_get_chapters"),m.append("manga",p),[4,(0,r.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:m}).then((function(e){return e.text()}))];case 4:v=t.sent(),t.label=5;case 5:return"0"!==v&&(u=(0,n.load)(v)),d=u(".wp-manga-chapter").length,u(".wp-manga-chapter").each((function(e,t){var a=u(t).find("a").text().trim(),r=u(t).find("span.chapter-release-date").text().trim();r=r?b.parseData(r):(0,o.default)().format("LL");var n=u(t).find("a").attr("href")||"";h.push({name:a,path:n.replace(b.site,""),releaseTime:r||null,chapterNumber:d-e})})),c.chapters=h.reverse(),[2,c]}}))}))},a.prototype.parseChapter=function(a){return e(this,void 0,void 0,(function(){var e,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(this.site+a).then((function(e){return e.text()}))];case 1:return e=t.sent(),l=(0,n.load)(e),[2,l(".text-left").html()||l(".text-right").html()||l(".entry-content").html()||l(".c-blog-post > div > div:nth-child(2)").html()||""]}}))}))},a.prototype.searchNovels=function(a,r){return e(this,void 0,void 0,(function(){var e,n;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+r+"/?s="+a+"&post_type=wp-manga",[4,this.getCheerio(e)];case 1:return n=t.sent(),[2,this.parseNovels(n)]}}))}))},a}())({id:"sleeptTLS",sourceSite:"https://sleepytranslations.com/",sourceName:"SleepyTranslations",options:{useNewChapterEndpoint:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adventure",value:"adventure"},{label:"Angst",value:"angst"},{label:"Child Protagonist",value:"child-protagonist"},{label:"Comedy",value:"comedy"},{label:"Concubine/s",value:"concubine-s"},{label:"Demons",value:"demons"},{label:"Drama",value:"drama"},{label:"Fantasy",value:"fantasy"},{label:"Gender Bender",value:"gender-bender"},{label:"Harem",value:"harem"},{label:"Historical",value:"historical"},{label:"Horror",value:"horror"},{label:"isekai",value:"isekai"},{label:"Josei",value:"josei"},{label:"Magic",value:"magic"},{label:"Martial Arts",value:"martialarts"},{label:"Matriarchy",value:"matriarchy"},{label:"Mature",value:"mature"},{label:"Modern",value:"modern"},{label:"Mystery",value:"mystery"},{label:"Palace",value:"palace"},{label:"Politics",value:"politics"},{label:"Psychological",value:"psychological"},{label:"Reincarnation",value:"reincarnation"},{label:"Reverse Harem",value:"reverse-harem"},{label:"Romance",value:"romance"},{label:"School Life",value:"schoollife"},{label:"Sci-Fi",value:"scifi"},{label:"Shoujo",value:"shoujo"},{label:"Shounen",value:"shounen"},{label:"Slice of Life",value:"sliceoflife"},{label:"Smut",value:"smut"},{label:"Strong Female Lead",value:"strong-female-lead"},{label:"Supernatural",value:"supernatural"},{label:"System",value:"system"},{label:"Tragedy",value:"tragedy"},{label:"Transmigration",value:"transmigration"},{label:"Yaoi",value:"yaoi"}]},op:{type:"Switch",label:"having all selected genres",value:0},author:{type:"Text",label:"Author",value:""},artist:{type:"Text",label:"Artist",value:""},release:{type:"Text",label:"Year of Released",value:""},adult:{type:"Picker",label:"Adult content",value:"",options:[{label:"All",value:""},{label:"None adult content",value:"0"},{label:"Only adult content",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"OnGoing",value:"on-going"},{label:"Completed",value:"end"},{label:"Canceled",value:"canceled"},{label:"On Hold",value:"on-hold"},{label:"Upcoming",value:"upcoming"}]},m_orderby:{type:"Picker",label:"Order by",value:"",options:[{label:"Relevance",value:""},{label:"Latest",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Rating",value:"rating"},{label:"Trending",value:"trending"},{label:"Most Views",value:"views"},{label:"New",value:"new-manga"}]}}});exports.default=u;