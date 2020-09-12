document.addEventListener("DOMContentLoaded",function (){
var btn=document.querySelectorAll('.btn');
var page=document.querySelectorAll('.page');
var cmt=document.querySelectorAll('.cmt');
var arrange=document.querySelectorAll('.arrange');
var blue=document.querySelectorAll('.row_blue');
var index=0;
var k=0;
    for(var i=0;i<btn.length;i++){
        btn[i].onclick=function (){
            for (var m=0;m<btn.length;m++){
                btn[m].classList.remove('change_color');
            }
            this.classList.add('change_color');
            var ds = this.getAttribute('data-ds');
            var page_active=document.getElementById(ds);
            for(var j=0;j<page.length;j++){
                page[j].classList.remove('active');
            }
            page_active.classList.add('active');
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
            console.log(arrange[a]);
            arrange[a].classList.add('move');
            blue[a].classList.add('go');
        }
    },3000)
},false)