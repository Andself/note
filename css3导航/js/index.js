// JavaScript Document
$(document).ready(function(){
	//change animate
	$('img').one("webkitAnimationEnd oanimationend animationend",function(){
			$(this).removeClass("animate_01").addClass("animate_02");
		});
	//open navigation
    openNav = function(){
			$('body').toggleClass('open-nav');
			$('#menu-pull').removeClass('pull-right');
			$('.menu-list li').removeClass('show');
		}
	//Secondary navigation
	//这个真的是我自己写的好嘛，只是感觉英文注释逼格高一些！
	$('.menu-list').delegate('li','click',function(){
			var num = $(this).attr("hxt");
			var _pullBox = $('#menu-pull');
			var _pullright = $('#menu-pull ul[hxt='+num+']');
			
			$(this).addClass('show').siblings().removeClass('show');
			_pullBox.addClass('pull-right');
			_pullright.addClass('showit');
			_pullright.siblings('ul').removeClass('showit');
			//
			console.log("num:" + num);
		})
	//
	$(window).scroll(function(){main1ScrollTop()});	
	function main1ScrollTop(){
		var window_h = $(window).height();
		var t_top = $("#pro").offset().top;
		var t_top2 = $("#news").offset().top;
		var t_top3 = $("#hsa").offset().top;
		var t_top4 = $("#about").offset().top;
		var offsetTop = $(window).scrollTop();
		to_h = t_top - offsetTop;
		to_h2 = t_top2 - offsetTop;
		to_h3 = t_top3 - offsetTop;
		to_h4 = t_top4 - offsetTop;
		
		if(window_h >= to_h){
			$("#pro").removeClass("Admission");
		}
		if(window_h >= to_h2){
			$("#news").removeClass("Admission");
		}
		if(window_h >= to_h3){
			$("#hsa").removeClass("Admission");
		}
		if(window_h >= to_h4){
			$("#about").removeClass("Admission");
		}
	}
		
		
});
