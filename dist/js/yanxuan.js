function Banner(){}$.extend(Banner.prototype,{init:function(t){if(this.item_list=$(t.item_list),console.log(this.item_list),this.left_btn=$(t.left_btn),this.right_btn=$(t.right_btn),this.btn_list=$(t.btn_list),this.nowIndex=0,this.item_num=this.item_list.length,this.ul=$(t.ul),this.item_width=this.item_list.outerWidth(),0==this.left_btn.length&&0==this.right_btn.length&&0==this.btn_list.length)return this.autoPlay(),0;this.bindEvent(),this.autoPlay()},bindEvent:function(){this.left_btn.click($.proxy(this.prev,this)),this.right_btn.click($.proxy(this.next,this)),this.btn_list.mouseover($.proxy(this.toIndex,this)),this.btn_list.mouseover($.proxy(this.stopPlay,this)),this.btn_list.mouseout($.proxy(this.autoPlay,this)),this.item_list.mouseover($.proxy(this.stopPlay,this)),this.item_list.mouseout($.proxy(this.autoPlay,this))},next:function(){this.nowIndex==this.item_num-1?(this.nowIndex=1,this.ul.css({left:0})):this.nowIndex++,this.animate()},prev:function(){0==this.nowIndex?(this.nowIndex=this.item_num-2,this.ul.css({left:-(this.item_num-1)*this.item_width})):this.nowIndex--,this.animate()},toIndex:function(t){var i=t.target||t.srcElement;this.nowIndex=$(i).index(),this.animate()},animate:function(){this.ul.stop().animate({left:-this.item_width*this.nowIndex});var t=this.nowIndex==this.item_num-1?0:this.nowIndex;this.btn_list.eq(t).addClass("bannerActive").siblings("li").removeClass("bannerActive")},autoPlay:function(){this.autoTimer=setInterval(function(){this.next()}.bind(this),1e3)},stopPlay:function(){clearInterval(this.autoTimer)}});var banner1=new Banner;banner1.init({item_list:".sowing-top li",left_btn:" #sowing-map-top .to-left",right_btn:"#sowing-map-top .to-right",btn_list:"#top-index-list li",ul:".sowing-top"});var banner2=new Banner;banner2.init({item_list:".sowing-w-img li",left_btn:" .w-img-l .to-left",right_btn:".w-img-l .to-right",btn_list:".w-list-index li",ul:".sowing-w-img"});var banner3=new Banner;function countDown(){var h=new Date("2018/10/25 22:00:00");function t(){var t=new Date,i=(h.getTime()-t.getTime())/1e3;if(0<i){var n=parseInt(i/86400),e=parseInt(i/3600%24),s=parseInt(i/60%60),o=parseInt(i%60);n<10&&(n="0"+n),e<10&&(e="0"+e),s<10&&(s="0"+s),o<10&&(o="0"+o),hour.innerHTML=e,minute.innerHTML=s,second.innerHTML=o}else alert("活动结束")}setInterval(function(){t()},1e3),t()}banner3.init({item_list:".sowing-a-img li",left_btn:" .a-img .to-left",right_btn:".a-img .to-right",ul:".sowing-a-img"}),countDown();