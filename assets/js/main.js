(function($){
	"use strict";

/*
-----------------------------------------------------
	Header Sticky
-----------------------------------------------------
*/
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("sticky");
		}
		else{
			$('.navbar-area').removeClass("sticky");
		}
	});
/*
-----------------------------------------------------
	Hover Button Effect
-----------------------------------------------------
*/
	let toolTip = document.getElementById('tooltip');
	if (toolTip) {
		window.addEventListener('mousemove', toolTipXY);
	}
	function toolTipXY(e) {
		let x = e.clientX,
			y = e.clientY;

		if (toolTip) {
			toolTip.style.top = (y + 0) + 'px';
			toolTip.style.left = (x + 0) + 'px';
		}
	}
/*
-----------------------------------------------------
	 Team Slides
-----------------------------------------------------
*/
	 $('.team-card').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		margin: 10,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fi fi-tr-arrow-small-left' ></i>",
			"<i class='fi fi-tr-arrow-small-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 1
			},
			992: {
				items: 3
			},
			1200: {
				items: 2
			}
		}
	});
/*
-----------------------------------------------------
	 developes Slides
-----------------------------------------------------
*/
	 $('.developes-card').owlCarousel({
		nav: false,
		loop: true,
		dots: false,
		margin: 10,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fi fi-tr-arrow-small-left' ></i>",
			"<i class='fi fi-tr-arrow-small-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});
/*
-----------------------------------------------------
	 Testimonial Slides
-----------------------------------------------------
*/
	 $('.testimonial-content').owlCarousel({
		nav: true,
		loop: true,
		dots: false,
		margin: 20,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed:1000,
		navText: [
			"<i class='fi fi-tr-arrow-left'></i>",
			"<i class='fi fi-tr-arrow-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 3

			}
		}
	});
/*
-----------------------------------------------------
	Workflow Slides
-----------------------------------------------------
*/
	 $('.workflow-wrapper').owlCarousel({
		nav: false,
		loop: true,
		dots: false,
		margin: 20,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed:1000,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			},
			1200: {
				items: 2

			}
		}
	});
/*
-----------------------------------------------------
	 Testimonial Slides 2
-----------------------------------------------------
*/
	 $('.testimonial-content-2').owlCarousel({
		nav: false,
		loop: true,
		dots: true,
		margin: 20,
		autoplay: true,
		autoplayHoverPause: true,
		smartSpeed:1000,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 1
			},
			992: {
				items: 1
			},
			1200: {
				items: 2

			}
		}
	});
/*
-----------------------------------------------------
	Popup Image
-----------------------------------------------------
*/
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

/*
-----------------------------------------------------
	Counter Js
-----------------------------------------------------
*/
	if ("IntersectionObserver" in window) {
	let counterObserver = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
			let counter = entry.target;
			let target = parseInt(counter.innerText);
			let step = target / 200;
			let current = 0;
			let timer = setInterval(function () {
				current += step;
				counter.innerText = Math.floor(current);
				if (parseInt(counter.innerText) >= target) {
				clearInterval(timer);
				}
			}, 10);
			counterObserver.unobserve(counter);
			}
		});
	});

	let counters = document.querySelectorAll(".counter-num");
	counters.forEach(function (counter) {
		counterObserver.observe(counter);
	});
    }

/*
-----------------------------------------------------
	Gallery MixItUp 
-----------------------------------------------------
*/
	$(function () {
		var filterList = {
			init: function () {
				$('.item-grid').mixItUp({
					selectors: {
					target: '.item',
					filter: '.filter'	
				},
				load: {
				  filter: 'all'
				}     
				});								
			}
		};
		filterList.init();
	});	

/*
-----------------------------------------------------
	Popup Video
-----------------------------------------------------
*/
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});
/*
-----------------------------------------------------
	Input Plus & Minus Number JS
-----------------------------------------------------
*/
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});
/*
-----------------------------------------------------
	Meetai Testimonial
-----------------------------------------------------
*/
	
	$('.aithm-testimonial-navigator').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
	});

/*
-----------------------------------------------------
	Faq Section
-----------------------------------------------------
*/
	const faqItems = document.querySelectorAll('.faq-item');

	faqItems.forEach(item => {
	const question = item.querySelector('.faq-question');
	const answer = item.nextElementSibling;
	const icon = item.querySelector('i');
	
	item.addEventListener('click', () => {
		faqItems.forEach(otherItem => {
		if (otherItem !== item) {
			const otherAnswer = otherItem.nextElementSibling;
			const otherIcon = otherItem.querySelector('i');
	
			otherAnswer.classList.remove('active');
			otherIcon.classList.remove('active');
			otherAnswer.style.maxHeight = "0";
		}
		});
	
		answer.classList.toggle('active');
		icon.classList.toggle('active');
		if (answer.classList.contains('active')) {
		answer.style.maxHeight = answer.scrollHeight + "px";
		} else {
		answer.style.maxHeight = "0";
		}
	});
	});

/*
-----------------------------------------------------
	Aos Animation
-----------------------------------------------------
*/
	AOS.init({
		once: true,
		offset: 200,
		duration: 2000,
	});

/*
-----------------------------------------------------
	Go to Top + 챗봇
-----------------------------------------------------
*/
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) {
				$('.go-top').addClass('active');
				$('.chat-bot').addClass('active');
			}
			if (scrolled < 600) {
				$('.go-top').removeClass('active');
				$('.chat-bot').removeClass('active');
			}
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

/*
-----------------------------------------------------
	Nice Select
-----------------------------------------------------
*/
	$('select').niceSelect();





// Quantity Plus Minus ---------------------------

	$(".quantity-plus").each(function () {
		$(this).on("click", function (e) {
			e.preventDefault();
			var $qty = $(this).siblings(".qty-input");
			var currentVal = parseInt($qty.val(), 10);
			if (!isNaN(currentVal)) {
				$qty.val(currentVal + 1);
			}
		});
	});

	$(".quantity-minus").each(function () {
		$(this).on("click", function (e) {
			e.preventDefault();
			var $qty = $(this).siblings(".qty-input");
			var currentVal = parseInt($qty.val(), 10);
			if (!isNaN(currentVal) && currentVal > 1) {
				$qty.val(currentVal - 1);
			}
		});
	});




/* 스토어 - 필터링(카테고리) */
	// $(document).ready(function () {
	// 	$('.filter').on('click', function (e) {
	// 		e.preventDefault(); // 기본 링크 동작 방지
	// 		const filter = $(this).data('filter');
	
	// 		$('.item').hide(); // 모든 항목 숨기기
	// 		if (filter === 'all') {
	// 			$('.item').show(); // '전체' 클릭 시 모든 항목 표시
	// 		} else {
	// 			$('.' + filter).show(); // 선택된 카테고리 항목만 표시
	// 		}
	// 	});
	// });

	// $(function () {
	// 	var filterList = {
	// 		init: function () {
	// 			$('.item-grid').mixItUp({
	// 				selectors: {
	// 					target: '.item',
	// 					filter: '.filter'
	// 				},
	// 				load: {
	// 					filter: 'all',          // 초기 필터링 설정
	// 					sort: 'default:asc'     // 초기 정렬 상태 유지
	// 				},
	// 				animation: {
	// 					duration: 300          // 애니메이션 속도 (ms)
	// 				}
	// 			});
	// 		}
	// 	};
	// 	filterList.init();
	// });

	$(document).ready(function () {
		$('.filter-container').mixItUp({
			selectors: {
				target: '.item' // 필터링 대상
			},
			load: {
				filter: 'all' // 초기 로드 시 모든 항목 표시
			},
			animation: {
				duration: 300 // 애니메이션 효과
			}
		});
	});
	
	
	// $(function () {
	// 	var filterList = {
	// 		init: function () {
	// 			$('.item-grid').mixItUp({
	// 				selectors: {
	// 				target: '.item',
	// 				filter: '.filter'	
	// 			},
	// 			load: {
	// 			  filter: 'all'
	// 			}     
	// 			});								
	// 		}
	// 	};
	// 	filterList.init();
	// });








/* Include */

	$(document).ready(function () {
		$('.includeJs').each(function () {
			const $this = $(this);
			const filePath = $this.data('include-file');
		
			if (filePath) {
				$.get(filePath)
				.done(function (data) {
					$this.html(data); // Include 완료
					console.log(`File loaded: ${filePath}`);
		
					// Include 완료 후 PC/모바일 모두 처리
					activateCurrentTab();
				})
				.fail(function (xhr, status, error) {
					console.error(`Error loading file: ${filePath} - ${error}`);
				});
			}
		});
	  
		function activateCurrentTab() {
			const currentPath = window.location.pathname;
			console.log("Current Path:", currentPath);
		
		  	// 대분류 및 소분류 정의
		  	const tabs = [
				{
				path: "/index.html",
				pcSelector: ".home-link",
				mobileSelector: ".mobile-home-link",
				},
				{
				path: "/pages/travel/",
				pcSelector: ".travel-link",
				mobileSelector: ".mobile-travel-link",
				},
				{
				path: "/pages/info/",
				pcSelector: ".info-link",
				mobileSelector: ".mobile-info-button",
				// pcSubSelector: ".info-sub-link", // PC 소분류 선택자 추가 <--이거 왜 없어도 되는거지
  				// mobileSubSelector: ".mobile-info-sub-link", // 모바일 소분류 선택자 추가
				subPaths: [
					"/pages/info/info_1.html",
					"/pages/info/info_2.html",
					"/pages/info/info_3.html",
					"/pages/info/news.html",
				],
				},
				{
				path: "/pages/store/",
				pcSelector: ".store-link",
				mobileSelector: ".mobile-store-link",
				},
				{
				path: "/pages/support/",
				pcSelector: ".support-link",
				mobileSelector: ".mobile-support-button", // 소분류가 있는 모바일 대분류는 button
				subPaths: [
					"/pages/support/notice.html",
					"/pages/support/faq.html",
					"/pages/support/contact.html",
				],
				},
		  	];
	  
		  	// PC 대분류 처리
		  	tabs.forEach(tab => {
				const pcLink = document.querySelector(tab.pcSelector);
				if (tab.subPaths) {
				  	// 소분류를 포함한 대분류
				  	const isSubPathActive = tab.subPaths.some(subPath => currentPath === subPath);
				  	if ((currentPath.includes(tab.path) || isSubPathActive) && pcLink) {
						pcLink.classList.add("active");
						console.log(`Active class added to PC tab: ${tab.pcSelector}`);
				  	}
				} else {
				  	// 소분류가 없는 대분류
				  	if (pcLink && currentPath.includes(tab.path)) {
						pcLink.classList.add("active");
						console.log(`Active class added to PC tab: ${tab.pcSelector}`);
				  	}
				}
				if (tab.subPaths && tab.pcSubSelector) {
					tab.subPaths.forEach(subPath => {
						if (currentPath === subPath) {
							const pcSubLink = document.querySelector(`[href="${subPath}"]`);
							if (pcSubLink) {
								pcSubLink.classList.add("active");
								console.log(`Active class added to PC sub-tab: ${subPath}`);
							}
					
							// 대분류도 활성화
							const pcLink = document.querySelector(tab.pcSelector);
							if (pcLink) {
								pcLink.classList.add("active");
								console.log(`Active class added to PC parent tab: ${tab.pcSelector}`);
							}
						}
					});
				}
			  
		  	});

		 	 // 모바일 대분류 처리
			tabs.forEach(tab => {
				const mobileLink = document.querySelector(tab.mobileSelector);
		
				if (mobileLink) {
					if (mobileLink.tagName === "BUTTON") {
						// 모바일에서 button으로 된 대분류 처리 (소분류 있는 페이지)
						const isSubPathActive = tab.subPaths
						? tab.subPaths.some(subPath => currentPath === subPath)
						: false;
			
						if (currentPath.includes(tab.path) || isSubPathActive) {
							mobileLink.classList.add("active");
							console.log(`Active class added to mobile button: ${tab.mobileSelector}`);
						}
			
						// **소분류 처리 추가 (모바일)**
						if (tab.subPaths) {
							tab.subPaths.forEach(subPath => {
								if (currentPath === subPath) {
									const mobileSubLink = document.querySelector(`[href="${subPath}"]`);
									if (mobileSubLink) {
										mobileSubLink.classList.add("active");
										console.log(`Active class added to mobile sub-tab: ${subPath}`);
									}
								}
							});
						}
			
					} else if (mobileLink.tagName === "A") {
						// 모바일에서 <a> 태그로 된 대분류 처리 (소분류 없는 페이지)
						if (currentPath.includes(tab.path)) {
							mobileLink.classList.add("active");
							// console.log(`Active class added to mobile link: ${tab.mobileSubSelector}`); 이걸로?
							console.log(`Active class added to mobile link: ${tab.mobileSelector}`);
						}
					}
				}
			});
  
	  
			//   // 모바일 대분류 처리
			//   tabs.forEach(tab => {
			// 	const mobileLink = document.querySelector(tab.mobileSelector);
		
			// 	if (mobileLink) {
			// 	  if (mobileLink.tagName === "BUTTON") {
			// 		// 모바일에서 button으로 된 대분류 처리 (소분류 있는 페이지)
			// 		const isSubPathActive = tab.subPaths
			// 		  ? tab.subPaths.some(subPath => currentPath === subPath)
			// 		  : false;
			// 		if (currentPath.includes(tab.path) || isSubPathActive) {
			// 		  mobileLink.classList.add("active");
			// 		  console.log(`Active class added to mobile button: ${tab.mobileSelector}`);
			// 		}
			// 	  } else if (mobileLink.tagName === "A") {
			// 		// 모바일에서 <a> 태그로 된 대분류 처리 (소분류 없는 페이지)
			// 		if (currentPath.includes(tab.path)) {
			// 		  mobileLink.classList.add("active");
			// 		  console.log(`Active class added to mobile link: ${tab.mobileSelector}`);
			// 		}
			// 	  }
			// 	}
			//   });
		
		}
	});




	
	  
	  
  
  
  
	/* 챗봇 */
	const chatBotButton = document.querySelector('.chat-bot');

	// 툴팁 생성
	chatBotButton.addEventListener('mouseenter', () => {
	  const chatBotTooltip = document.createElement('span');
	  chatBotTooltip.className = 'chatBotTooltip';
	  chatBotTooltip.innerText = 'Open Chatbot';
	  chatBotButton.appendChild(chatBotTooltip);
	});
	
	// 툴팁 제거
	chatBotButton.addEventListener('mouseleave', () => {
	  const chatBotTooltip = chatBotButton.querySelector('.chatBotTooltip');
	  if (chatBotTooltip) {
		chatBotButton.removeChild(chatBotTooltip);
	  }
	});




	$(".price_slider").slider({
        range: true,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function (event, ui) {
          $(".from").text("$" + ui.values[0]);
          $(".to").text("$" + ui.values[1]);
        }
      });
      $(".from").text("$" + $(".price_slider").slider("values", 0));
      $(".to").text("$" + $(".price_slider").slider("values", 1));
	





/* 마이페이지 - 탭 전환 기능 */
	document.querySelectorAll('.tab-btn').forEach(button => {
		button.addEventListener('click', () => {
			const tabName = button.getAttribute('data-tab');

			// 모든 콘텐츠 숨기기
			document.querySelectorAll('.mypage-tabs').forEach(content => {
				content.classList.remove('active');
			});

			// 모든 버튼에서 active 제거
			document.querySelectorAll('.tab-btn').forEach(btn => {
				btn.classList.remove('active');
			});

			// 선택된 콘텐츠와 버튼 활성화
			document.getElementById(tabName).classList.add('active');
			button.classList.add('active');
		});
	});

	// 초기화: PC에서만 첫 번째 탭 활성화
	function initializeTabs() {
		const isPC = window.innerWidth >= 992; // PC 기준 너비
		const firstTab = document.querySelector('.tab-btn[data-tab="account-tab"]');
		const allTabs = document.querySelectorAll('.mypage-tabs');
		const allButtons = document.querySelectorAll('.tab-btn');
		// const tabButtons = document.querySelectorAll('.mypage-categories');
		// const iconElement = document.querySelector('.bx-user');
		const pcMypageTitle = document.querySelector('.widget_custom');
		const mobileMypageTitle = document.querySelector('#mypage-title');

		if (isPC && firstTab) {
			// PC: 첫 번째 탭 활성화
			const firstTabName = firstTab.getAttribute('data-tab');
			allTabs.forEach(content => content.classList.remove('active'));
			document.getElementById(firstTabName).classList.add('active');
			// tabButtons.forEach(content => content.classList.add('active'));

			// 버튼 활성화
			allButtons.forEach(btn => btn.classList.remove('active'));
			firstTab.classList.add('active');

			// 타이틀
			pcMypageTitle.classList.add('active');
			mobileMypageTitle.classList.remove('active');
		} else {
			// 모바일: 모든 탭과 버튼 숨김
			allTabs.forEach(content => content.classList.remove('active'));
			allButtons.forEach(btn => btn.classList.remove('active'));
			
			// 사이드바
			// tabButtons.forEach(content => content.classList.remove('active'));

			// 타이틀
			pcMypageTitle.classList.remove('active');
			mobileMypageTitle.classList.add('active');
		}
	}

	// 초기화 실행
	initializeTabs();

	// 화면 크기 변경 시 다시 초기화
	window.addEventListener('resize', initializeTabs);
	

}(jQuery));






	


  