// Compiled by ClojureScript 1.9.293 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__13483 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__13481_SHARP_,p2__13482_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13481_SHARP_,p2__13482_SHARP_,p2__13482_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__13483;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e13485){if((e13485 instanceof Error)){
var _ = e13485;
return null;
} else {
throw e13485;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__13488 = c;
javelin.core.add_sync_BANG_(G__13488);

return G__13488;
} else {
var G__13489 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__13489));

return G__13489;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13500 = arguments.length;
var i__7951__auto___13501 = (0);
while(true){
if((i__7951__auto___13501 < len__7950__auto___13500)){
args__7957__auto__.push((arguments[i__7951__auto___13501]));

var G__13502 = (i__7951__auto___13501 + (1));
i__7951__auto___13501 = G__13502;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13492){
var vec__13493 = p__13492;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13493,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__13496 = cljs.core.seq(srcs);
var chunk__13497 = null;
var count__13498 = (0);
var i__13499 = (0);
while(true){
if((i__13499 < count__13498)){
var src = chunk__13497.cljs$core$IIndexed$_nth$arity$2(null,i__13499);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13503 = seq__13496;
var G__13504 = chunk__13497;
var G__13505 = count__13498;
var G__13506 = (i__13499 + (1));
seq__13496 = G__13503;
chunk__13497 = G__13504;
count__13498 = G__13505;
i__13499 = G__13506;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13496);
if(temp__4657__auto__){
var seq__13496__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13496__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13496__$1);
var G__13507 = cljs.core.chunk_rest(seq__13496__$1);
var G__13508 = c__7656__auto__;
var G__13509 = cljs.core.count(c__7656__auto__);
var G__13510 = (0);
seq__13496 = G__13507;
chunk__13497 = G__13508;
count__13498 = G__13509;
i__13499 = G__13510;
continue;
} else {
var src = cljs.core.first(seq__13496__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__13511 = cljs.core.next(seq__13496__$1);
var G__13512 = null;
var G__13513 = (0);
var G__13514 = (0);
seq__13496 = G__13511;
chunk__13497 = G__13512;
count__13498 = G__13513;
i__13499 = G__13514;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq13490){
var G__13491 = cljs.core.first(seq13490);
var seq13490__$1 = cljs.core.next(seq13490);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13491,seq13490__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13535 = arguments.length;
var i__7951__auto___13536 = (0);
while(true){
if((i__7951__auto___13536 < len__7950__auto___13535)){
args__7957__auto__.push((arguments[i__7951__auto___13536]));

var G__13537 = (i__7951__auto___13536 + (1));
i__7951__auto___13536 = G__13537;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((1) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7958__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__13519){
var vec__13520 = p__13519;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13520,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13520,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__13523_13538 = cljs.core.seq(this$.sources);
var chunk__13524_13539 = null;
var count__13525_13540 = (0);
var i__13526_13541 = (0);
while(true){
if((i__13526_13541 < count__13525_13540)){
var source_13542 = chunk__13524_13539.cljs$core$IIndexed$_nth$arity$2(null,i__13526_13541);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13542) : javelin.core.cell_QMARK_.call(null,source_13542)))){
source_13542.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13542.sinks,this$);

if((source_13542.rank > this$.rank)){
var seq__13527_13543 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13523_13538,chunk__13524_13539,count__13525_13540,i__13526_13541,source_13542,vec__13520,f,sources){
return (function (p1__13515_SHARP_){
return p1__13515_SHARP_.sinks;
});})(seq__13523_13538,chunk__13524_13539,count__13525_13540,i__13526_13541,source_13542,vec__13520,f,sources))
,source_13542));
var chunk__13528_13544 = null;
var count__13529_13545 = (0);
var i__13530_13546 = (0);
while(true){
if((i__13530_13546 < count__13529_13545)){
var dep_13547 = chunk__13528_13544.cljs$core$IIndexed$_nth$arity$2(null,i__13530_13546);
dep_13547.rank = javelin.core.next_rank();

var G__13548 = seq__13527_13543;
var G__13549 = chunk__13528_13544;
var G__13550 = count__13529_13545;
var G__13551 = (i__13530_13546 + (1));
seq__13527_13543 = G__13548;
chunk__13528_13544 = G__13549;
count__13529_13545 = G__13550;
i__13530_13546 = G__13551;
continue;
} else {
var temp__4657__auto___13552 = cljs.core.seq(seq__13527_13543);
if(temp__4657__auto___13552){
var seq__13527_13553__$1 = temp__4657__auto___13552;
if(cljs.core.chunked_seq_QMARK_(seq__13527_13553__$1)){
var c__7656__auto___13554 = cljs.core.chunk_first(seq__13527_13553__$1);
var G__13555 = cljs.core.chunk_rest(seq__13527_13553__$1);
var G__13556 = c__7656__auto___13554;
var G__13557 = cljs.core.count(c__7656__auto___13554);
var G__13558 = (0);
seq__13527_13543 = G__13555;
chunk__13528_13544 = G__13556;
count__13529_13545 = G__13557;
i__13530_13546 = G__13558;
continue;
} else {
var dep_13559 = cljs.core.first(seq__13527_13553__$1);
dep_13559.rank = javelin.core.next_rank();

var G__13560 = cljs.core.next(seq__13527_13553__$1);
var G__13561 = null;
var G__13562 = (0);
var G__13563 = (0);
seq__13527_13543 = G__13560;
chunk__13528_13544 = G__13561;
count__13529_13545 = G__13562;
i__13530_13546 = G__13563;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13564 = seq__13523_13538;
var G__13565 = chunk__13524_13539;
var G__13566 = count__13525_13540;
var G__13567 = (i__13526_13541 + (1));
seq__13523_13538 = G__13564;
chunk__13524_13539 = G__13565;
count__13525_13540 = G__13566;
i__13526_13541 = G__13567;
continue;
} else {
var temp__4657__auto___13568 = cljs.core.seq(seq__13523_13538);
if(temp__4657__auto___13568){
var seq__13523_13569__$1 = temp__4657__auto___13568;
if(cljs.core.chunked_seq_QMARK_(seq__13523_13569__$1)){
var c__7656__auto___13570 = cljs.core.chunk_first(seq__13523_13569__$1);
var G__13571 = cljs.core.chunk_rest(seq__13523_13569__$1);
var G__13572 = c__7656__auto___13570;
var G__13573 = cljs.core.count(c__7656__auto___13570);
var G__13574 = (0);
seq__13523_13538 = G__13571;
chunk__13524_13539 = G__13572;
count__13525_13540 = G__13573;
i__13526_13541 = G__13574;
continue;
} else {
var source_13575 = cljs.core.first(seq__13523_13569__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_13575) : javelin.core.cell_QMARK_.call(null,source_13575)))){
source_13575.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_13575.sinks,this$);

if((source_13575.rank > this$.rank)){
var seq__13531_13576 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__13523_13538,chunk__13524_13539,count__13525_13540,i__13526_13541,source_13575,seq__13523_13569__$1,temp__4657__auto___13568,vec__13520,f,sources){
return (function (p1__13515_SHARP_){
return p1__13515_SHARP_.sinks;
});})(seq__13523_13538,chunk__13524_13539,count__13525_13540,i__13526_13541,source_13575,seq__13523_13569__$1,temp__4657__auto___13568,vec__13520,f,sources))
,source_13575));
var chunk__13532_13577 = null;
var count__13533_13578 = (0);
var i__13534_13579 = (0);
while(true){
if((i__13534_13579 < count__13533_13578)){
var dep_13580 = chunk__13532_13577.cljs$core$IIndexed$_nth$arity$2(null,i__13534_13579);
dep_13580.rank = javelin.core.next_rank();

var G__13581 = seq__13531_13576;
var G__13582 = chunk__13532_13577;
var G__13583 = count__13533_13578;
var G__13584 = (i__13534_13579 + (1));
seq__13531_13576 = G__13581;
chunk__13532_13577 = G__13582;
count__13533_13578 = G__13583;
i__13534_13579 = G__13584;
continue;
} else {
var temp__4657__auto___13585__$1 = cljs.core.seq(seq__13531_13576);
if(temp__4657__auto___13585__$1){
var seq__13531_13586__$1 = temp__4657__auto___13585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13531_13586__$1)){
var c__7656__auto___13587 = cljs.core.chunk_first(seq__13531_13586__$1);
var G__13588 = cljs.core.chunk_rest(seq__13531_13586__$1);
var G__13589 = c__7656__auto___13587;
var G__13590 = cljs.core.count(c__7656__auto___13587);
var G__13591 = (0);
seq__13531_13576 = G__13588;
chunk__13532_13577 = G__13589;
count__13533_13578 = G__13590;
i__13534_13579 = G__13591;
continue;
} else {
var dep_13592 = cljs.core.first(seq__13531_13586__$1);
dep_13592.rank = javelin.core.next_rank();

var G__13593 = cljs.core.next(seq__13531_13586__$1);
var G__13594 = null;
var G__13595 = (0);
var G__13596 = (0);
seq__13531_13576 = G__13593;
chunk__13532_13577 = G__13594;
count__13533_13578 = G__13595;
i__13534_13579 = G__13596;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__13597 = cljs.core.next(seq__13523_13569__$1);
var G__13598 = null;
var G__13599 = (0);
var G__13600 = (0);
seq__13523_13538 = G__13597;
chunk__13524_13539 = G__13598;
count__13525_13540 = G__13599;
i__13526_13541 = G__13600;
continue;
}
} else {
}
}
break;
}

var compute_13601 = ((function (vec__13520,f,sources){
return (function (p1__13516_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__13516_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__13516_SHARP_)));
});})(vec__13520,f,sources))
;
this$.thunk = ((function (compute_13601,vec__13520,f,sources){
return (function (){
return this$.state = compute_13601(this$.sources);
});})(compute_13601,vec__13520,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq13517){
var G__13518 = cljs.core.first(seq13517);
var seq13517__$1 = cljs.core.next(seq13517);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13518,seq13517__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__13602 = this$__$1;
var G__13603 = (function (){var G__13604 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__13604) : f.call(null,G__13604));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13602,G__13603) : cljs.core.reset_BANG_.call(null,G__13602,G__13603));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__13605 = this$__$1;
var G__13606 = (function (){var G__13607 = this$__$1.state;
var G__13608 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__13607,G__13608) : f.call(null,G__13607,G__13608));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13605,G__13606) : cljs.core.reset_BANG_.call(null,G__13605,G__13606));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__13609 = this$__$1;
var G__13610 = (function (){var G__13611 = this$__$1.state;
var G__13612 = a;
var G__13613 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__13611,G__13612,G__13613) : f.call(null,G__13611,G__13612,G__13613));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13609,G__13610) : cljs.core.reset_BANG_.call(null,G__13609,G__13610));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__13614 = this$__$1;
var G__13615 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__13614,G__13615) : cljs.core.reset_BANG_.call(null,G__13614,G__13615));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__13616 = cljs.core.seq(self__.watches);
var chunk__13617 = null;
var count__13618 = (0);
var i__13619 = (0);
while(true){
if((i__13619 < count__13618)){
var vec__13620 = chunk__13617.cljs$core$IIndexed$_nth$arity$2(null,i__13619);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13620,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13626 = seq__13616;
var G__13627 = chunk__13617;
var G__13628 = count__13618;
var G__13629 = (i__13619 + (1));
seq__13616 = G__13626;
chunk__13617 = G__13627;
count__13618 = G__13628;
i__13619 = G__13629;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__13616);
if(temp__4657__auto__){
var seq__13616__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13616__$1)){
var c__7656__auto__ = cljs.core.chunk_first(seq__13616__$1);
var G__13630 = cljs.core.chunk_rest(seq__13616__$1);
var G__13631 = c__7656__auto__;
var G__13632 = cljs.core.count(c__7656__auto__);
var G__13633 = (0);
seq__13616 = G__13630;
chunk__13617 = G__13631;
count__13618 = G__13632;
i__13619 = G__13633;
continue;
} else {
var vec__13623 = cljs.core.first(seq__13616__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13623,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13623,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__13634 = cljs.core.next(seq__13616__$1);
var G__13635 = null;
var G__13636 = (0);
var G__13637 = (0);
seq__13616 = G__13634;
chunk__13617 = G__13635;
count__13618 = G__13636;
i__13619 = G__13637;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7448__auto__,writer__7449__auto__,opt__7450__auto__){
return cljs.core._write(writer__7449__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return c.thunk;
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return c.update;
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6830__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6830__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__6830__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__13640__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__13639 = cljs.core.cst$kw$javelin$core_SLASH_none;
return (javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(G__13639) : javelin.core.cell.call(null,G__13639));
})(),cljs.core.array_seq([f,sources], 0));
};
var G__13640 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__13641__i = 0, G__13641__a = new Array(arguments.length -  0);
while (G__13641__i < G__13641__a.length) {G__13641__a[G__13641__i] = arguments[G__13641__i + 0]; ++G__13641__i;}
  sources = new cljs.core.IndexedSeq(G__13641__a,0);
} 
return G__13640__delegate.call(this,sources);};
G__13640.cljs$lang$maxFixedArity = 0;
G__13640.cljs$lang$applyTo = (function (arglist__13642){
var sources = cljs.core.seq(arglist__13642);
return G__13640__delegate(sources);
});
G__13640.cljs$core$IFn$_invoke$arity$variadic = G__13640__delegate;
return G__13640;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args13643 = [];
var len__7950__auto___13651 = arguments.length;
var i__7951__auto___13652 = (0);
while(true){
if((i__7951__auto___13652 < len__7950__auto___13651)){
args13643.push((arguments[i__7951__auto___13652]));

var G__13653 = (i__7951__auto___13652 + (1));
i__7951__auto___13652 = G__13653;
continue;
} else {
}
break;
}

var G__13647 = args13643.length;
switch (G__13647) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7969__auto__ = (new cljs.core.IndexedSeq(args13643.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7969__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__13648){
var map__13649 = p__13648;
var map__13649__$1 = ((((!((map__13649 == null)))?((((map__13649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13649):map__13649);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13649__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq13644){
var G__13645 = cljs.core.first(seq13644);
var seq13644__$1 = cljs.core.next(seq13644);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__13645,seq13644__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__13655_SHARP_){
var _STAR_tx_STAR_13659 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__13660 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13660) : cljs.core.atom.call(null,G__13660));
})();

try{return (p1__13655_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__13655_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__13655_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13659;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_13661 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_13661;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7957__auto__ = [];
var len__7950__auto___13669 = arguments.length;
var i__7951__auto___13670 = (0);
while(true){
if((i__7951__auto___13670 < len__7950__auto___13669)){
args__7957__auto__.push((arguments[i__7951__auto___13670]));

var G__13671 = (i__7951__auto___13670 + (1));
i__7951__auto___13670 = G__13671;
continue;
} else {
}
break;
}

var argseq__7958__auto__ = ((((0) < args__7957__auto__.length))?(new cljs.core.IndexedSeq(args__7957__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7958__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__13668 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13668) : cljs.core.atom.call(null,G__13668));
})();
var tag_neq = ((function (olds){
return (function (p1__13662_SHARP_,p2__13663_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__13662_SHARP_,p2__13663_SHARP_),p2__13663_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__13665_SHARP_,p2__13664_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__13665_SHARP_,p2__13664_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__13672__delegate = function (rest__13666_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__13666_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__13666_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__13666_SHARP_));

return news;
};
var G__13672 = function (var_args){
var rest__13666_SHARP_ = null;
if (arguments.length > 0) {
var G__13673__i = 0, G__13673__a = new Array(arguments.length -  0);
while (G__13673__i < G__13673__a.length) {G__13673__a[G__13673__i] = arguments[G__13673__i + 0]; ++G__13673__i;}
  rest__13666_SHARP_ = new cljs.core.IndexedSeq(G__13673__a,0);
} 
return G__13672__delegate.call(this,rest__13666_SHARP_);};
G__13672.cljs$lang$maxFixedArity = 0;
G__13672.cljs$lang$applyTo = (function (arglist__13674){
var rest__13666_SHARP_ = cljs.core.seq(arglist__13674);
return G__13672__delegate(rest__13666_SHARP_);
});
G__13672.cljs$core$IFn$_invoke$arity$variadic = G__13672__delegate;
return G__13672;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq13667){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13667));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__13675_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__13675_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__13676_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__13676_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__13683_13689 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__13684_13690 = null;
var count__13685_13691 = (0);
var i__13686_13692 = (0);
while(true){
if((i__13686_13692 < count__13685_13691)){
var i_13693 = chunk__13684_13690.cljs$core$IIndexed$_nth$arity$2(null,i__13686_13692);
var G__13687_13694 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13693) : ith_item__$1.call(null,i_13693));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13687_13694) : f__$1.call(null,G__13687_13694));

var G__13695 = seq__13683_13689;
var G__13696 = chunk__13684_13690;
var G__13697 = count__13685_13691;
var G__13698 = (i__13686_13692 + (1));
seq__13683_13689 = G__13695;
chunk__13684_13690 = G__13696;
count__13685_13691 = G__13697;
i__13686_13692 = G__13698;
continue;
} else {
var temp__4657__auto___13699 = cljs.core.seq(seq__13683_13689);
if(temp__4657__auto___13699){
var seq__13683_13700__$1 = temp__4657__auto___13699;
if(cljs.core.chunked_seq_QMARK_(seq__13683_13700__$1)){
var c__7656__auto___13701 = cljs.core.chunk_first(seq__13683_13700__$1);
var G__13702 = cljs.core.chunk_rest(seq__13683_13700__$1);
var G__13703 = c__7656__auto___13701;
var G__13704 = cljs.core.count(c__7656__auto___13701);
var G__13705 = (0);
seq__13683_13689 = G__13702;
chunk__13684_13690 = G__13703;
count__13685_13691 = G__13704;
i__13686_13692 = G__13705;
continue;
} else {
var i_13706 = cljs.core.first(seq__13683_13700__$1);
var G__13688_13707 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_13706) : ith_item__$1.call(null,i_13706));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__13688_13707) : f__$1.call(null,G__13688_13707));

var G__13708 = cljs.core.next(seq__13683_13700__$1);
var G__13709 = null;
var G__13710 = (0);
var G__13711 = (0);
seq__13683_13689 = G__13708;
chunk__13684_13690 = G__13709;
count__13685_13691 = G__13710;
i__13686_13692 = G__13711;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
