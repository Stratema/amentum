// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('amentum.docs.views.elements');
goog.require('cljs.core');
goog.require('amentum.collections');
goog.require('javelin.core');
goog.require('amentum.docs.core');
goog.require('hoplon.core');
goog.require('amentum.elements');
goog.require('clojure.string');
amentum.docs.views.elements.colors = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"], null);
amentum.docs.views.elements.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing\n  elit. Curabitur a orci ac ante ultricies mattis. Nunc elementum quam\n  et mauris iaculis viverra. Morbi pretium, dui in interdum malesuada,\n  ipsum dui feugiat quam, vitae egestas leo urna in leo. Cum sociis\n  natoque penatibus et magnis dis parturient montes, nascetur\n  ridiculus mus.";
amentum.docs.views.elements.networks = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["facebook","Facebook"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["twitter","Twitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["google plus","Google Plus"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["vk","VK"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["linkedin","LinkedIn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["instagram","Instagram"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["youtube","YouTube"], null)], null);
/**
 * @param {...*} var_args
 */
amentum.docs.views.elements.button = (function() { 
var amentum$docs$views$elements$button__delegate = function (args__13751__auto__){
var vec__14957 = hoplon.core.parse_args(args__13751__auto__);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [amentum.docs.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Types",amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Button",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A standard button") : hoplon.core.p.call(null,"A standard button")),(function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (c,vec__14957){
return (function (G__14960){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,G__14960], null);
});})(c,vec__14957))
).call(null,c),cljs.core.cst$kw$click,((function (c,vec__14957){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.not);
});})(c,vec__14957))
,javelin.core.formula(((function (c,vec__14957){
return (function (G__14961){
if(cljs.core.truth_(G__14961)){
return "Following";
} else {
return "Follow";
}
});})(c,vec__14957))
).call(null,c)], 0));
})()], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14962 = cljs.core.cst$kw$class;
var G__14963 = "ui ignored warning message";
var G__14964 = "Although any tag can be used for a button, it will only be\n        keyboard focusable if you use a <button> tag or you add the\n        property tabindex=";
var G__14965 = (0);
var G__14966 = ". Keyboard accessible buttons will\n        preserve focus styles after click, which may be visually\n        jarring.";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14962,G__14963,G__14964,G__14965,G__14966) : hoplon.core.div.call(null,G__14962,G__14963,G__14964,G__14965,G__14966));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$type,"button","Button"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$tabindex,(0),"Focusable"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Emphasis",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to show different levels of emphasis") : hoplon.core.p.call(null,"A button can be formatted to show different levels of emphasis")),(function (){var G__14967 = cljs.core.cst$kw$class;
var G__14968 = "ui ignored info message";
var G__14969 = "Setting your brand colors to primary and secondary color\n         variables in ";
var G__14970 = (function (){var G__14972 = cljs.core.cst$kw$href;
var G__14973 = "semantic-ui.com/usage/theming.html";
var G__14974 = (hoplon.core.code.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.code.cljs$core$IFn$_invoke$arity$1("site-variables") : hoplon.core.code.call(null,"site-variables"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__14972,G__14973,G__14974) : hoplon.core.a.call(null,G__14972,G__14973,G__14974));
})();
var G__14971 = " will allow you to use your color theming for UI elements";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__14967,G__14968,G__14969,G__14970,G__14971) : hoplon.core.div.call(null,G__14967,G__14968,G__14969,G__14970,G__14971));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"primary","Save"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Discard"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"secondary","Okay"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cancel"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Animated",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can animate to show hidden content") : hoplon.core.p.call(null,"A button can animate to show hidden content")),(function (){var G__14975 = cljs.core.cst$kw$class;
var G__14976 = "ui ignored message";
var G__14977 = "The button will be automatically sized according to the\n      visible content size. Make sure there is enough room for the\n      hidden content to show";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14975,G__14976,G__14977) : hoplon.core.div.call(null,G__14975,G__14976,G__14977));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"animated",(function (){var G__14978 = cljs.core.cst$kw$class;
var G__14979 = "visible content";
var G__14980 = "Next";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14978,G__14979,G__14980) : hoplon.core.div.call(null,G__14978,G__14979,G__14980));
})(),(function (){var G__14981 = cljs.core.cst$kw$class;
var G__14982 = "hidden content";
var G__14983 = (function (){var G__14984 = cljs.core.cst$kw$class;
var G__14985 = "right arrow icon";
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14984,G__14985) : hoplon.core.i.call(null,G__14984,G__14985));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14981,G__14982,G__14983) : hoplon.core.div.call(null,G__14981,G__14982,G__14983));
})()], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"vertical animated",cljs.core.cst$kw$tabindex,(0),(function (){var G__14986 = cljs.core.cst$kw$class;
var G__14987 = "visible content";
var G__14988 = "Shop";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14986,G__14987,G__14988) : hoplon.core.div.call(null,G__14986,G__14987,G__14988));
})(),(function (){var G__14989 = cljs.core.cst$kw$class;
var G__14990 = "hidden content";
var G__14991 = (function (){var G__14992 = cljs.core.cst$kw$class;
var G__14993 = "shop icon";
return (hoplon.core.i.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.i.cljs$core$IFn$_invoke$arity$2(G__14992,G__14993) : hoplon.core.i.call(null,G__14992,G__14993));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14989,G__14990,G__14991) : hoplon.core.div.call(null,G__14989,G__14990,G__14991));
})()], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"animated fade",cljs.core.cst$kw$tabindex,(0),(function (){var G__14994 = cljs.core.cst$kw$class;
var G__14995 = "visible content";
var G__14996 = "Sign up for a Pro account";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14994,G__14995,G__14996) : hoplon.core.div.call(null,G__14994,G__14995,G__14996));
})(),(function (){var G__14997 = cljs.core.cst$kw$class;
var G__14998 = "hidden content";
var G__14999 = "$12.99 a month";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__14997,G__14998,G__14999) : hoplon.core.div.call(null,G__14997,G__14998,G__14999));
})()], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled",(function (){var G__15000 = "A button can appear alongside a ";
var G__15001 = (function (){var G__15002 = cljs.core.cst$kw$href;
var G__15003 = "/elements/label";
var G__15004 = "Label";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__15002,G__15003,G__15004) : hoplon.core.a.call(null,G__15002,G__15003,G__15004));
})();
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$2(G__15000,G__15001) : hoplon.core.p.call(null,G__15000,G__15001));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","2,048"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic right pointing","2,048"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","1,048"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"icon",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["fork"], 0))], 0))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"red",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["heart"], 0)),"Like"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic","2,048"], 0))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left labeled",cljs.core.cst$kw$tabindex,(0),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic blue",amentum.elements.icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["fork"], 0)),"Fork"], 0)),amentum.elements.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic left pointing blue","1,048"], 0))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can have only an icon") : hoplon.core.p.call(null,"A button can have only an icon")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,"cloud"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled Icon",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can use an icon as a label") : hoplon.core.p.call(null,"A button can use an icon as a label")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled icon",cljs.core.cst$kw$icon,"pause","Pause"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"right labeled icon",cljs.core.cst$kw$icon,"right arrow","Next"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Basic",cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A basic button is less pronounced") : hoplon.core.p.call(null,"A basic button is less pronounced")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic",cljs.core.cst$kw$icon,"user","Add Friend"], 0))], 0)),(function (){var c = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["primary","secondary","positive","negative"], null);
return amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (c,vec__14957){
return (function (p1__14869_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,[cljs.core.str(p1__14869_SHARP_),cljs.core.str(" basic")].join(''),clojure.string.capitalize(p1__14869_SHARP_)], 0));
});})(c,vec__14957))
,c)], 0));
})(),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14870_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14870_SHARP_,cljs.core.cst$kw$class,"basic",clojure.string.capitalize(p1__14870_SHARP_)], 0));
});})(vec__14957))
,amentum.docs.views.elements.colors)], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Inverted",cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to appear on dark backgrounds") : hoplon.core.p.call(null,"A button can be formatted to appear on dark backgrounds")),amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"inverted",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14871_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14871_SHARP_,cljs.core.cst$kw$class,"inverted",clojure.string.capitalize(p1__14871_SHARP_)], 0));
});})(vec__14957))
,amentum.docs.views.elements.colors)], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"inverted",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14872_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$color,p1__14872_SHARP_,cljs.core.cst$kw$class,"inverted basic",[cljs.core.str("Basic "),cljs.core.str(clojure.string.capitalize(p1__14872_SHARP_))].join('')], 0));
});})(vec__14957))
,amentum.docs.views.elements.colors)], 0))], 0))], 0)),amentum.docs.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Groups",amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Buttons can exist together as a group") : hoplon.core.p.call(null,"Buttons can exist together as a group")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14873_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([clojure.string.capitalize(p1__14873_SHARP_)], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["one","two","three"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Button groups can show groups of icons") : hoplon.core.p.call(null,"Button groups can show groups of icons")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14874_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str("align "),cljs.core.str(p1__14874_SHARP_)].join('')], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","center","right","justify"], null))], 0)),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14875_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,[cljs.core.str("align "),cljs.core.str(p1__14875_SHARP_)].join('')], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","underline","text width"], null))], 0))], 0))], 0)),amentum.docs.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Content",amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Conditionals",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Button groups can contain conditionals") : hoplon.core.p.call(null,"Button groups can contain conditionals")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Cancel"], 0)),(function (){var G__15005 = cljs.core.cst$kw$class;
var G__15006 = "or";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__15005,G__15006) : hoplon.core.div.call(null,G__15005,G__15006));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"positive","Save"], 0))], 0))], 0))], 0)),amentum.docs.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"States",amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Active",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can show it is currently the active user selection") : hoplon.core.p.call(null,"A button can show it is currently the active user selection")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"active",cljs.core.cst$kw$icon,"user","Follow"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Disabled",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can show it is currently unable to be interacted with") : hoplon.core.p.call(null,"A button can show it is currently unable to be interacted with")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"disabled",cljs.core.cst$kw$icon,"user","Followed"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Loading",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can show a loading indicator") : hoplon.core.p.call(null,"A button can show a loading indicator")),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14876_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,[cljs.core.str("ui "),cljs.core.str(p1__14876_SHARP_),cljs.core.str(" loading")].join(''),"Loading"], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","basic","primary","sceonday"], null))], 0))], 0)),amentum.docs.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Variations",amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Social",cljs.core.cst$kw$class,"spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to link to a social website") : hoplon.core.p.call(null,"A button can be formatted to link to a social website")),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p__15007){
var vec__15008 = p__15007;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15008,(1),null);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,n,cljs.core.cst$kw$icon,n,l], 0));
});})(vec__14957))
,amentum.docs.views.elements.networks)], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Size",cljs.core.cst$kw$class,"spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can have different sizes") : hoplon.core.p.call(null,"A button can have different sizes")),(function (){var sizes = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mini","tiny","small","medium","large","big","huge","massive"], null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sizes,vec__14957){
return (function (p1__14877_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,p1__14877_SHARP_,clojure.string.capitalize(p1__14877_SHARP_)], 0));
});})(sizes,vec__14957))
,sizes);
})()], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Floated",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be aligned to the left or right of its container") : hoplon.core.p.call(null,"A button can be aligned to the left or right of its container")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"right floated","Right Floated"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left floated","Left Floated"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Colored",cljs.core.cst$kw$class,"spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can have different colors") : hoplon.core.p.call(null,"A button can have different colors")),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14878_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,p1__14878_SHARP_,clojure.string.capitalize(p1__14878_SHARP_)], 0));
});})(vec__14957))
,amentum.docs.views.elements.colors)], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Compact",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can reduce its padding to fit into tighter spaces") : hoplon.core.p.call(null,"A button can reduce its padding to fit into tighter spaces")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"compact","Hold"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"compact",cljs.core.cst$kw$icon,"pause"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"compact icon labeled",cljs.core.cst$kw$icon,"pause","Pause"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Toggle",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to toggle on and off") : hoplon.core.p.call(null,"A button can be formatted to toggle on and off")),(function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,javelin.core.formula(((function (c,vec__14957){
return (function (G__15011){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$toggle,true,cljs.core.cst$kw$active,G__15011], null);
});})(c,vec__14957))
).call(null,c),cljs.core.cst$kw$click,((function (c,vec__14957){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c,cljs.core.not);
});})(c,vec__14957))
,javelin.core.formula(((function (c,vec__14957){
return (function (G__15012){
if(cljs.core.truth_(G__15012)){
return "Voted";
} else {
return "Vote";
}
});})(c,vec__14957))
).call(null,c)], 0));
})()], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Positive",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can hint towards a positive consequence") : hoplon.core.p.call(null,"A button can hint towards a positive consequence")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"positive","Positive Button"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Negative",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can hint towards a negative consequence") : hoplon.core.p.call(null,"A button can hint towards a negative consequence")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"negative","Positive Button"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Fluid",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can take the width of its container") : hoplon.core.p.call(null,"A button can take the width of its container")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"fluid","Fits container"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Circular",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be circular") : hoplon.core.p.call(null,"A button can be circular")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"circular",cljs.core.cst$kw$icon,"settings"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another spaced",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be formatted to link to a social website") : hoplon.core.p.call(null,"A button can be formatted to link to a social website")),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p__15013){
var vec__15014 = p__15013;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15014,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15014,(1),null);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,[cljs.core.str("circular "),cljs.core.str(n)].join(''),cljs.core.cst$kw$icon,n], 0));
});})(vec__14957))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),amentum.docs.views.elements.networks))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Vertically Attached",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be attached to the top or bottom of other content") : hoplon.core.p.call(null,"A button can be attached to the top or bottom of other content")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"top attached",cljs.core.cst$kw$tabindex,(0),"Top"], 0)),amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"attached",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(amentum.docs.views.elements.lorem) : hoplon.core.p.call(null,amentum.docs.views.elements.lorem))], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"bottom attached",cljs.core.cst$kw$tabindex,(0),"Bottom"], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another",amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"two top attached",amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["One"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Two"], 0))], 0)),amentum.elements.segment.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"attached",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1(amentum.docs.views.elements.lorem) : hoplon.core.p.call(null,amentum.docs.views.elements.lorem))], 0)),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"two bottom attached",amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["One"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Two"], 0))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Horizontally Attached",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button can be attached to the left or right of other content") : hoplon.core.p.call(null,"A button can be attached to the left or right of other content")),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"left attached","Left"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"right attached","Right"], 0))], 0))], 0)),amentum.docs.core.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Group Variations",amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Vertical Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can be formatted to appear vertically") : hoplon.core.p.call(null,"Groups can be formatted to appear vertically")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"vertical",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14879_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14879_SHARP_], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Feed","Messages","Events","Photos"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Icon Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can be formatted as icons") : hoplon.core.p.call(null,"Groups can be formatted as icons")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"icon",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14880_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,p1__14880_SHARP_], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["play","pause","shuffle"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Labeled Icon Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can be formatted as labeled icons") : hoplon.core.p.call(null,"Groups can be formatted as labeled icons")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"vertical labeled icon",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14881_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,p1__14881_SHARP_,clojure.string.capitalize(p1__14881_SHARP_)], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["play","pause","shuffle"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Mixed Group",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can be formatted to use multiple button types together") : hoplon.core.p.call(null,"Groups can be formatted to use multiple button types together")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"labeled icon",cljs.core.cst$kw$icon,"left chevron","Back"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,"stop","Stop"], 0)),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"right labeled icon",cljs.core.cst$kw$icon,"right chevron","Back"], 0))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Equal Width",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can have their widths divided evenly") : hoplon.core.p.call(null,"Groups can have their widths divided evenly")),(function (){var s = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Overview","Specs","Warranty","Reviews","Support"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"five",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s,vec__14957){
return (function (p1__14882_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14882_SHARP_], 0));
});})(s,vec__14957))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),s))], 0)),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"three",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s,vec__14957){
return (function (p1__14883_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14883_SHARP_], 0));
});})(s,vec__14957))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),s))], 0))], null);
})()], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Colored Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can have a shared color") : hoplon.core.p.call(null,"Groups can have a shared color")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"blue",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14884_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14884_SHARP_], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["One","Two","Three"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Basic Buttons",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("A button group can be less pronounced") : hoplon.core.p.call(null,"A button group can be less pronounced")),(function (){var n = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["One","Two","Three"], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n,vec__14957){
return (function (p1__14885_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14885_SHARP_], 0));
});})(n,vec__14957))
,n)], 0)),(function (){var G__15017 = cljs.core.cst$kw$class;
var G__15018 = "class ui divider";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__15017,G__15018) : hoplon.core.div.call(null,G__15017,G__15018));
})(),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"vertical basic",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n,vec__14957){
return (function (p1__14886_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14886_SHARP_], 0));
});})(n,vec__14957))
,n)], 0))], null);
})()], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another",(function (){var n = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","One"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blue","Two"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["green","Three"], null)], null);
return amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (n,vec__14957){
return (function (p__15019){
var vec__15020 = p__15019;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15020,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15020,(1),null);
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"basic",cljs.core.cst$kw$color,c,l], 0));
});})(n,vec__14957))
,n)], 0));
})()], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$title,"Group Sizes",(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Groups can have a shared size") : hoplon.core.p.call(null,"Groups can have a shared size")),amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"large",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14887_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__14887_SHARP_], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["One","Two","Three"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another",amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"small basic",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__14957){
return (function (p1__14888_SHARP_){
return amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$icon,p1__14888_SHARP_], 0));
});})(vec__14957))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["file","save","upload","download"], null))], 0))], 0)),amentum.docs.core.example.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"another",amentum.elements.buttons.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$class,"large",amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["One"], 0)),(function (){var G__15023 = cljs.core.cst$kw$class;
var G__15024 = "or";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__15023,G__15024) : hoplon.core.div.call(null,G__15023,G__15024));
})(),amentum.elements.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Two"], 0))], 0))], 0))], 0))], null);
};
var amentum$docs$views$elements$button = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__15025__i = 0, G__15025__a = new Array(arguments.length -  0);
while (G__15025__i < G__15025__a.length) {G__15025__a[G__15025__i] = arguments[G__15025__i + 0]; ++G__15025__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__15025__a,0);
} 
return amentum$docs$views$elements$button__delegate.call(this,args__13751__auto__);};
amentum$docs$views$elements$button.cljs$lang$maxFixedArity = 0;
amentum$docs$views$elements$button.cljs$lang$applyTo = (function (arglist__15026){
var args__13751__auto__ = cljs.core.seq(arglist__15026);
return amentum$docs$views$elements$button__delegate(args__13751__auto__);
});
amentum$docs$views$elements$button.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$elements$button__delegate;
return amentum$docs$views$elements$button;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.views.elements.container = (function() { 
var amentum$docs$views$elements$container__delegate = function (args__13751__auto__){
var vec__15030 = hoplon.core.parse_args(args__13751__auto__);
return null;
};
var amentum$docs$views$elements$container = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__15033__i = 0, G__15033__a = new Array(arguments.length -  0);
while (G__15033__i < G__15033__a.length) {G__15033__a[G__15033__i] = arguments[G__15033__i + 0]; ++G__15033__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__15033__a,0);
} 
return amentum$docs$views$elements$container__delegate.call(this,args__13751__auto__);};
amentum$docs$views$elements$container.cljs$lang$maxFixedArity = 0;
amentum$docs$views$elements$container.cljs$lang$applyTo = (function (arglist__15034){
var args__13751__auto__ = cljs.core.seq(arglist__15034);
return amentum$docs$views$elements$container__delegate(args__13751__auto__);
});
amentum$docs$views$elements$container.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$elements$container__delegate;
return amentum$docs$views$elements$container;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.views.elements.icon = (function() { 
var amentum$docs$views$elements$icon__delegate = function (args__13751__auto__){
var vec__15038 = hoplon.core.parse_args(args__13751__auto__);
return null;
};
var amentum$docs$views$elements$icon = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__15041__i = 0, G__15041__a = new Array(arguments.length -  0);
while (G__15041__i < G__15041__a.length) {G__15041__a[G__15041__i] = arguments[G__15041__i + 0]; ++G__15041__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__15041__a,0);
} 
return amentum$docs$views$elements$icon__delegate.call(this,args__13751__auto__);};
amentum$docs$views$elements$icon.cljs$lang$maxFixedArity = 0;
amentum$docs$views$elements$icon.cljs$lang$applyTo = (function (arglist__15042){
var args__13751__auto__ = cljs.core.seq(arglist__15042);
return amentum$docs$views$elements$icon__delegate(args__13751__auto__);
});
amentum$docs$views$elements$icon.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$elements$icon__delegate;
return amentum$docs$views$elements$icon;
})()
;
/**
 * @param {...*} var_args
 */
amentum.docs.views.elements.header = (function() { 
var amentum$docs$views$elements$header__delegate = function (args__13751__auto__){
var vec__15046 = hoplon.core.parse_args(args__13751__auto__);
return null;
};
var amentum$docs$views$elements$header = function (var_args){
var args__13751__auto__ = null;
if (arguments.length > 0) {
var G__15049__i = 0, G__15049__a = new Array(arguments.length -  0);
while (G__15049__i < G__15049__a.length) {G__15049__a[G__15049__i] = arguments[G__15049__i + 0]; ++G__15049__i;}
  args__13751__auto__ = new cljs.core.IndexedSeq(G__15049__a,0);
} 
return amentum$docs$views$elements$header__delegate.call(this,args__13751__auto__);};
amentum$docs$views$elements$header.cljs$lang$maxFixedArity = 0;
amentum$docs$views$elements$header.cljs$lang$applyTo = (function (arglist__15050){
var args__13751__auto__ = cljs.core.seq(arglist__15050);
return amentum$docs$views$elements$header__delegate(args__13751__auto__);
});
amentum$docs$views$elements$header.cljs$core$IFn$_invoke$arity$variadic = amentum$docs$views$elements$header__delegate;
return amentum$docs$views$elements$header;
})()
;