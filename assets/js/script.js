$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度


	//側選單收合按鈕設定
	$(".js-side-menu-toggler").click(function () {
		$(this).toggleClass("close");
		$(".js-side-menu").toggleClass("close");
		$(".js-side-content").toggleClass("open");
	});
	$(".js-side-menu-mobile-toggler").click(function () {
		$(".js-side-menu").toggleClass("open");
	});

	//---------------------頁籤設定------------------------
	$('.js-tag-menu').find(".js-tag-button").click(function () {
		$(this).find("a").toggleClass("active");
		$(this).find("button").toggleClass("active");
		$(this).siblings('.js-tag-button').find("a").removeClass('active');
		$(this).siblings('.js-tag-button').find("button").removeClass('active');
	});

	//第三層內容設定
	$(".js-side-menu-submenu").find("a").click(function () {
		$(".js-side-menu").addClass("more");
		$(".js-side-more").addClass("open");
	});
	$(".js-side-menu-item").click(function () {
		$(".js-side-menu").removeClass("more");
		$(".js-side-more").removeClass("open");
	});

	//視窗
	$(".js-close").click(function () {
		let target = $(this).attr("data-bs-dismiss");
		$("." + target).fadeOut(200);
	});



	//---------------------文字縮放設定----------------------
	$(".js-font-size").find("a").click(function () {
		$(".js-font-size").find("a").removeClass("now");
		$(this).addClass("now");
		if ($(this).attr("data-size") == "txt-sm") {
			$("body").css('font-size', '.9em');
		} else if ($(this).attr("data-size") == "txt-md") {
			$("body").css('font-size', '1em');
		} else if ($(this).attr("data-size") == "txt-lg") {
			$("body").css('font-size', '1.1em');
		}
		return false;
	})



	//手風琴按鈕切換設定
	$(".js-accordion-menu").find('button').click(function () {
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
		} else {
			$(this).parents(".js-accordion-menu").find('button').removeClass('active');
			$(this).parents(".js-accordion-menu").find('button').find('span').removeClass('ti-angle-up').addClass('ti-angle-down');
			$(this).addClass("active");
			$(this).find('span').removeClass('ti-angle-down').addClass('ti-angle-up');
		}

	});

	//地圖切換按鈕設定
	$(".js-side-toggle").find(".js-toggle-menu").find(".btn").click(function () {
		$(".js-side-menu").addClass("open");
		$(".js-side-toggle").addClass("open");
		$(".js-side-content").addClass("open");
	})


	//----------------gotop功能-----------------
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) { //若目前的位置距離網頁頂端>100px
			$(".gotop").fadeIn("fast");
			$("header").addClass("godown");
		} else {
			$(".gotop").stop().fadeOut("fast");
			$("header").removeClass("godown");
		}

		var index = 0;//各單元區塊順序
		var st = $(window).scrollTop();//現在捲軸位置
		var wh = $(window).height();//視窗高度
	});



	RESIZE();
	$(window).resize(function() {
		RESIZE();
	  });
	function RESIZE() {
		WINDOWH = $(window).height();
		WINDOW = $(window).width();
		let target = $(".js-btn-guide").attr("data-target");
		if (WINDOW < 768) {
			$(".js-side-menu").removeClass("close");
			//手機選單
			$(".js-btn-menu").find("button").click(function () {
				if ($(this).hasClass("js-btn-guide")) {
					$("." + target).toggle(200);
				} else {
					$("." + target).hide(200);
				}
			});
		} else {
			$(".js-side-menu").removeClass("open");
			$("." + target).show(200);
		}
	}


})//JS尾端	