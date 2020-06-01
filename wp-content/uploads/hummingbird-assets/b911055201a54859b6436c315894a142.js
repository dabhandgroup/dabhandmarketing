/**handles:astra-addon-js**/
!function(o,i,e){var a="astExtSticky",d=i.document,r=(jQuery(i).outerWidth(),jQuery(i).width()),s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},n=0;function t(e,t){this.element=e,this.options=o.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a=jQuery(e.element);jQuery(i).outerWidth();if(stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(a.parent().attr("data-stick-maxwidth")),gutter=parseInt(a.parent().attr("data-stick-gutter")),"desktop"==e.options.sticky_on_device&&jQuery("body").hasClass("ast-header-break-point"))e.stickRelease(e);else if("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))if(jQuery(i).scrollTop()>stick_upto_scroll){var s=a;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(a.parent().css("min-height",a.outerHeight()),a.addClass("ast-sticky-active").stop().css({"max-width":max_width,top:gutter,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),a.addClass("ast-sticky-shrunk").stop(),o(d).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"slide"==e.options.header_style?(s.css({top:gutter}),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),o("html").addClass("ast-header-stick-slide-active"),o(d).trigger("addStickyClass"),s.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(s.css({top:gutter}),s.addClass("ast-header-fade"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({opacity:"1"}),o("html").addClass("ast-header-stick-fade-active"),o(d).trigger("addStickyClass"),s.addClass("ast-header-sticked"))}else e.stickRelease(e);else e.stickRelease(e)},t.prototype.update_attrs=function(){var e=this,t=jQuery(e.element),a=parseInt(e.options.gutter),s=e.options.max_width;if("none"!=e.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")){if(o("#masthead").length){var i=o("#masthead");d=i.offset().top+i.outerHeight()+100||0}}else var d=t.offset().top||0;"ast-box-layout"!=e.options.site_layout&&(s=jQuery("body").width()),e.options.dependent&&jQuery.each(e.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),a+=parseInt(dependent_height),d-=parseInt(dependent_height))}),e.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<r&&(a+=parseInt(e.options.admin_bar_height_lg),d-=parseInt(e.options.admin_bar_height_lg)),e.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=r&&r<=782&&(a+=parseInt(e.options.admin_bar_height_sm),d-=parseInt(e.options.admin_bar_height_sm)),e.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(a+=parseInt(e.options.admin_bar_height_xs),d-=parseInt(e.options.admin_bar_height_xs)),e.options.body_padding_support&&(a+=parseInt(jQuery("body").css("padding-top"),10),d-=parseInt(jQuery("body").css("padding-top"),10)),e.options.html_padding_support&&(a+=parseInt(jQuery("html").css("padding-top"),10),d-=parseInt(jQuery("html").css("padding-top"),10)),stick_origin_position&&d--,e.options.stick_upto_scroll=d,"none"==e.options.header_style?t.parent().css("min-height",t.outerHeight()).attr("data-stick-gutter",parseInt(a)).attr("data-stick-maxwidth",parseInt(s)):(t.parent().attr("data-stick-gutter",parseInt(a)).attr("data-stick-maxwidth",parseInt(s)),"ast-padded-layout"===e.options.site_layout&&t.css("max-width",parseInt(s)))},t.prototype.hasScrolled=function(e,t){var a=o(i).scrollTop();if(!(Math.abs(n-a)<=5)){var s=jQuery(e.element);n<a&&0<a?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):a+o(i).height()<o(d).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),n=a,o(e.element).hasClass("ast-nav-up")||"stick"!=t?(s.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){s.removeClass("ast-sticky-active")},300),s.css({visibility:"hidden",top:""}),o(d).trigger("removeStickyClass"),o("html").removeClass("ast-header-stick-scroll-active"),s.removeClass("ast-header-sticked")):(s.css({top:gutter}),s.addClass("ast-header-sticked"),s.addClass("ast-header-slide"),s.css("visibility","visible"),s.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),o(d).trigger("addStickyClass"),o("html").addClass("ast-header-stick-scroll-active"))}},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),o(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),o("html").removeClass("ast-header-stick-slide-active"),o(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),o(d).trigger("removeStickyClass"),o("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){if(jQuery(this.element)){var t=this,e=jQuery(t.element);parseInt(t.options.gutter),e.position().top;"none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)):e.wrap(t.options.wrap).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(i).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(i).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(d).ready(function(e){t.stick_me(t)})}},o.fn[a]=function(e){return this.each(function(){o.data(this,"plugin_"+a)||o.data(this,"plugin_"+a,new t(this,e))})};var h=jQuery("body"),l=h.width(),c=astraAddon.stick_header_meta||"default",p=astraAddon.header_main_stick||"",y=astraAddon.header_main_shrink||"",_=astraAddon.header_above_stick||"",m=astraAddon.header_below_stick||"",u=astraAddon.header_main_stick_meta||"",g=astraAddon.header_above_stick_meta||"",k=astraAddon.header_below_stick_meta||"",v=astraAddon.site_layout||"",b=(astraAddon.site_layout_padded_width,astraAddon.site_layout_box_width||1200),f=(astraAddon.site_content_width,astraAddon.sticky_header_on_devices||"desktop"),w=astraAddon.sticky_header_style||"none",j=astraAddon.sticky_hide_on_scroll||"",x=astraAddon.header_logo_width||"",Q=astraAddon.responsive_header_logo_width||"";if(stick_origin_position=astraAddon.stick_origin_position||"","disabled"!=c){if("enabled"===c&&(p=u,_=g,m=k),0<o("header .site-logo-img img").length){var C=o("header .site-logo-img img"),I=C.attr("height");if(void 0===I&&(I=C.height()),0==I&&(I=""),-1===I.toString().indexOf("%")&&(I+="px"),""!=Q.desktop||""!=Q.tablet||""!=Q.mobile)var S="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+Q.desktop+"px; } @media (max-width: 768px) { #masthead .site-logo-img .astra-logo-svg { width: "+Q.tablet+"px; } } @media (max-width: 544px) { #masthead .site-logo-img .astra-logo-svg{ width: "+Q.mobile+"px; } }  #masthead .site-logo-img img { max-height: "+I+"; width: auto; } </style>";else if(""!=x)S="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+x+"px; } #masthead .site-logo-img img { max-height: "+I+"; width: auto; } </style>";o("head").append(S)}if(p||_||m){switch(o(d).on("addStickyClass",function(){var e="";"1"!=p&&"on"!=p||(e+=" ast-primary-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-above-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-below-sticky-header-active"),o("body").addClass(e)}),o(d).on("removeStickyClass",function(){var e="";"1"!=p&&"on"!=p||(e+=" ast-primary-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-above-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-below-sticky-header-active"),o("body").removeClass(e)}),v){case"ast-box-layout":l=parseInt(b)}jQuery(d).ready(function(e){if("1"==j)"1"==y&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=p&&"on"!=p&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:v,sticky_on_device:f,header_style:"slide",hide_on_scroll:j});else if("none"==w)if("1"!=_&&"on"!=_||jQuery("#masthead .ast-above-header").astExtSticky({max_width:l,site_layout:v,sticky_on_device:f,header_style:w,hide_on_scroll:j}),"1"!=p&&"on"!=p||"1"!=m&&"on"!=m){if("1"==p||"on"==p){var t="";y&&(t={padding_top:"",padding_bottom:""}),jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j})}"1"!=m&&"on"!=m||jQuery("body").hasClass("ast-header-break-point")||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:l,site_layout:v,sticky_on_device:f,header_style:w,hide_on_scroll:j})}else jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j});else if(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=p&&"on"!=p&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"==_||"on"==_||"1"==p||"on"==p||"1"==m||"on"==m){t="";y&&(t={padding_top:"",padding_bottom:""}),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:v,shrink:t,sticky_on_device:f,header_style:w,hide_on_scroll:j})}"mobile"!=f&&"both"!=f||(jQuery("#masthead .main-header-menu-toggle").click(function(e){if(jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")){if(h.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))){var t=jQuery(i).height(),a=0;jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==j&&jQuery("html").css({overflow:"hidden"}),"1"!=y||"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?jQuery("#masthead .main-header-bar.ast-sticky-active").css({"max-height":t-a+"px","overflow-y":"auto"}):jQuery("#masthead .ast-stick-primary-below-wrapper").css({"max-height":t-a+"px","overflow-y":"auto"})}}else h.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),"1"!=y||"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?jQuery("#masthead .main-header-bar.ast-sticky-active").css({"max-height":"","overflow-y":""}):jQuery("#masthead .ast-stick-primary-below-wrapper").css({"max-height":"","overflow-y":""})}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){if(jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")){var t=jQuery(i).height();"1"==j&&jQuery("html").css({overflow:"hidden"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})}else jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""})}))})}}}(jQuery,window);!function(r){"undefined"!=typeof astra&&(AstraProQuickView={stick_add_to_cart:astra.shop_quick_view_stick_cart,auto_popup_height_by_image:astra.shop_quick_view_auto_height,init:function(){this._init_popup(),this._bind()},_init_popup:function(){r("#ast-quick-view-content,#ast-quick-view-content div.product").css({"max-width":parseFloat(r(window).width())-120,"max-height":parseFloat(r(window).height())-120});var i=r(".ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link");0<i.length&&i.each(function(i){r(this).attr("href","javascript:void(0)")})},_bind:function(){r(document).off("click",".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link").on("click",".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link",AstraProQuickView._open_quick_view),r(document).on("click","#ast-quick-view-close",AstraProQuickView._close_quick_view),r(document).on("click",".ast-content-main-wrapper",AstraProQuickView._close_quick_view_on_overlay_click),r(document).on("keyup",AstraProQuickView._close_quick_view_on_esc_keypress)},_open_quick_view:function(i){i.preventDefault();var t=r(this),e=t.closest("li.product"),a=r(document).find("#ast-quick-view-modal"),s=r(document).find(".ast-quick-view-bg"),o=t.data("product_id");e.hasClass("ast-qv-on-image-click")&&(o=e.find(".ast-quick-view-data").data("product_id")),a.hasClass("loading")||a.addClass("loading"),s.hasClass("ast-quick-view-bg-ready")||s.addClass("ast-quick-view-bg-ready"),r(document).trigger("ast_quick_view_loading"),r.ajax({url:astra.ajax_url,type:"POST",dataType:"html",data:{action:"ast_load_product_quick_view",product_id:o},success:function(i){r(document).find("#ast-quick-view-modal").find("#ast-quick-view-content").html(i),AstraProQuickView._after_markup_append_process()}})},_after_markup_append_process:function(){var i=r(document).find("#ast-quick-view-modal"),t=i.find("#ast-quick-view-content"),e=t.find(".variations_form");if(!i.hasClass("open")){var a=t.outerHeight(),s=r(window).height(),o=r("html");s<a?o.css("margin-right",AstraProQuickView._get_scrollbar_width()):(o.css("margin-right",""),o.find(".ast-sticky-active, .ast-header-sticky-active, .ast-custom-footer").css("max-width","100%")),o.addClass("ast-quick-view-is-open")}0<e.length&&(e.trigger("check_variations"),e.trigger("reset_image"),e.wc_variation_form(),e.find("select").change());var c=i.find(".ast-qv-image-slider");1<c.find("li").length&&c.flexslider(),setTimeout(function(){AstraProQuickView._auto_set_content_height_by_image(),i.removeClass("loading").addClass("open"),r(".ast-quick-view-bg").addClass("open")},100),r(document).trigger("ast_quick_view_loader_stop")},_auto_set_content_height_by_image:function(){r("#ast-quick-view-modal").imagesLoaded().always(function(i){var t=r(document).find("#ast-quick-view-modal");s=t.find(".woocommerce-product-gallery__image img").outerHeight(),summary=t.find(".product .summary.entry-summary"),content=summary.css("content"),summary_content_ht=t.find(".summary-content").outerHeight();var e=t.find(".woocommerce-product-gallery__image img, .ast-qv-slides img"),a=parseFloat(r(window).height())-120,s=parseFloat(s);if(AstraProQuickView.auto_popup_height_by_image?e.length?s<a?summary.css("max-height",parseFloat(s)):summary.css("max-height",a):summary.css("width","100%"):summary.css("max-height",parseFloat(a)),AstraProQuickView.stick_add_to_cart){t.addClass("stick-add-to-cart");var o=t.find(".cart").outerHeight(),c=parseFloat(a)-parseFloat(o);if(o<s){t.find(".cart").addClass("stick");a=r("#ast-quick-view-content").outerHeight(),o=t.find(".cart").outerHeight(),c=parseFloat(a)-parseFloat(o);summary.css("max-height",parseFloat(c))}else c<a?summary.css("max-height",parseFloat(a)):summary.css("max-height","")}})},_close_quick_view_on_esc_keypress:function(i){i.preventDefault(),27===i.keyCode&&AstraProQuickView._close_quick_view()},_close_quick_view:function(i){i&&i.preventDefault(),r(document).find(".ast-quick-view-bg").removeClass("ast-quick-view-bg-ready"),r(document).find("#ast-quick-view-modal").removeClass("open").removeClass("loading"),r(".ast-quick-view-bg").removeClass("open"),r("html").removeClass("ast-quick-view-is-open"),r("html").css("margin-right",""),setTimeout(function(){r(document).find("#ast-quick-view-modal").find("#ast-quick-view-content").html("")},600)},_close_quick_view_on_overlay_click:function(i){this===i.target&&AstraProQuickView._close_quick_view()},_get_scrollbar_width:function(){var i=r('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');r("body").append(i);var t=r("div",i).innerWidth();i.css("overflow-y","scroll");var e=r("div",i).innerWidth();return r(i).remove(),t-e}},r(function(){AstraProQuickView.init()}))}(jQuery);var items=document.getElementsByClassName("astra-megamenu-li");jQuery(window).load(function(){jQuery(".ast-mega-menu-enabled").css("display","flex")}),[].slice.call(items).forEach(function(w){jQuery(w).hover(function(){var e=jQuery(w).parents(".ast-container"),a=e.children(),t=e.parent(),s=jQuery(this);if(s.hasClass("full-width-mega")&&(a=jQuery(a).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)){var n=a.width(),r=a.offset(),i=s.offset(),f=i.left-(r.left+parseFloat(a.css("paddingLeft"))),u=t.width(),l=t.offset(),o=i.left-(l.left+parseFloat(t.css("paddingLeft")));if(s.hasClass("menu-container-width-mega")){$target_container=jQuery(".main-navigation"),n=$target_container.width()+"px";var d=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),m=s.offset(),c=jQuery(window).width()-d-m.left;f=parseInt($target_container.width()-c)}s.hasClass("full-width-mega")?(s.find(".astra-full-megamenu-wrapper").css({left:"-"+o+"px",width:u}),s.find(".astra-megamenu").css({width:n})):s.find(".astra-megamenu").css({left:"-"+f+"px",width:n})}else s.find(".astra-megamenu").css({left:"",width:"","background-image":""}),s.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""})})}),[].slice.call(items).forEach(function(e){var a=jQuery(e).parents(".ast-container"),d=a.children(),m=a.parent(),c=jQuery(e);c.hasClass("full-width-mega")&&(d=jQuery(d).closest(".ast-container")),c.find(".menu-link").focusin(function(e){if(c.find(".sub-menu").addClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus"),parseInt(jQuery(window).width())>parseInt(astra.break_point)){var a=d.width(),t=d.offset(),s=c.offset(),n=s.left-(t.left+parseFloat(d.css("paddingLeft"))),r=m.width(),i=m.offset(),f=s.left-(i.left+parseFloat(m.css("paddingLeft")));if(c.hasClass("menu-container-width-mega")){$target_container=jQuery(".main-navigation"),a=$target_container.width()+"px";var u=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),l=c.offset(),o=jQuery(window).width()-u-l.left;n=parseInt($target_container.width()-o)}c.hasClass("full-width-mega")?(c.find(".astra-full-megamenu-wrapper").css({left:"-"+f+"px",width:r}),c.find(".astra-megamenu").css({width:a})):c.find(".astra-megamenu").css({left:"-"+n+"px",width:a})}else c.find(".astra-megamenu").css({left:"",width:"","background-image":""}),c.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""})}),c.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(e).find(".sub-menu .menu-item").last().focusout(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){c.find(".sub-menu").removeClass("astra-megamenu-focus"),c.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),c.click(function(e){e.stopPropagation()})});!function(){var e,t;function n(e){var t=document.body.className;t=t.replace(e,""),document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function s(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}function l(e){if(document.body.classList.contains("ast-header-break-point")){var t=document.querySelector(".main-navigation"),a=document.querySelector(".main-header-bar");if(null!==a&&null!==t){var o=t.offsetHeight,n=a.offsetHeight;if(o&&!document.body.classList.contains("ast-no-toggle-menu-enable"))var s=parseFloat(o)-parseFloat(n);else s=parseFloat(n);e.style.maxHeight=Math.abs(s)+"px"}}}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),o=0;a.length>o;o++)a[o].onclick=function(e){if(e.preventDefault(),e||(e=window.event),this.classList.contains("header-cover"))for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)for(var o=t[a].parentNode.querySelectorAll("a.astra-search-icon"),n=0;n<o.length;n++)o[n]==this&&(r(t[a]),t[a].querySelector("input.search-field").focus(),l(t[a]));else if(this.classList.contains("full-screen")){var s=document.getElementById("ast-seach-full-screen-form");s.classList.contains("full-screen")&&(r(s),c="full-screen",document.body.className+=" "+c,s.querySelector("input.search-field").focus())}var c};for(var c=document.getElementsByClassName("close"),i=(o=0,c.length);o<i;++o)c[o].onclick=function(e){e||(e=window.event);for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){s(t.parentNode),n("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){var t=document.getElementById("ast-seach-full-screen-form");null!=t&&(s(t),n("full-screen"));for(var a=document.querySelectorAll(".ast-search-box.header-cover"),o=0;o<a.length;o++)s(a[o])}},window.addEventListener("resize",function(){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""})}();