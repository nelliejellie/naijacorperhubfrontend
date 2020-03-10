$(function(){
	$('#Market-hub-smallscreen').click(function(){
		$('#ul-smallscreen1').css({'display':'block'})

	})
	$('#smallscreens').dblclick(function(){
		$('#ul-smallscreen1').css({'display':'none'})
		
	})
	$('#Skill-Trade-Hub-smallscreen').click(function(){
		$('#ul-smallscreen2').css({'display':'block'})

	})
	$('#smallscreens').dblclick(function(){
		$('#ul-smallscreen2').css({'display':'none'})
		
	})
	$('.carousel').carousel({
  		interval: 4000
	})
});