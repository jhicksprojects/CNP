$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$(".mobile-menu").click(function(){
	if($(".nav").is(":visible"))
	{
		$(this).find("i").removeClass("fa-times");
		$(this).find("i").addClass("fa-bars");
		$(this).removeClass("open");
		$(this).addClass("closed");
		$(".nav").slideUp();
	}
	else
	{
		$(this).find("i").removeClass("fa-bars");
		$(this).find("i").addClass("fa-times");
		$(this).addClass("open");
		$(this).removeClass("closed");
		$(".nav").slideDown();
	}
});
