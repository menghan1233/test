/**
 * Created by Administrator on 2018/10/11.
 */
$('.showpinpai').parent().mouseenter(function(){
    $('.pinpai1').show().siblings().hide();

});
$('.pinpai1').mouseleave(function(){
    $('.pinpai1').hide();
});
$('.showchexing').mouseenter(function(){
    $('.chexing').show().siblings().hide();
});
$('.chexing').mouseleave(function(){
    $('.chexing').hide();
});


$('.navimg2').click(function(){

    $('.navimg2').hide()
    $('.try').hide()
    $('.nav ul').hide()
    //console.log(1)
    $('.searchinput').show()
    $('.searchinput input').focus()
    $('.searchinput input').animate({
        'width': 750

    }, 1000);

});
$('.searchinput div').click(function(){
    $('.navimg2').show()
    $('.try').show()
    $('.nav ul').show()
    $('.searchinput ').hide()
    $('.searchinput input').css({
        "width":'0px'
    })

})

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById('left');
var right = document.getElementById('right');
var pagePrefix = 'slide';
var pageShift = 500;
var transitionPrefix = 'circle';
var svg = true;

function leftSlide() {
    if (click) {
        if (curpage == 1) curpage = 5;
        console.log('woek');
        sliding = true;
        curpage--;
        svg = true;
        click = false;
        for(k=1;k<=4;k++){
            var a1 = document.getElementById(pagePrefix + k);
            a1.className += ' tran';
        }
        setTimeout(()=>{
            move();
    },200);
    setTimeout(()=>{
        for(k=1;k<=4;k++){
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove('tran');
    };
},1400);
}
}


function rightSlide() {
    if (click) {
        if (curpage == 4) curpage = 0;
        console.log('woek');
        sliding = true;
        curpage++;
        svg = false;
        click = false;
        for(k=1;k<=4;k++){
            var a1 = document.getElementById(pagePrefix + k);
            a1.className += ' tran';
        }
        setTimeout(()=>{
            move();
    },200);
    setTimeout(()=>{
        for(k=1;k<=4;k++){
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove('tran');
    };
},1400);
}
}


function move() {
    if (sliding) {
        sliding = false;
        if (svg) {
            for (j = 1; j <= 9; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", (transitionPrefix + j) + " streak")
                console.log('streak');
            }
        } else {
            for (j = 10; j <= 18; j++) {
                var c = document.getElementById(transitionPrefix + j);
                c.classList.remove("steap");
                c.setAttribute("class", (transitionPrefix + j) + " streak")
                console.log('streak');
            }
        }

        // for(k=1;k<=4;k++){
        //   var a1 = document.getElementById(pagePrefix + k);
        //   a1.className += ' tran';
        // }

        setTimeout(() => {
            for (i = 1; i <= 4; i++) {
            if (i == curpage) {
                var a = document.getElementById(pagePrefix + i);
                a.className += ' up1';
            } else {
                var b = document.getElementById(pagePrefix + i);
                b.classList.remove("up1");
            }
        };
        sliding = true;
    }, 600);
    setTimeout(() => {
        click = true;
}, 1700);



setTimeout(() => {
    if (svg) {
    for (j = 1; j <= 9; j++) {
        var c = document.getElementById(transitionPrefix + j);
        c.classList.remove("streak");
        c.setAttribute("class", (transitionPrefix + j) + " steap");
    }
} else {
    for (j = 10; j <= 18; j++) {
        var c = document.getElementById(transitionPrefix + j);
        c.classList.remove("streak");
        c.setAttribute("class", (transitionPrefix + j) + " steap");
    }
    sliding = true;
}
}, 850);
setTimeout(() => {
    click = true;
}, 1700);
}

}

left.onmousedown=()=>{
    leftSlide();
}

right.onmousedown=()=>{
    rightSlide();
}




$('.w').mouseover(function () {

        $(this)
            .children('.introduction1')
            .hide()
            .siblings('.introduction2')
            .show()
        $(this)
            .siblings('.w')
            .addClass('active')
})

$('.w').mouseout(function () {
    $(this)
        .children('.introduction2')
        .hide()
        .siblings('.introduction1')
        .show()
    $(this)
        .siblings('.w')
        .removeClass('active')
})

// ������ذ�ť�� �Զ����ķ�ʽ�� �ص�����
$('.toTop').click(function() {
    $('html,body').animate({
        scrollTop: 0
    }, 500);
});
$('.weixin > a > img').mouseover(function() {
    $(this).css('background-color', 'yellowgreen');
});
$('.weibo > a > img').mouseover(function() {
    $(this).css('background-color', 'orange');
});
$('.youku > a > img').mouseover(function() {
    $(this).css('background-color', 'skyblue');
});
// ����뿪��������ɫ�ָ�Ϊ��ɫ
$('.pic img').mouseout(function() {
    $(this).css('background-color', '');
});
