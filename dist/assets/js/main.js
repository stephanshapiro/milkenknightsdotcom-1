!function(a){skel.breakpoints({wide:"(max-width: 1680px)",normal:"(max-width: 1280px)",narrow:"(max-width: 980px)",narrower:"(max-width: 840px)",mobile:"(max-width: 736px)",mobilep:"(max-width: 480px)"}),a(function(){var e=a(window),n=a("body");n.addClass("is-loading"),e.on("load",function(){n.removeClass("is-loading")}),a("form").placeholder(),skel.on("+narrower -narrower",function(){a.prioritize(".important\\28 narrower\\29",skel.breakpoint("narrower").active)}),a("#nav > ul").dropotron({offsetY:-15,hoverDelay:0,alignment:"center"}),a('<div id="titleBar"><a href="#navPanel" class="toggle"></a><span class="title">Team 1836: The MilkenKnights</span></div>').appendTo(n),a('<div id="navPanel"><nav>'+a("#nav").navList()+"</nav></div>").appendTo(n).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,side:"left",target:n,visibleClass:"navPanel-visible"}),"wp"==skel.vars.os&&skel.vars.osVersion<10&&a("#titleBar, #navPanel, #page-wrapper").css("transition","none")})}(jQuery);