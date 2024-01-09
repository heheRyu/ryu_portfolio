$(document).ready(function(){
    let ww=$(window).width();
    let wh=$(window).height();
    let before_time=new Date().getTime();
    let now_time=new Date().getTime();
    let box_index=0;
    let direction='';
    let width_index=0;
    layout();
    $(window).resize(function(){
        layout();
    })
    function layout(){
        let ww=$(window).width();
        let wh=$(window).height();
        if(ww>=750){
        $(".wrap,.out_wrap").css({
            width:ww*3,
            height:wh*3,
        })
        $(".menu").css({
            width:ww*0.03,
            height:ww*0.03,
            top:ww*0.015,
            right:ww*0.02
        })
        $(".menu").addClass("hide");
        $(".open_menu").css({
            width:ww*0.12,
            height:wh,
            top:0,
            right:0
        })
        $(".click").css({
            right:ww*0.02,
            top:ww*0.0014
        })
        $(".click_menu1").css({
            marginTop:ww*0.1,
        })
        $(".click_menu2,.click_menu4").css({
            marginTop:ww*0.04,
            marginBottom:ww*0.04
        })
        $(".page_wrap").css({
            width:ww*3,
            height:wh
        })
        $(".page,.pagey1_in").css({
            width:ww,
            height:wh
        })
        $(".pagey_1,.pagey_2").css({
            left:ww*2
        })
        $(".pagey_2").css({
            bottom:0
        })
        $(".pagex1_a:first-child,.pagex1_a:last-child,.pagex2_a:first-child,.pagex3_a:first-child,.pagey2_a:first-child,.y1_in_txt:first-child").css({
            opacity: 0,
            left:0,
            fontSize:ww*0.04
        })
        $(".pagex1_a:first-child,.pagex2_a:first-child,.pagex3_a:first-child,.pagey2_a:first-child,.y1_in_txt").css({
            marginTop:ww*0.037
        })
        $(".pagex1_a:nth-child(2),.pagex2_a:nth-child(2),.pagex3_a:nth-child(2),.pagey2_a:nth-child(2),.y1_in_txt:nth-child(2)").css({
            left:ww*0.15,
            width:ww*0.03,
            height:ww*0.0042,
            marginTop:ww*0.095
        })
        $(".pagex1_a:last-child").css({
            marginTop:ww*0.34
        })
        $(".but").css({
            width:ww*0.0213,
            height:ww*0.0397,
            top:ww*0.25
        })
        $(".left_but").css({
            left:ww*0.025
        })
        $(".right_but").css({
            right:ww*0.025
        })
        $(".pagey1_move").css({
            width:ww*4,
            height:wh,
            top:0,
            left:0
        })
        $(".about_in,.sk").css({
            fontSize:ww*0.01,
            left:ww*0.3
        })
        $(".sk").css({
            left:ww*0.255
        })
        $(".my1").css({
            top:ww*0.16,
        })
        $(".my1,.y2_in,.click").css({
            fontSize:ww*0.015
        })
        $(".my1 span").css({
            fontSize:ww*0.0155
        })
        $(".my2").css({
            width:ww*0.586,
            height:ww*0.0006,
            left:ww*0.207,
            top:ww*0.225
        })
        $(".my4,.my6").css({
            top:ww*0.325
        })
        $(".my4").css({
            left:ww*0.279
        })
        $(".my5").css({
            left:ww*0.6097
        })
        $(".my6").css({
            left:ww*0.59
        })
        $(".my3,.my5").css({
            top:ww*0.2725
        })
        $(".my_round").css({
            width:ww*0.12 ,
            height:ww*0.023,
            borderRadius:ww*0.1,
            top:ww*0.27,
            left:ww*0.234
        })
        $(".my_round1").css({
            left:ww*0.279
        })
        $(".my_round2").css({
            width:ww*0.095,
            left:ww*0.59
        })
        $(".con").css({
            width:ww*0.05,
            height:ww*0.05,
            top:ww*0.205,
            left:ww*0.613,
            fontSize:ww*0.01
        })
        $(".con_name,.skill_name1,.skill_name3,.y1_in_but,.y1_in_but2,.my3,.my5,.click").css({
            fontSize:ww*0.014,
        })
        $(".con_name,.skill_name1").css({
            top:ww*0.155
        })
        $(".con_name2,.con_name3,.con_name4").css({
            top:ww*0.263,
        })
        $(".con_name").css({
            left:ww*0.635
        })
        $(".con_name2,.con_name5").css({
            left:ww*0.613
        })
        $(".con_name3,.con_name6").css({
            left:ww*0.673
        })
        $(".con_name4,.con_name7").css({
            left:ww*0.733
        })
        $(".con_name5,.con_name6,.con_name7").css({
            top:ww*0.358
        })
        $(".sk_con2,.sk_con5").css({
            marginLeft:ww*0.06
        })
        $(".sk_con3,.sk_con6").css({
            marginLeft:ww*0.12
        })
        $(".sk_con4,.sk_con5,.sk_con6").css({
            marginTop:ww*0.095
        })
        $(".skill_name2").css({
            top:ww*0.205
        })
        $(".skill_name4").css({
            top:ww*0.33
        })
        $(".skill_name2,.skill_name4").css({
            left:ww*0.234
        })
        $(".my_round3,.my_round4").css({
            width:ww*0.127,
            top:ww*0.1505
        })
        $(".my_round3").css({
            width:ww*0.118,
            left:ww*0.613
        })
        $(".my_round5").css({
            width:ww*0.18,
            top:ww*0.2755
        })
        $(".y2_in").css({
            left:ww*0.51,
            marginLeft:ww*-0.11,
            top:ww*0.23
        })
        $(".skill_name3,.y2_in2,.y2_in3").css({
            top:ww*0.28,
        })
        $(".y2_in3").css({
            left:ww*0.683
        })
        $(".y2_img").css({
            top:ww*0.229,
            left:ww*0.367,
            width:ww*0.02,
            height:ww*0.02
        })
        $(".y2_img2").css({
            top:ww*0.278,
            left:ww*0.368
        })
        $(".y2_img3").css({
            top:ww*0.278,
            left:ww*0.54
        })
        $(".y1_in_img1").css({
          width:ww*0.33,
          height:ww*0.2731,
          top:ww*0.145,
          left:ww*0.144
        })
        $(".y1_in_img2").css({
            width:ww*0.09,
            height:ww*0.179,
            left:ww*0.42,
            top:ww*0.24
        })
        $(".y1_in_txt2").css({
            fontSize:ww*0.01,
            left:ww*0.56,
            top:ww*0.15
        })
        $(".y1_in_but,.y1_in_but2").css({
            top:ww*0.348,
            left:ww*0.578
        })
        $(".y1_in_but2").css({
            left:ww*0.7
        })
        $(".my_round6,.my_round7").css({
            width:ww*0.11,
            top:ww*0.346,
            left:ww*0.56
        })
        $(".my_round7").css({
            left:ww*0.677
        })

        $(".pagey1_in4 .y1_in_but,.pagey1_in4 .y1_in_but2").css({
            top:ww*0.38
        })
        $(" .pagey1_in4 .my_round6,.pagey1_in4 .my_round7").css({
            top:ww*0.378
        })

        $(".in_move_img1").css({
            width:ww*0.304,
            height:ww*0.185,
            top:ww*0.16,
            left:ww*0.158,
        })
        $(".in_move_img2").css({
            width:ww*0.08,
            height:ww*0.17,
            top:ww*0.246,
            left:ww*0.425
        })
        $(".movebox_in_img1").css({
            width:ww*0.304,
            height:ww*0.185,
            top:0,
            left:0
        })
        $(".movebox_in_img2").css({
            width:ww*0.08,
            height:ww*0.17
        })
        }
//===================모바일==========================
        else if(ww<750){
    $(".swiper,.mo_out_wrap").css({
        width:ww,
        height:wh
    })
    $(".swiper-wrapper").css({
        width:ww,
        height:wh*8,
    })
    $(".pagex1_a_mo,.pagex2_a_mo,.pagex3_a_mo,.pagey2_a_mo,.y1_tit").css({
        left:(ww*0.5)/1.35,
        fontSize:ww*0.09
    })
    $(".pagex1_a_mo").css({
        left:ww*0.135,
        top:ww*0.7
    })
    $(".pagex3_a_mo").css({
        left:(ww*0.5)/1.23,
    })
    $(".pagex2_a_mo:first-child,.pagex3_a_mo:first-child,.pagey2_a_mo:first-child,.y1_tit").css({
        top:ww*0.2,
    }) 
    $(".pagex1_a_mo:nth-child(2)").css({
        left:ww*0.15,
        width:ww*0.05,
        height:ww*0.007,
        marginTop:ww*0.17
    })
    $(".pagex2_a_mo:nth-child(2),.pagex3_a_mo:nth-child(2),.pagey2_a_mo:nth-child(2),.y1_in").css({
        left:ww*0.475,
        width:ww*0.05,
        height:ww*0.007,
        marginTop:ww*0.33
    })
    $(".pagex1_a_mo:last-child").css({
        marginTop:ww*0.25
    })
    $(".about_in").css({
        // fontSize:ww*0.04,
        fontSize:ww*0.043,
        left:ww*0.5
    })
    $(".sk").css({
        fontSize:ww*0.01,
        left:ww*0.13
    })
    $(".my1").css({
        top:ww*0.42,
        left:(ww*0.5)/2.17
    })
    $(".my1 span").css({
        // fontSize:ww*0.042
        fontSize:ww*0.045
    })
    $(".my2").css({
        width:ww*0.586,
        height:ww*0.0006,
        left:ww*0.207,
        top:ww*0.69
        // top:ww*0.68
    })
    $(".my3").css({
        top:ww*0.8154,
        left:(ww*0.5)/1.29
    })
    $(".my4").css({
        top:ww*0.94,
        left:(ww*0.5)/3.2
    })
    $(".my5").css({
        top:ww*1.295,
        left:(ww*0.5)/1.197
    })
    $(".my6").css({
        top:ww*1.42,
        left:(ww*0.5)/3.2
    })
    $(".my4,.my6").css({
        fontSize:ww*0.032
    })
    $(".my_round").css({
        width:ww*0.3,
        height:ww*0.062,
        borderRadius:ww*0.1,
        top:ww*0.81
    })
    $(".my_round1").css({
        left:ww*0.3482
    })
    $(".my_round2").css({
        width:ww*0.242,
        top:ww*1.29,
        left:ww*0.375
    })

    $(".con").css({
        width:ww*0.12,
        height:ww*0.12,
        top:ww*0.42,
        left:(ww*0.5)/1.665,
        fontSize:ww*0.025
    })
    $(".skill_name1,.skill_name3,.y1_in_but,.y1_in_but2,.my3,.my5,.y2_in_mo").css({
        fontSize:ww*0.04
    })
    $(".skill_name1").css({
        top:ww*0.96,
        left:(ww*0.5)/1.32,
    })
    $(".skill_name3").css({
        top:ww*1.314,
        left:(ww*0.5)/1.635
    })
    $(".con_name2,.con_name3,.con_name4").css({
        top:ww*0.555,
    })
    $(".con_name2,.con_name5").css({
        left:ww*0.3
    })
    $(".con_name3,.con_name6").css({
        left:ww*0.44
    })
    $(".con_name4,.con_name7").css({
        left:ww*0.58
    })
    $(".con_name5,.con_name6,.con_name7").css({
        top:ww*0.785
    })
    $(".sk_con2,.sk_con5").css({
        marginLeft:ww*0.14
    })
    $(".sk_con3,.sk_con6").css({
        marginLeft:ww*0.28
    })
    $(".sk_con4,.sk_con5,.sk_con6").css({
        marginTop:ww*0.23
    })
    $(".skill_name2").css({
        top:ww*1.08,
    })

    $(".skill_name4").css({
        top:ww*1.43
    })
    $(".skill_name2,.skill_name4,.y1_in_txt2").css({
        fontSize:ww*0.032
    })
    $(".my_round4").css({
        width:ww*0.326,
        top:ww*0.948,
        left:(ww*0.5)/1.5
    })
    $(".my_round5").css({
        width:ww*0.47,
        top:ww*1.3,
        left:(ww*0.5)/1.9
    })
    $(".y1_tit").css({
        left:(ww*0.5)/2.75
    })
    $(".swiper-slide:nth-child(5) .y1_tit").css({
        left:(ww*0.5)/6.7
    })
    $(".swiper-slide:nth-child(6) .y1_tit").css({
        left:(ww*0.5)/1.27
    })
    $(".swiper-slide:nth-child(7) .y1_tit").css({
        left:(ww*0.5)/3.835
    })
    $(".pagey2_a_mo:first-child").css({
        left:(ww*0.5)/1.51
    })
    $(".text_box").css({
        width:ww*0.8,
        height:wh,
        top:0,
        left:(ww*0.5)/4.9
    })
    $(".y1_in_img1").css({
        width:ww*0.7,
        height:ww*0.58,
        top:ww*0.42,
        left:ww*0.125
    })
    $(".y1_in_img2").css({
        width:ww*0.19,
        height:ww*0.375,
        top:ww*0.62,
        left:ww*0.69,
    })
    $(".y1_in_txt2").css({
        top:ww*1.125,
        left:0
    })
    $(".y1_in_but").css({
        left:(ww*0.5)/1.27,
        top:ww*1.595
    })
    $(".y1_in_but2").css({
        left:(ww*0.5)/1.23,
        top:ww*1.7
    })
    $(".my_round6,.my_round7").css({
        left:(ww*0.5)/1.43
    })
    $(".my_round6").css({
        top:ww*1.59
    })
    $(".my_round7").css({
        top:ww*1.7
    })
    $(".in_move_img1").css({
        top:ww*0.45,
        left:(ww*0.5)/3.2,
        width:ww*0.641,
        height:ww*0.386
    })
    $(".in_move_img2").css({
        top:ww*0.63,
        left:(ww*0.5)/0.712,
        background:'green',
        width:ww*0.172,
        height:ww*0.355
    })
    $(".movebox_in_img1").css({
        width:ww*0.641,
        height:ww*0.386
    })
    $(".y2_in_mo").css({
        top:ww*0.6,
        left:(ww*0.5)/2.2
    })
    $(".y2_in2_mo").css({
        top:ww*0.9,
        left:(ww*0.5)/1.95
    })
    $(".y2_in3_mo").css({
        top:ww*0.9,
        left:(ww*0.5)/0.745
    })
    $(".y2_img_mo").css({
        width:ww*0.04,
        height:ww*0.04,
        left:(ww*0.5)/2.9,
        top:ww*0.604
    })
    $(".y2_img2_mo").css({
        top:ww*0.9,
        left:(ww*0.5)/2.4
    })
    $(".y2_img3_mo").css({
        top:ww*0.9,
        left:(ww*0.5)/0.8
    })
    $(".click_mo").css({
        left:(ww*0.5)/3.7,
        width:ww*0.1,
        height:ww*0.1,
        top:ww*0.025
    })
    $(".click_menu2_mo,.click_menu4_mo").css({
        marginLeft:ww*0.05,
        marginRight:ww*0.05
    })
    $(".mo_menu").css({
        bottom:0,
        width:ww,
        height:ww*0.15
    })
        }
}

// ==========레이아웃 영역 끝==========

    function img_tr(a,b){
        let fade_num=0;

        for(i=0;i<=4;i++){
            b=b+1;
            $('.img_box').eq(i).attr({
                src:`./img/ryu${b}.svg`
            });
            $('.img_box').fadeOut(200);
          }
          $('.img_box').eq(fade_num).fadeIn(200);
                setInterval(function(){
                fade_num++;
                if(fade_num>a){
                    fade_num=b;
                }
                $('.img_box').eq(fade_num).fadeIn(500);
                },800)
                
    }


// ====물어볼것====
    $(window).resize(function() {
        if(ww>=750){
            if(box_index==0){
                $(".pagex1_a:first-child,.pagex1_a:last-child").animate({
                    opacity: 1,
                    left:ww*0.144
                },1000)
            }
        }
    });

    img_tr(5,0);
    if(box_index==0){
        $(".pagex1_a:first-child,.pagex1_a:last-child").animate({
            opacity: 1,
            left:ww*0.144
        },1000)
    }


    // ==========PC 스크롤 영역==========
    let img_num_at=1;
    function scroll_down(){
        ww=$(window).width();
        wh=$(window).height();

        if(box_index<2){
            box_index++;
            direction='down';
            $(".wrap").animate({
                left:-box_index*ww,
            },'slow')
            if(box_index==0){
                img_tr(5,0);
           }
           else if(box_index==1){
               img_tr(10,5);
               $(".pagex2_a:first-child").animate({
                    opacity: 1,
                    left:ww*0.144
                },1200)
           }else if(box_index==2){
               img_tr(15,10);
               $(".pagex3_a:first-child").animate({
                    opacity: 1,
                    left:ww*0.144
                },1200)
           }
            before_time=now_time;
        }else if(box_index>=2 && width_index<2){
            width_index++;
            direction='down';
            $(".wrap").animate({
                top:-width_index*wh
            },'slow')
            if(width_index==1){
                img_tr(20,15);
                $(".y1_in_txt:first-child").animate({
                    opacity: 1,
                    left:ww*0.144
                },1200)
                
            }else if(width_index==2){
                img_tr(25,20);
                $(".pagey2_a:first-child").animate({
                    opacity: 1,
                    left:ww*0.144
                },1200)
            }
            before_time=now_time;
        }
        if(box_index>0 && width_index>=0){
            $(".menu").removeClass("hide");
        }else{
            $(".menu").addClass("hide");
        }
    }

    function scroll_up(){
        ww=$(window).width();
        wh=$(window).height();
        if(box_index>0 && width_index<=0){
            box_index--;
            direction='up';
            $(".wrap").animate({
                left:-box_index*ww
            },'slow')
            if(box_index==0){
                img_tr(5,0);
            }
            else if(box_index==1){
                img_tr(10,5);
            }
            
            before_time=now_time;
        }else if(box_index<3 && width_index>0){
            width_index--;
            direction='up';
            $(".wrap").animate({
                top:-width_index*wh
            },'slow')
            if(box_index==2){
                img_tr(15,10);
            }
            if(width_index==1){
                img_tr(20,15);
            }else if(width_index==2){
                img_tr(25,20);
            }
            before_time=now_time;
        }
        if(box_index>0 && width_index>=0){
            $(".menu").removeClass("hide");
        }else{
            $(".menu").addClass("hide");
        }
    }

    $(window).on("mousewheel",function(event){
        $(".wrap").clearQueue();
        now_time=new Date().getTime();

        if(0>event.originalEvent.wheelDeltaY){
            if(direction=='down'){
                if(before_time+100<now_time){
                    if(box_index>=0){
                        scroll_down();
                    }else{
                        scroll_up();
                    }
                }
            }else{
                if(box_index>=0){
                    scroll_down();
                }else{
                    scroll_up();
                }
            }
        }else{
            if(direction=='up'){
                if(before_time+100<now_time){
                    if(box_index<=4){
                        scroll_up();
                    }else{
                        scroll_down();
                    }
                }
            }else{
                if(box_index<4){
                    scroll_up();
                }else{
                    scroll_down();
                }
            }
        }
    })

// ==========PC슬라이드 영역==========

    let num=0;
    $(".left_but").click(function(){
        num--;
        if(num<=0){
            num=3;
        }
        $(".pagey1_in").last().prependTo(".pagey1_move");
        $(".pagey1_move").css({
            left:-ww
        }).animate({
            left:0
        },1000)
    })

    $(".right_but").click(function(){
        num++;
        if(num>3){
            num=0;
        }
        $(".pagey1_move").animate({
            left:-ww
        },1000,function(){
            $(".pagey1_in").first().appendTo(".pagey1_move");
            $(".pagey1_move").css({
                left:0
            })
        })
    })

    $(".pc_ver .y1_in_img").hover(function(){
        $(".movebox_in_img1").animate({
            top:ww*1.2
        },800)
    })
// ==========PC 메뉴 영역==========

    $(function(){
        $(".menu").mouseenter(function(){
            $(this).attr("src","./img/menu.gif");
            },function(){
                $(this).attr("src","./img/menu.png");
            });
        });

        $(".menu").click(function(){
            let menu_num=0;
            var submenu = $(this).next("ul");
            if(submenu.is(":visible")){
                submenu.slideUp();
            }else{
                submenu.slideDown();
            }
            if(menu_num>=0){
                $(this).attr("src","./img/menu2.png");
                menu_num=1;
            }
        });

// ==========PC 우측 메뉴 영역==========
$(".click").eq(0).click(function(){
  box_index=0;
    $(".wrap").animate({
        top:0,
        left:0
    },800)
    $(".open_menu").css({
        display:"none"
    })
})
$(".click").eq(1).click(function(){
    box_index=1;
    width_index=0;
    $(".menu").css({
        display:"block"
    })
    $(".wrap").animate({
        top:0,
        left:-1*ww
    })
    $(".open_menu").css({
        display:"none"
    })
})
$(".click").eq(2).click(function(){
    box_index=2;
    width_index=0;
    $(".wrap").animate({
        top:0,
        left:-2*ww
    })
    $(".menu").css({
        display:"block"
    })
    $(".open_menu").css({
        display:"none"
    })
})
$(".click").eq(3).click(function(){
    box_index=2;
    width_index=1;
    $(".wrap").animate({
        top:-1*wh,
        left:-2*ww
    })
    $(".menu").css({
        display:"block"
    })
    $(".open_menu").css({
        display:"none"
    })
})
$(".click").eq(4).click(function(){
    box_index=2;
    width_index=1;
    $(".wrap").animate({
        top:-2*wh,
        left:-2*ww
    })
    $(".menu").css({
        display:"block"
    })
    $(".open_menu").css({
        display:"none"
    })
})

//==========모바일 하위 버튼 클릭영역==========    
$('.click_mo').click(function(){        
    let click_i=$(this).index();
    //  alert(click_i);
     let tr_x=$('.swiper-slide').height()+parseInt($('.swiper-slide').css('marginBottom'));
     $('.swiper-wrapper').css({
         transform:`translate3d(0px,-${tr_x*click_i}px,0px)`
     })
 
 })
//==========모바일 배경 변화==========    
  
    let fade_num_mo=0;
    setInterval(function(){
    fade_num_mo++;
    if(fade_num_mo>25){
        fade_num_mo=1;
    }
    $('.img_box_mo').eq(0).attr({
        src:`./img/ryu${fade_num_mo}.svg`
    })    
    },1500)

    

//==========스와이프 영역==========
        const swiper = new Swiper('.swiper',{
            direction:'vertical',
            loop:false, 
            pagination:{
                el:'.swiper-pagination',
            },
            navigation:{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev'
            },
            scrollbar: {
                el:'.swiper-scrollbar'
            },
            spaceBetween: 50,//슬라이드 간격
            })

            //1.포트폴리오 링크 연결할것
            //2.버튼값 이프로 각각 값줘서 이동하게하기
            //3.배경 무한반복으로

})