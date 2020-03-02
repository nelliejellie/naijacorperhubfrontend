$(function(){
	$('#smallscreens').click(function(){
		$('#ul-smallscreen1').css({'display':'block'})
	})
	$('#smallscreens').dblclick(function(){
		$('#ul-smallscreen1').css({'display':'none'})
	})
	$('.carousel').carousel({
  		interval: 4000
	})
});