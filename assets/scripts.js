$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var a = anime({
	targets:'.hello',
	translateX: 270,
	borderRadius:['0','50%'],
	elasticity:200,
	easing:'easeInOutQuad',
	direction:'alternate',
	loop:true,
	update: function(){
		seekEl.value = a.progress;
	}
});

$(".restart").click(function(){
	a.restart();
});

$(".pause").click(function(){
	a.pause();
});

$(".play").click(function(){
	a.play();
});

var seekEl = document.querySelector(".progress");

seekEl.oninput = function(){
	a.seek(a.duration * (seekEl.value / 100));
};