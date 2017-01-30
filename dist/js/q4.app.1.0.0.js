/*!
Project:  q4-blank_template
Name:     q4.app.js
Version:  1.0.0
Compiled: 2017-01-30
*/
var q4Defaults={init:function(){},cleanUp:function(){$("#lnkPostback").remove(),$("#litPageDiv > a:first").remove()},unWrapLink:function(a){$(a).replaceWith(function(){return $('<span class="'+a.split(".").pop()+'">'+$(this).html()+"</span>")})},reveal:function(a,b,c){$(a).one("click",b,function(d){d.preventDefault(),$(this).toggleClass(b.split(".").pop()+"--active").closest(a).find(c).toggleClass(c.split(".").pop()+"--revealed")})},cleanQuickLinks:function(a){a.find("ul").attr("class","module-links_list")},moduleNotFound:function(a,b){a.text().trim().length&&b.hide()},confirmationScroll:function(a,b){a.find(b).text().trim().length&&$("html, body").animate({scrollTop:a.offset().top},1e3)},isValidEmailAddress:function(a){var b=/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;return b.test(a)},validateUnsubscribe:function(a){var b=this;a.find('input[type="submit"]').on("click",function(c){b.isValidEmailAddress(a.find('input[id*="Email"]').val())||(a.find(".MailingListUnsubscribeMessage").html("Please enter a valid Email Address"),c.preventDefault())})},validateSubmit:function(a){var b=$(a);b.on("click","input:submit",function(b){return $(this).closest(a).find("input:text").val().length?void 0:!1})},submitOnEnter:function(a){$(a).find('input[type="text"]').removeAttr("onkeypress").on("keydown",function(b){return 13==b.keyCode?(b.preventDefault(),$(this).closest(a).find('input[type="submit"]').trigger("click"),!1):void 0})},_onMenuClose:function(a){$(".LayoutDefaultInner").one("click",function(b){$(b.target).closest(".PaneNavigation").length?a._onMenuClose(a):$(this).removeClass("mobile-toggled")})},_onMobileMenuExpand:function(){$(".mobile-toggled .PaneNavigation nav").on("click","li.has-children > a",function(a){var b=$(this),c=b.parent();c.hasClass("expanded")||(a.preventDefault(),c.siblings().removeClass("expanded"),c.addClass("expanded"))})},onMenuToggle:function(a,b){var c=this;a.on("click",b,function(d){a.toggleClass(b+"--active"),c._onMobileMenuExpand(c),a.hasClass(b+"--active")&&c._onMenuClose(c)})},onMenuExit:function(a){a.on("click",function(){$(".LayoutDefaultInner").triggerHandler("click")})},accessibleNav:function(a,b){a.on("focus ","a",function(a){var c=$(this);c.closest("ul").find("li").removeClass("focused"),c.closest("li").addClass("focused"),c.closest("li").is(":last-child")&&c.closest("ul").is(b)&&c.blur(function(){c.closest(b).find("li").removeClass("focused")})})},accessibilize:function(a,b,c){a.attr("role","tablist"),b.attr("tabindex","0").attr("role","tab").attr("aria-expanded","false"),c.attr("role","tabpanel").hide()},toggle:function(a,b,c,d,e,f){var g=this,h=a.find(b);g.accessibilize(a,a.find(c),a.find(d)),h.on("click keypress",c,function(f){(13==f.which||"click"==f.type)&&(1==e?g._accordionTrigger($(this),a,b,c,d):g._toggleTrigger($(this),a,b,d))}),1==f?g._toggleAll(a,b,c,d):null,h.first().find(c).attr("aria-expanded",!0),h.first().addClass("accordion-active").find(d).show()},_toggleAll:function(a,b,c,d){a.prepend('<div class="accordion-toggle-all"><a href="#all"></a></div>').on("click",".accordion-toggle-all a",function(e){e.preventDefault(),$(this).parent().toggleClass("active"),$(this).parent().is(".active")?(a.find(c).attr("aria-expanded","true"),a.find(b).addClass("accordion-active"),a.find(d).slideDown()):(a.find(c).attr("aria-expanded","false"),a.find(b).removeClass("accordion-active"),a.find(d).slideUp())})},_accordionTrigger:function(a,b,c,d,e){a.closest(c).hasClass("accordion-active")||($(c).removeClass("accordion-active"),b.find(d).attr("aria-expanded",!1),b.find(e).slideUp(),a.attr("aria-expanded",!0),a.closest(c).addClass("accordion-active").find(e).slideDown())},_toggleTrigger:function(a,b,c,d){var e=b.find(".accordion-toggle-all");a.attr("aria-expanded",function(a,b){return"true"==b?"false":"true"}).closest(c).toggleClass("accordion-active").find(d).slideToggle(),b.find(c).not(".accordion-active").length?e.removeClass("active"):e.addClass("active")},remindMeOnce:function(a){a.each(function(){$(this).find(".ReminderError").text().length&&$(this).find(".ModuleReminderContainer").addClass("js-reminded")})},hidePastCal:function(a){var b=new Date;a.each(function(){var a=$(this),c=a.find(".ModuleDate");if(c.text().indexOf("from")>=0){var d=c.text().split("from ").pop().split("to ");b>new Date(d[1])&&a.find(".AddToCalendar").hide()}else b>new Date(c.text())&&a.find(".AddToCalendar").hide()})},_formErrorFormat:function(a){$(a).each(function(){"hidden"==$(this).css("visibility")?$(this).parent().addClass("hidden"):$(this).parent().removeClass("hidden")})},formBuilder:function(a,b){var c=this;if(a.length){var d=a.find(".error-container");a.find(".ItemClass input:radio").closest("table").each(function(){$(this).find("input:radio:first").prop("checked",!0)}),a.find(".ItemClass input:checkbox").closest("table").addClass("checkboxTable").each(function(){$(this).find("input:checkbox:first").parent().hide()}),a.find(".Item").each(function(){var a=$(this).find(".label-wrap .Label").text();$(this).find(".field-wrap input").attr("placeholder",a);var b=$(this).find(".error-wrap span"),c=(b.closest(".ItemClass").attr("class")||"").split(" ")[1];b.addClass(c).appendTo(d).wrap("<li></li>")}),a.find(".CaptchaContainer span").text("Please provide the code").appendTo(d).wrap("<li></li>"),c._formErrorFormat(a.find(".ErrorMessage")),a.find(".SubmitButton").on("click",function(){c._formErrorFormat(a.find(".ErrorMessage"))}),a.find(".SubmitButton").on("click",function(){var a=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,b=d.find(".ItemClassEmail");return a.test($(".Item .ItemClassEmail input:last").val())?($(".Item .ItemClassEmail input:last").val().length>1&&($el.find(".checkboxTable").each(function(){$(this).find("input:checkbox").is(":checked")?$(this).find('input:checkbox:not(":first")').is(":checked")&&$(this).find("input:checkbox:first").prop("checked",!1):$(this).find("input:checkbox:first").prop("checked",!0)}),b.parent().hide(),b.css("visibility","hidden")),!0):(b.parent().show(),b.css("visibility","visible"),!1)})}else c.moduleNotFound($(".MessageSent"),b)},copyright:function(a){a.html((new Date).getFullYear())},docTracking:function(){var a,b,c,d,e,f,g,h;window.hasOwnProperty=window.hasOwnProperty||Object.prototype.hasOwnProperty,window.hasOwnProperty("ga")&&(e="",a=/\.(zip|exe|dmg|pdf|doc.*|xls.*|ppt.*|mp3|mp4|txt|rar|html|wma|mov|avi|wmv|flv|wav)(\?.*)?$/i,b=/^https?:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i,d=/^https?\:\/\//i,c=/.*\.cloudfront\.net$/i,g=window.location.href.match(b),h=g.length>0?g[1]:!1,f=$("base"),f.length>0&&void 0!==f.attr("href")&&(e=f.attr("href")),$("body").on("click","a",function(f){var g,i,j,k,l,m,n;if(g=$(this),j=g.attr("href")||"",!j.match(/^javascript:/i)){if(k=j.match(b),l=null!==k?k[1]:h,m=l===h||c.test(l)||l.toLowerCase().indexOf("q4cdn")>-1,i={value:0,non_i:!1,action:"click",loc:j},j.match(/^mailto\:/i))i.category="email",i.label=j.replace(/^mailto\:/i,"");else if(j.match()&&!m)i.category="external",i.label=j.replace(d,""),i.non_i=!0;else if(null!==(n=j.match(a)))i.category="download",i.action="download",i.label=j.replace(/ /g,"-").replace(d,""),i.loc=(c.test(l)?"":e)+j;else{if(!j.match(/^tel\:/i))return;i.category="telephone",i.action="click",i.label=j.replace(/^tel\:/i,"")}window.ga("send","event",i.category,i.action,i.label.toLowerCase(),i.value,{nonInteraction:i.non_i}),window.ga("Client.send","event",i.category,i.action,i.label.toLowerCase(),i.value,{nonInteraction:i.non_i})}}))}};