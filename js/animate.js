function cssTransform(el,attr,val){
	if(!el.transform){
		el.transform = {};
	}
	if(typeof val == "undefined"){
		val = el.transform[attr];
		if(typeof val == "undefined"){
			switch(attr){
				case "scale":
				case "scaleX":
				case "scaleY":
				case "scaleZ":
					val = 100;
					break;
				default:
					val = 0;
			}
		}
		return val;
	} else {
		el.transform[attr] = val;
		var value = "";
		for(var s in el.transform){
			switch(s){
				case "rotate":
				case "rotateX":
				case "rotateY":
				case "rotateZ":
				case "skewX":
				case "skewY":
					value += " "+s+"("+el.transform[s]+"deg)";
					break;
				case "scale":
				case "scaleX":
				case "scaleY":
				case "scaleZ":
					value += " "+s+"("+(el.transform[s]/100)+")";
					break;
				case "translateX":
				case "translateY":
				case "translateZ":
					value += " "+s+"("+el.transform[s]+"px)";
					break;
			}
		}
		el.style.WebkitTransform = el.style.transform = value;
	}
}

function css(el,attr,val){
	switch(attr){
		case "rotate":
		case "rotateX":
		case "rotateY":
		case "rotateZ":
		case "scale":
		case "scaleX":
		case "scaleY":
		case "scaleZ":
		case "skewX":
		case "skewY":
		case "translateX":
		case "translateY":
		case "translateZ":
			return cssTransform(el,attr,val);
	}
	if(arguments.length > 2){
		if(attr == "opacity"){
			el.style[attr] = val/100;
		} else {
			el.style[attr] = val + "px";
		}
	} else {
		var val = parseFloat(getComputedStyle(el)[attr]);
		if(attr == "opacity"){
			return val*100;
		} 
		return val;
	}
}
var Tween = {
	linear: function (t, b, c, d){
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 2.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
};
function movejs(el, target, time, type, callBack){
	var t = 0;
	var b = {};
	var c = {};
	var d = time / 20;	for(var s in target){ 
		b[s] = css(el, s); 
		c[s] = target[s] - b[s];
	}
	clearInterval(el.timer); 
	el.timer = setInterval(
		function(){
			t++;
			if(t>=d){
				clearInterval(el.timer);
				callBack&&callBack.call(el);
			}
			for(var s in b){
				var val = parseFloat((Tween[type](t,b[s],c[s],d)).toFixed(2));
				css(el, s, val);
			}
		},
		20
	);
}