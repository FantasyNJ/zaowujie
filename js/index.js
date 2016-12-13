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
	'img/bg/20.png',
    'img/bg/bg.jpg',
    'img/music.png',
    'img/music_pause.png'
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

//计算圆柱放大的scale
var siteHeight = document.body.getBoundingClientRect().height;
var scalePer = 100;
if(siteHeight < 736){
    scalePer = parseInt((siteHeight / 7.36)*0.9);
}
// console.log(scalePer);

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
var loading = document.querySelector('.loading');
var logo1 = document.querySelector('.logo1');
var logo2 = document.querySelector('.logo2');
var logo3 = document.querySelector('.logo3');
var logo4 = document.querySelector('.logo4');
var music = document.querySelector('.music');
var audioElem = document.querySelector('.music audio');
music.isPlay = false;  //默认不播放

function hideLogo1(){
	logo1.style.transform = 'scale(0)';
	logo1.style.WebkitTransform = 'scale(0)';
	logo1.style.transition = '1.5s';
	logo1.style.WebkitTransition = '1.5s';
	setTimeout(showLogo2, 1500);
}
function showLogo2(){
	logo1.parentNode.removeChild(logo1);
    music.style.display = 'block';
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
        loading.parentNode.removeChild(loading);
    },2500);
    setTimeout(function(){
        cylinder();
    },3000)
}

//音乐
function musicPlay(){
    audioElem.play();
    music.className = 'music';
    music.isPlay = true;
}
function musicPause(){
    audioElem.pause();
    music.className = 'music pause';
    music.isPlay = false;
}

music.addEventListener('touchstart', function(e){
    if(music.isPlay){
        musicPause();
    }else{
        musicPlay();
    }
    e.stopPropagation();
})


//绘制圆柱
function cylinder(){
    var mainWrap = document.querySelector('.main');
    var halfW = 64.5;
    var deg = Math.round(360/dataBg.length);

    var sHtml = '';
    for(var i = 0; i < dataBg.length; i++){
        sHtml += '<span style="background-image:url('+dataBg[i]+')"></span>';
    }
    mainWrap.innerHTML = sHtml;
    var span = mainWrap.children;
    for(var i = 0; i < span.length;i++){
        var R = Math.abs(Math.round(halfW*Math.tan((180 - deg)/360*Math.PI)));
        // span[i].style.backgroundImage = 'url('+ dataBg[i] +')';
        css(span[i], 'rotateY', i*deg);
        css(span[i], 'translateZ', -R);
        css(span[i], 'opacity', 0);
    }

    // css(mainWrap, 'scale', 5);  {rotateY: 720,scale: scalePer}
    css(mainWrap, 'translateZ', -5000);
    css(mainWrap, 'rotateY', -900);
    for(var i = 0; i < span.length;i++){
        movejs(span[i], { opacity: 100 }, 3000, 'easeOut');
    }
    movejs(mainWrap, { translateZ:-200,rotateY:0}, 3000, 'easeOut'
        , function(){
        setTimeout(function(){
            document.body.style.backgroundImage = 'url(img/bg/bg.jpg)';

            var startX = 0;
            var startY = 0;
            var startdegY = css(mainWrap, 'rotateY');
            var startdegX = css(mainWrap, 'rotateX');
            document.body.addEventListener('touchstart', function(e){
                startX = e.changedTouches[0].pageX;
                startY = e.changedTouches[0].pageY;
                startdegY = css(mainWrap, 'rotateY');
                startdegX = css(mainWrap, 'rotateX');
                movejs(mainWrap, {translateZ: -300}, 100, 'linear');
                window.removeEventListener("devicemotion", devicemotion);

                e.stopPropagation();
                e.preventDefault();
            });
            var dir = null;
            document.body.addEventListener('touchmove', function(e){
                var nowX = e.changedTouches[0].pageX;
                // var nowY = e.changedTouches[0].pageY;
                var disX = nowX - startX;
                // var disY = nowY - startY;
                // var rotY = disY-startdegX/5;
                // if( rotY > 20 ){
                //     rotY = 20;
                // }
                // if( rotY < -20 ){
                //     rotY = -20;
                // }

                // if(dir === null && Math.abs(disX) > 5){
                //     dir = 'x';
                // }else if(dir === null && Math.abs(disY) > 5){
                //     dir = 'y';
                // }
                // console.log(dir);
                // if(dir === 'x'){
                    css(mainWrap, 'rotateY', startdegY-disX/5);
                // }
                // if(dir === 'y'){
                //     css(mainWrap, 'rotateX', rotY);
                // }

                e.stopPropagation();
                e.preventDefault();
            });
            document.body.addEventListener('touchend', function(e){
                movejs(mainWrap, {translateZ: -200}, 100, 'linear');
                dir = null;
                window.addEventListener("devicemotion", devicemotion);
            });
            //陀螺仪
            var tX = 0;
            window.addEventListener("devicemotion", devicemotion);
            function devicemotion(e){
                try{
                    tX = css(mainWrap, 'rotateY');
                    var motion = e.accelerationIncludingGravity;
                    var x = Number((motion.x).toFixed(0));
                    x = getIos()?x:-x;
                    var y = Number((motion.y).toFixed(0));
                    y = getIos()?y:-y;
                    tX += x;
                    css(mainWrap, 'rotateY', tX);
                }catch(e){

                }
            }
        },30);}
    );
}

function getIos(){
    var u = navigator.userAgent;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

