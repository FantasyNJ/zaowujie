var data = [
	'img/load/logo2.png',
	'img/load/logo3.png',
	'img/load/logo4.png',
	'img/load/loadIco1.png',
	'img/load/loadIco2.png',
	'img/load/loadIco3.png',
	'img/load/loadIco4.png',
	'img/load/loadIco5.png',
	'img/load/loadIco6.png',
	'img/load/loadIco7.png',
	'img/load/loadIco8.png',
	'img/load/loadIco9.png',
	'img/bg/1.png',
	'img/bg/2.png',
	'img/bg/3.png',
	'img/bg/4.png',
	'img/bg/5.png',
	'img/bg/6.png',
	'img/bg/7.png',
	'img/bg/8.png',
	'img/bg/9.png',
	'img/bg/10.png',
	'img/bg/11.png',
	'img/bg/12.png',
	'img/bg/13.png',
	'img/bg/14.png',
	'img/bg/15.png',
	'img/bg/16.png',
	'img/bg/17.png',
	'img/bg/18.png',
	'img/bg/19.png',
	'img/bg/20.png'
];
var dataPieces = [
	'img/load/loadIco1.png',
	'img/load/loadIco2.png',
	'img/load/loadIco3.png',
	'img/load/loadIco4.png',
	'img/load/loadIco5.png',
	'img/load/loadIco6.png',
	'img/load/loadIco7.png',
	'img/load/loadIco8.png',
	'img/load/loadIco9.png'
]


var dataBg = [
    'img/bg/1.png',
    'img/bg/2.png',
    'img/bg/3.png',
    'img/bg/4.png',
    'img/bg/5.png',
    'img/bg/6.png',
    'img/bg/7.png',
    'img/bg/8.png',
    'img/bg/9.png',
    'img/bg/10.png',
    'img/bg/11.png',
    'img/bg/12.png',
    'img/bg/13.png',
    'img/bg/14.png',
    'img/bg/15.png',
    'img/bg/16.png',
    'img/bg/17.png',
    'img/bg/18.png',
    'img/bg/19.png',
    'img/bg/20.png'
];
dataBg.reverse();

//阻止默认事件
document.addEventListener('touchstart', function(e){
    e.preventDefault();
});
document.addEventListener('touchmove', function(e){
    e.preventDefault();
});


//图片预加载
var loadedNum = 0;
var perElem = document.querySelector('.logo1 .per');
for(var i = 0; i < data.length ; i++){
	var img = new Image();
	img.src = data[i];
	img.onload = function(){
		loadedNum++;
		perElem.innerHTML = Math.round(loadedNum/data.length*100);
		if(loadedNum === data.length){
			hideLogo1();
		}
	}
}

var oP = document.querySelector('.logo1 p');
var logo1 = document.querySelector('.logo1');
var logo2 = document.querySelector('.logo2');
var logo3 = document.querySelector('.logo3');
var logo4 = document.querySelector('.logo4');

function hideLogo1(){
	// ningjs(logo1, {scale:0}, 1000, 'easeOut', showLogo2);
	logo1.style.transform = 'scale(0)';
	logo1.style.WebkitTransform = 'scale(0)';
	logo1.style.transition = '1.5s';
	logo1.style.WebkitTransition = '1.5s';
	setTimeout(showLogo2, 1500);
}
function showLogo2(){
	logo1.parentNode.removeChild(logo1);
	logo2.style.transform = 'scale(1)';
	logo2.style.WebkitTransform = 'scale(1)';
	setTimeout(function(){
		logo2.style.transform = 'scale(0.2)';
		logo2.style.WebkitTransform = 'scale(0.2)';
		logo2.style.transition = '2s';
		logo2.style.WebkitTransition = '2s';
	}, 1300);
	setTimeout(showLogo3, 3300);
}
function showLogo3(){
	logo2.parentNode.removeChild(logo2);
	logo3.style.transform = 'scale(1)';
	logo3.style.WebkitTransform = 'scale(1)';
	setTimeout(function(){
		logo3.style.transform = 'scale(0.2)';
		logo3.style.WebkitTransform = 'scale(0.2)';
		logo3.style.transition = '2s';
		logo3.style.WebkitTransition = '2s';
	}, 1300);
	setTimeout(showLogo4, 3300);
}
function showLogo4(){
	logo3.parentNode.removeChild(logo3);
	//操作碎片
	var logo4Wrap = document.querySelector('.logo4 .logo4-wrap');
	dataPieces = dataPieces.concat(dataPieces);
	for(var i = 0;i < dataPieces.length;i++){
		var span = document.createElement('span');
		var R = 100+Math.round(Math.random()*200);  //半径
        var degX = i*20 + parseInt((Math.random()-.5)*20);
        var degY = parseInt(Math.random()*360);
        var y = Math.round(Math.sin(degX*Math.PI/180)*R);
        var z = Math.round(Math.cos(degX*Math.PI/180)*R);
        if( y > 0 && y < 70){
            y = y + 40;
        }else if(y < 0 && y > -100){
            y = y - 40;
        }
        span.style.transform = "rotateY("+degY+"deg) translate3d(0,"+y+"px,"+z+"px) rotateX("+degX+"deg)";
        span.style.WebkitTransform = "rotateY("+degY+"deg) translate3d(0,"+y+"px,"+z+"px) rotateX("+degX+"deg)";
		span.style.backgroundImage = 'url('+dataPieces[i]+')';
		logo4Wrap.appendChild(span);
	}
    logo4.style.transition = '.5s ease-in';
    logo4.style.WebkitTransition = '.5s ease-in';
    logo4.style.transform = 'scale(1)';
    logo4.style.WebkitTransform = 'scale(1)';
    setTimeout(function(){
        logo4.style.transition = '1s ease-out';
        logo4.style.WebkitTransition = '1s ease-out';
        logo4.style.transform = 'scale(0)';
        logo4.style.WebkitTransform = 'scale(0)';
    },1500);
    setTimeout(function(){
        logo4.parentNode.removeChild(logo4);

    },2500);
    setTimeout(function(){
        cylinder();
    },3000)
}

//绘制圆柱
function cylinder(){
    var mainWrap = document.querySelector('.main');
    var halfW = 64.5;
    var deg = Math.round(360/dataBg.length);
    for(var i = 0; i < dataBg.length;i++){
        var span = document.createElement('span');
        var R = Math.abs(Math.round(halfW*Math.tan((180 - deg)/360*Math.PI)));
        span.style.backgroundImage = 'url('+ dataBg[i] +')';
        css(span, 'rotateY', i*deg);
        css(span, 'translateZ', -R);
        mainWrap.appendChild(span);
    }



    css(mainWrap, 'scale', 5);
    movejs(mainWrap, {rotateY: 720,scale: 90}, 3000, 'linear', function(){
        setTimeout(function(){
            document.body.style.backgroundImage = 'url(img/bg/bg.jpg)';

            var startX = 0;
            var startY = 0;
            var startdeg = css(mainWrap, 'rotateY');
            console.log(mainWrap);
            document.body.addEventListener('touchstart', function(e){
                startX = e.changedTouches[0].pageX;
                startdeg = css(mainWrap, 'rotateY');
                movejs(mainWrap, {scale: 80}, 100, 'linear');

                e.stopPropagation();
                e.preventDefault();
            });
            document.body.addEventListener('touchmove', function(e){
                var nowX = e.changedTouches[0].pageX;
                var disX = nowX - startX;
                css(mainWrap, 'rotateY', startdeg-disX/5);

                e.stopPropagation();
                e.preventDefault();
            });
            document.body.addEventListener('touchend', function(e){
                movejs(mainWrap, {scale: 90}, 100, 'linear');
            });

            document.body.addEventListener('click', function(){
                alert(1)
            })
            //手机倾斜
            //var startAlpha = null;
            //var startRotateY = 0;
            //var disZ = 0;
            //window.addEventListener("deviceorientation",function(e){
            //    //var x = parseInt(e.beta);
            //    //var y = parseInt(e.gamma);
            //    if(startAlpha === null){
            //        startAlpha = parseInt(e.alpha);
            //        startRotateY = css(mainWrap, 'rotateY')
            //        disZ = startRotateY - startAlpha;
            //    }
            //    var z = parseInt(e.alpha);
            //
            //    css(mainWrap, 'rotateY', z+disZ );
            //});
        },30);

    });
}






//setTimeout(function(){
//    mainWrap.className = 'main ani';
//}, 20)
