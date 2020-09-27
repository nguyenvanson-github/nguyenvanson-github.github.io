document.addEventListener("DOMContentLoaded",function (){
var btn=document.querySelectorAll('.btn1');
var btn_select=document.querySelectorAll('.btn_select');
var page=document.querySelectorAll('.page');
var cmt=document.querySelectorAll('.cmt');
var arrange=document.querySelectorAll('.arrange');
var blue=document.querySelectorAll('.row_blue');
var cfg=document.getElementById('cfg');
var setting=document.querySelectorAll('.setting');
var color=document.querySelectorAll('.color');
var element_change=document.querySelectorAll('.color_change');
var group=document.querySelectorAll('.img_group');
var xanh=document.querySelectorAll('.xanh');
var bg_black=document.getElementById('black_background');
var tick=document.getElementById('tick');
var select_ani=document.getElementById('select_ani');
var index=0;
var k=0;
var n=0;
var home=document.getElementById('home');
console.log(home.getAttribute('page-number'));
    for (var x=0;x<xanh.length;x++){
        xanh[x].onclick=function (){
            bg_black.classList.add('bg_active');
            var img_id=this.getAttribute('data-images');

            console.log(img_id);
            var images=document.getElementById(img_id);
            images.classList.add('img_active');
            tick.onclick=function (){
                bg_black.classList.remove('bg_active');
                images.classList.remove('img_active');
            }
        }
    }

    for(var b=0;b<btn_select.length;b++){
        btn_select[b].onclick=function (){
            for (var c=0;c<btn_select.length;c++){
                btn_select[c].classList.remove('change_bg');
                group[c].classList.remove('hienlen');
            }
            this.classList.add('change_bg');
            var data=this.getAttribute('data-img');
            var group_img=document.getElementById(data);
            group_img.classList.add('hienlen');
        }
    }
    cfg.onclick=function (){
        n++;
        if(n%2==0) {
            setting[0].classList.remove('move_out');
            setting[0].classList.add('move_in');
        }else {
            setting[0].classList.add('move_out');
            setting[0].classList.remove('move_in');
        }
    }
    for (var c=0;c<color.length;c++){
        color[c].onclick=function () {
            var change_color = this.getAttribute('data-color');
            for (var e=0;e<element_change.length;e++) {
                element_change[e].classList.remove('change_blue');
                element_change[e].classList.remove('change_red');
                element_change[e].classList.remove('change_green');
                element_change[e].classList.remove('change_yellow1');
                element_change[e].classList.remove('change_pink');
                element_change[e].classList.remove('change_violet');
                element_change[e].classList.remove('change_yellow2');
                element_change[e].classList.remove('change_brown');
                element_change[e].classList.remove('change_orange');
                element_change[e].classList.add(change_color);
            }
        }
    }
    var page_current_number=1;
    var page_current=page[0];
    for(var i=0;i<btn.length;i++){
        btn[i].onclick=function (){
            for (var m=0;m<btn.length;m++){
                btn[m].classList.remove('change_color');
            }
            this.classList.add('change_color');
            var ds = this.getAttribute('data-ds');
            var page_active=document.getElementById(ds);
            var page_active_number=parseInt(page_active.getAttribute('page-number'));
            var ani=select_ani.value;
            for(var j=0;j<page.length;j++){

                page[j].classList.remove('page_ani1_left_in');
                page[j].classList.remove('page_ani1_left_out');
                page[j].classList.remove('page_ani1_right_in');
                page[j].classList.remove('page_ani1_right_out');
                page[j].classList.remove('page_ani2_left_in');
                page[j].classList.remove('page_ani2_left_out');
                page[j].classList.remove('page_ani2_right_in');
                page[j].classList.remove('page_ani2_right_out');
                page[j].classList.remove('page_ani3_left_in');
                page[j].classList.remove('page_ani3_left_out');
                page[j].classList.remove('page_ani3_right_in');
                page[j].classList.remove('page_ani3_right_out');
                page[j].classList.remove('page_ani4_left_in');
                page[j].classList.remove('page_ani4_left_out');
                page[j].classList.remove('page_ani4_right_in');
                page[j].classList.remove('page_ani4_right_out');
                page[j].classList.remove('page_ani5_left_in');
                page[j].classList.remove('page_ani5_left_out');
                page[j].classList.remove('page_ani5_right_in');
                page[j].classList.remove('page_ani5_right_out');
                page[j].classList.remove('page_ani6_left_in');
                page[j].classList.remove('page_ani6_left_out');
                page[j].classList.remove('page_ani6_right_in');
                page[j].classList.remove('page_ani6_right_out');
                page[j].classList.remove('page_ani7_left_in');
                page[j].classList.remove('page_ani7_left_out');
                page[j].classList.remove('page_ani7_right_in');
                page[j].classList.remove('page_ani7_right_out');
                page[j].classList.remove('page_ani8_left_in');
                page[j].classList.remove('page_ani8_left_out');
                page[j].classList.remove('page_ani8_right_in');
                page[j].classList.remove('page_ani8_right_out');
            }
            // console.log(typeof (page_active.getAttribute('page-number')));
            page_active.classList.add('active');
            if(page_active_number>page_current_number){
                // console.log("lon hon");
                page_active.classList.add(ani+"_left_in");
                page_current.classList.add(ani+"_left_out");
                page_current.classList.remove('active');

            }else if(page_active_number==page_current_number){
                page_active.classList.add('active');
            }
            else if(page_active_number<page_current_number) {
                page_active.classList.add(ani+"_right_in");
                page_current.classList.add(ani+"_right_out");
                page_current.classList.remove('active');
            }
            // page_active.classList.add(ani);
            page_current=page_active;
            page_current_number=parseInt(page_current.getAttribute('page-number'));
            // console.log(typeof (page_number_current));

        }
    }
    function auto(){
        var thoigian=setInterval(function (){
            var job=document.querySelectorAll('.job');
            var length=job.length;
            var active=document.querySelector('display');
            for (var j=0;j<length;j++){
                job[j].classList.remove('display');
            }
            if(index<length){
                job[index].classList.add('display');
            }
            else {
                index=0;
                job[index].classList.add('display');
            }
            index++;
        },2000)
    }
    auto();
    var cmt=document.querySelectorAll('.cmt');
    function sequence(){
        var time=setInterval(function (){
            var phantuhientai=cmt[k];
            k++;
            if(k<cmt.length){
                var phantutieptheo=cmt[k];
            }else {
                phantutieptheo=cmt[0];
                k=0;
            }
            phantuhientai.addEventListener("webkitAnimationEnd",function (){
                phantuhientai.classList.remove('active');
                phantuhientai.classList.remove('sequence_out');
            });
            phantutieptheo.addEventListener("webkitAnimationEnd",function (){
                phantutieptheo.classList.remove('sequence_come');
                phantutieptheo.classList.add('active');
            });
            phantuhientai.classList.add('sequence_out');
            phantutieptheo.classList.add('sequence_come');
        },4000)

    }
    sequence();
    // console.log()
    var tgain=setInterval(function (){
        for(var a=0;a<arrange.length;a++){
            // console.log(arrange[a]);
            arrange[a].classList.add('move');
            blue[a].classList.add('go');
        }
    },3000)
},false)