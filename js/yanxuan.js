
//大轮播图

function Banner(){}
        $.extend(Banner.prototype,{
            init: function(options){
                this.item_list = $(options.item_list);
                this.left_btn = $(options.left_btn);
                this.right_btn = $(options.right_btn);
                this.btn_list = $(options.btn_list);
                this.nowIndex = 0;
                this.item_num = this.item_list.length;
                this.ul = $(".sowing-con ul");
                this.item_width = this.item_list.width();
                if(this.left_btn.length == 0 && this.right_btn.lenght ==0 && this.btn_list.length == 0){
                    this.autoPlay();
                    return 0 ;
                }
                this.bindEvent();
                this.autoPlay();
            },
            bindEvent : function(){
                this.left_btn.click($.proxy(this.prev , this));
                this.right_btn.click($.proxy(this.next , this));
                this.btn_list.mouseover($.proxy(this.toIndex , this));
                this.btn_list.mouseover($.proxy(this.stopPlay , this));
                this.btn_list.mouseout($.proxy(this.autoPlay , this))
                this.item_list.mouseover($.proxy(this.stopPlay , this));
                this.item_list.mouseout($.proxy(this.autoPlay , this))
            },
            next:function(){
                if(this.nowIndex == this.item_num - 1){
                    this.nowIndex = 1 ;
                    this.ul.css({
                        left : 0
                    })
                }else{
                    this.nowIndex ++;
                }
                this.animate();
            },
            prev:function(){
                
                if( this.nowIndex == 0){
                    this.nowIndex = this.item_num - 2;
                    this.ul.css({
                        left : -(this.item_num - 1) * this.item_width
                    })
                }else{
                    this.nowIndex --;
                }

                this.animate();
            },
            toIndex:function(event){
                var target = event.target || event.srcElement;
                this.nowIndex = $(target).index();
                this.animate();
            },
            animate:function(){
                this.ul.stop().animate({
                    left : -this.item_width*this.nowIndex
                })
                var index = this.nowIndex == this.item_num - 1 ? 0 :this.nowIndex;
                this.btn_list.eq(index).addClass("bannerActive")
                .siblings("button").removeClass("bannerActive");
            },
            autoPlay : function(){
                this.autoTimer = setInterval(function(){
                    this.next();
                }.bind(this),2000)
            },
            stopPlay : function(){
               clearInterval(this.autoTimer)    
            }
        })
        var banner = new Banner();
        banner.init({
            item_list : ".sowing-con li",
            left_btn : ".to-left",
            right_btn : ".to-right",
            btn_list : ".sowing-index li" 
        })

//新品首发轮播图



// 限时购  倒计时
function countDown(){
    var d2 = new Date("2018/10/25 22:00:00")
    function time(){
        var d =new Date() 
        var  a = (d2.getTime()-d.getTime()) / 1000;
        if(a > 0){
            var nDay = parseInt(a /(60*60*24));
            var nHour = parseInt((a / (60*60)) % 24);
            var nMinute = parseInt((a / 60) % 60);
            var nSecond = parseInt(a % 60)
            if(nDay < 10){
                    nDay = "0" + nDay;
            }
            if(nHour < 10){
                    nHour = "0" + nHour;
            }
            if(nMinute < 10){
                nMinute = "0" + nMinute;
            }
            if(nSecond < 10){
                nSecond = "0" + nSecond;
            }
            hour.innerHTML = nHour
            minute.innerHTML = nMinute
            second.innerHTML = nSecond
        }else{
            alert("活动结束")
        }
    }
    setInterval(function(){
            time()
    }, 1000)
    time();
};
countDown()

			

