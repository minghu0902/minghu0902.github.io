System.register("chunks:///_virtual/BlockController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlayerController.ts"],(function(t){"use strict";var e,o,n,r,i,l,c,s,a,u,h,d,p,k;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,l=t._decorator,c=t.Prefab,s=t.view,a=t.instantiate,u=t.UITransform,h=t.math,d=t.Vec3,p=t.Component},function(t){k=t.PlayerController}],execute:function(){var B,f,v,g,y;i._RF.push({},"231bfsivD1NobWlsA4vDqxz","BlockController",void 0);var C=l.ccclass,m=l.property;t("BlockController",(B=C("BlockController"),f=m(c),B((y=e((g=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i))||this,n(e,"Block",y,r(e)),e.dir=-1,e.curBlock=null,e.nextBlock=null,e}o(e,t);var i=e.prototype;return i.start=function(){this.addBlock()},i.update=function(t){},i.addBlock=function(){this.curBlock=this.nextBlock;var t,e=0,o=s.getVisibleSize(),n=o.width,r=(o.height,a(this.Block)),i=r.getComponent(u).contentSize,l=i.width,c=i.height,p=this.node.getComponent(u),B=this.curBlock?p.convertToWorldSpaceAR(this.curBlock.position):null;e=-1===this.dir?n/2-50-l/2:n/2+50+l/2,t=(this.curBlock?B.y+c/2:0)+100+300+c/2+h.randomRangeInt(50,100);var f=p.convertToNodeSpaceAR(new d(e,t,0));r.setPosition(new d(f.x,f.y,0)),this.node.addChild(r),this.nextBlock=r,this.node.parent.getComponentInChildren(k).setTargetBlock(r),this.dir=-this.dir},e}(p)).prototype,"Block",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=g))||v));i._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BlockController.ts"],(function(e){"use strict";var n,t,o,r,i,a,l,c,u,s,p,f,d,y;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Node,c=e.profiler,u=e.Tween,s=e.Vec3,p=e.Label,f=e.director,d=e.Component},function(e){y=e.BlockController}],execute:function(){var g,m,b,h,v,k,w,B,z,C,M;i._RF.push({},"41e68QAMq1Hm4L38fH2Rugh","GameManager",void 0);var S=a.ccclass,E=a.property;e("GameManager",(g=S("GameManager"),m=E(l),b=E(l),h=E(l),v=E(l),g((B=n((w=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,o(n,"block",B,r(n)),o(n,"player",z,r(n)),o(n,"gameEnd",C,r(n)),o(n,"display",M,r(n)),n.score=0,n}t(n,e);var i=n.prototype;return i.start=function(){var e=this;c.hideStats(),this.player.on("jumpEnd",(function(){var n=e.block.getComponent(y),t=n.curBlock,o=n.nextBlock;n.addBlock(),new u(e.node).to(.5,{position:new s(e.node.position.x,e.node.position.y-(t?o.position.y-t.position.y:0))}).call((function(){e.score+=10,e.display.getChildByName("Score").getComponent(p).string=e.score.toString()})).start()}),this),this.player.on("end",(function(){e.gameEnd.active=!0}))},i.update=function(e){},i.onRestart=function(){f.loadScene("scene")},n}(d)).prototype,"block",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=n(w.prototype,"player",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),C=n(w.prototype,"gameEnd",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(w.prototype,"display",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=w))||k));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BlockController.ts","./GameManager.ts","./PlayerController.ts","./Util.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Util.ts"],(function(t){"use strict";var o,e,n,i,s,h,a,r,l,d;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,i=t.view,s=t.UITransform,h=t.Vec3,a=t.Input,r=t.Tween,l=t.Component},function(t){d=t.Utils}],execute:function(){var c;e._RF.push({},"5afda7yHLJKkbqCd5NHpVIm","PlayerController",void 0);var u=n.ccclass,g=(n.property,9.8);t("PlayerController",u("PlayerController")(c=function(t){function e(){for(var o,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(o=t.call.apply(t,[this].concat(n))||this).rotateNode=null,o.bodyNode=null,o.headNode=null,o.headNodePosition=null,o.isInTouch=!1,o.targetBlock=null,o.speed=0,o.gameOver=!1,o}o(e,t);var n=e.prototype;return n.start=function(){var t=i.getVisibleSize().height,o=this.node.getComponent(s);this.node.setPosition(new h(100,-t/2+o.contentSize.height/2+100,0)),this.rotateNode=this.node.getChildByName("Rotate"),this.bodyNode=this.rotateNode.getChildByName("Body"),this.headNode=this.rotateNode.getChildByName("Head"),this.headNodePosition=this.headNode.getPosition(),this.node.on(a.EventType.TOUCH_START,this.onTouchStart,this),this.node.on(a.EventType.TOUCH_END,this.onTouchEnd,this),this.node.on(a.EventType.TOUCH_CANCEL,this.onTouchCancel,this)},n.update=function(t){this.isInTouch&&(this.speed+=50*t)},n.setTargetBlock=function(t){this.targetBlock=t},n.onTouchStart=function(t){this.speed=70,this.isInTouch=!0,this.gameOver=!1,r.stopAll(),new r(this.bodyNode).to(1,{scale:new h(1,.5,1)}).start(),new r(this.headNode).to(1,{position:new h(this.headNode.position.x,this.headNode.position.y-this.bodyNode.getComponent(s).height/2)}).start()},n.onTouchEnd=function(t){var o=this;r.stopAll();var e=this.isJumpOnBlock(this.speed);e&&(new r(this.bodyNode).to(.3,{scale:new h(1,1,1)}).start(),new r(this.headNode).to(.3,{position:this.headNodePosition}).start(),new r(this.rotateNode).to(.5,{eulerAngles:new h(0,0,this.targetBlock.position.x<0?360:-360)}).call((function(){o.rotateNode.eulerAngles=new h(0,0,0)})).start(),new r(this.node).to(.5,{worldPosition:d.jumpTo_v3(e,300)},{easing:"sineInOut"}).call((function(){o.isInTouch=!1,o.gameOver?o.node.emit("end"):o.node.emit("jumpEnd")})).start())},n.onTouchCancel=function(t){r.stopAll(),new r(this.bodyNode).to(.3,{scale:new h(1,1,1)}).start(),new r(this.headNode).to(.3,{position:this.headNodePosition}).start()},n.isJumpOnBlock=function(t){var o=this.node.getComponent(s).contentSize,e=o.width,n=o.height,i=this.targetBlock.getComponent(s).contentSize,a=i.width,r=i.height,l=this.node.getWorldPosition(),d=this.targetBlock.getWorldPosition(),c=Math.atan(Math.abs(l.y-n/2-d.y-r/2)/Math.abs(l.x-d.x+d.x<0?-e/2-a/2:e/2+a/2)),u=Math.cos(c),p=Math.sin(c),y=Math.pow(t,2)*Math.pow(p,2)/(2*g),N=l.y-n/2+y-(d.y+r/2),w=t*p/g,m=Math.sqrt(2*g*N)/g,C=t*u*(N>0?w+m:2*w)*.7,P=this.targetBlock.position.x>0?l.x+C:l.x-C,T=new h(P,N>0?d.y+r/2+n/2:l.y,0);if(N>0&&P>=d.x-a/2-e&&P<=d.x+a/2+e){var f=this.targetBlock.getChildByName("Left"),v=this.targetBlock.getChildByName("Right"),B=this.targetBlock.getChildByName("Mid"),x=T.clone().subtract(f.worldPosition).length();T.x=f.worldPosition.x,T.clone().subtract(v.worldPosition).length()<x&&(x=T.clone().subtract(v.worldPosition).length(),T.x=v.worldPosition.x),T.clone().subtract(B.worldPosition).length()<x&&(x=T.clone().subtract(B.worldPosition).length(),T.x=B.worldPosition.x)}else this.gameOver=!0;return T},e}(l))||c);e._RF.pop()}}}));

System.register("chunks:///_virtual/Util.ts",["cc"],(function(t){"use strict";var r,u;return{setters:[function(t){r=t.cclegacy,u=t.math}],execute:function(){r._RF.push({},"4401fazwQFFDYhqPCozj4xj","Util",void 0);t("Utils",function(){function t(){}return t.jumpTo_v3=function(t,r){return{value:t,progress:this._jumpTo_progress(3,r)}},t.jumpTo_v2=function(t,r){return{value:t,progress:this._jumpTo_progress(2,r)}},t._jumpTo_progress=function(t,r){var n=t,e=Math.sqrt(r);return function(s,o,i,c){n>=t?n=1:n++;var p=u.lerp(s,o,c);if(2===n){var a=Math.abs(1-2*c);p+=r-Math.pow(e*a,2)}return p}},t}());r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});