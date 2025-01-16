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
	Go to Top
-----------------------------------------------------
*/
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
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




/* Include 오류 */
	// Include external HTML files in elements with the 'includeJs' class
    // $(document).ready(function () {
	// 	$('.includeJs').each(function () {
	// 	  let $this = $(this);
	// 	  let filePath = $this.data('include-file');
	  
	// 	  if (filePath) {
	// 		// AJAX 요청
	// 		$.get(filePath)
	// 			.done(function (data) {
	// 				$this.html(data); // 파일 로드
	// 				console.log('Header loaded successfully.');
		
	// 				// 파일 로드 후 sticky 동작 초기화
	// 				initStickyNavbar();
	// 			})
	// 			.fail(function (xhr, status, error) {
	// 				console.error(`Error loading file: ${filePath} - Status: ${status}`, error);
	// 				$this.html('<p>Error loading content.</p>');
	// 			});
	// 	  	}
	// 	});
	  
	// 	// sticky 동작 초기화 함수
	// 	function initStickyNavbar() {
	// 		const $navbar = $('.navbar-area');
	// 		if ($navbar.length === 0) {
	// 			console.error('Navbar not found after include.');
	// 			return;
	// 		}
		
	// 		$(window).on('scroll', function () {
	// 			if ($(this).scrollTop() > 120) {
	// 			$navbar.addClass('sticky');
	// 			} else {
	// 			$navbar.removeClass('sticky');
	// 			}
	// 		});
		
	// 		// 초기 상태 설정
	// 		if ($(window).scrollTop() > 120) {
	// 			$navbar.addClass('sticky');
	// 		}
	// 	}
	//   });
	  
	


/* 현재 페이지(오류) */
	// document.addEventListener("DOMContentLoaded", () => {
	// 	const currentPath = window.location.pathname === "/" ? "/index.html" : window.location.pathname;
	// 	console.log('currentPath: '+currentPath);
		
	// 	// // **PC 대분류**
	// 	// document.querySelectorAll(".main-link-pc").forEach(link => {
	// 	// 	const href = link.getAttribute("href");
	// 	// 	console.log(href);
	// 	// 	if (href && currentPath.startsWith(new URL(href, window.location.origin).pathname)) {
	// 	// 	link.classList.add("active");
	// 	// 	}
	// 	// });
		
	// 	// // **PC 소분류**
	// 	// document.querySelectorAll(".sub-link-pc").forEach(link => {
	// 	// 	const href = link.getAttribute("href");
	// 	// 	if (href && currentPath === new URL(href, window.location.origin).pathname) {
	// 	// 	link.classList.add("active");
	// 	// 	}
	// 	// });
		
	// 	// // **모바일 대분류**
	// 	// document.querySelectorAll(".main-link-mo").forEach(link => {
	// 	// 	const target = link.getAttribute("data-bs-target");
	// 	// 	if (target && currentPath.startsWith(target.replace("#", ""))) {
	// 	// 	link.classList.add("active");
	// 	// 	}
	// 	// });
		
	// 	// // **모바일 소분류**
	// 	// document.querySelectorAll(".sub-link-mo").forEach(link => {
	// 	// 	const href = link.getAttribute("href");
	// 	// 	if (href && currentPath === new URL(href, window.location.origin).pathname) {
	// 	// 	link.classList.add("active");
	// 	// 	}
	// 	// });

	// 	// 대분류 링크를 모두 가져옴
	// 	const mainLinks = document.querySelectorAll(".main-link-pc");

	// 	mainLinks.forEach(link => {
	// 	  const href = link.getAttribute("href");
	// 	  if (!href) return; // href가 없는 경우 무시
	  
	// 	  // 현재 경로에 대분류 링크의 경로가 포함되어 있으면 active 클래스 추가
	// 	  if (currentPath.includes(new URL(href, window.location.origin).pathname)) {
	// 		link.classList.add("active");
	// 	  }
	// 	});

	// });

	// document.addEventListener("DOMContentLoaded", () => {
	// 	const currentPath = window.location.pathname;
	  
	// 	// 탭별 경로 설정
	// 	const tabs = [
	// 	  { path: "/index.html", selector: ".home-link" }, // Home
	// 	  { path: "/pages/travel/", selector: ".travel-link" }, // Travel
	// 	  { path: "/pages/info/", selector: ".info-link" }, // Info
	// 	  { path: "/pages/store/", selector: ".store-link" }, // Store
	// 	  { path: "/pages/support/", selector: ".support-link" } // Support
	// 	];
	  
	// 	tabs.forEach(tab => {
	// 	  // 현재 경로에 탭의 경로가 포함되어 있는지 확인
	// 	  if (currentPath.includes(tab.path)) {
	// 		const link = document.querySelector(tab.selector);
	// 		console.log('link: '+link);
			
	// 		if (link) {
	// 			link.classList.add("active");
	// 		}
	// 	  }
	// 	});
	// });


	// 모바일 안뜸
	// $(document).ready(function () {
	// 	$('.includeJs').each(function () {
	// 		const $this = $(this);
	// 		const filePath = $this.data('include-file');
		
	// 		if (filePath) {
	// 			$.get(filePath)
	// 			.done(function (data) {
	// 				$this.html(data); // Include 완료
	// 				console.log(`File loaded: ${filePath}`);
		
	// 				// Include 완료 후 현재 페이지 표시
	// 				const currentPath = window.location.pathname;
		
	// 				const tabs = [
	// 					{ path: "/index.html", selector: ".home-link" },
	// 					{ path: "/pages/travel/", selector: ".travel-link" },
	// 					{ path: "/pages/info/", selector: ".info-link" },
	// 					{ path: "/pages/store/", selector: ".store-link" },
	// 					{ path: "/pages/support/", selector: ".support-link" }
	// 				];
		
	// 				tabs.forEach(tab => {
	// 				const link = document.querySelector(tab.selector);
	// 				if (link && currentPath.includes(tab.path)) {
	// 					link.classList.add("active");
	// 					console.log(`Active class added to: ${tab.selector}`);
	// 				}
	// 				});
	// 			})
	// 			.fail(function (xhr, status, error) {
	// 				console.error(`Error loading file: ${filePath} - ${error}`);
	// 			});
	// 		}
	// 	});
	// });

	
	// 소분류 있는 페이지 오류
	// $(document).ready(function () {
	// 	$('.includeJs').each(function () {
	// 		const $this = $(this);
	// 		const filePath = $this.data('include-file');
		
	// 		if (filePath) {
	// 			$.get(filePath)
	// 			.done(function (data) {
	// 				$this.html(data); // Include 완료
	// 				console.log(`File loaded: ${filePath}`);
		
	// 				// Include가 완료된 후 PC/모바일 처리
	// 				activateCurrentTab();
	// 			})
	// 			.fail(function (xhr, status, error) {
	// 				console.error(`Error loading file: ${filePath} - ${error}`);
	// 			});
	// 		}
	// 	});
	  
	// 	function activateCurrentTab() {
	// 		const currentPath = window.location.pathname;
		
	// 		// PC와 모바일 태그 모두 선택
	// 		const mainLinks = document.querySelectorAll(".main-link-pc, .main-link-mo");
	// 		mainLinks.forEach(link => {
	// 			const href = link.getAttribute("href"); // href 가져오기
	// 			if (href && currentPath.includes(href)) {
	// 				link.classList.add("active");
	// 				console.log(`Active class added to: ${href}`);
	// 			}
	// 		});
	  
	// 	  // 모바일 전용 버튼 처리 (예: data-path 사용)
	// 	  	const mobileButtons = document.querySelectorAll(".main-link-mo");
	// 	  	mobileButtons.forEach(button => {
	// 			const buttonPath = button.dataset.path; // data-path 속성 가져오기
	// 			if (buttonPath && currentPath.includes(buttonPath)) {
	// 		  		button.classList.add("active");
	// 		  		console.log(`Active class added to mobile button: ${button.className}`);
	// 			}
	// 	  });
	// 	}
	//   });
	  

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
	  
	  
  
  
  
	  




	

}(jQuery));