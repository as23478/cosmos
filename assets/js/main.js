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



/* 우주정보 하위페이지 - 탭 전환 함수 */
	function activateTab(button) {
		const tabName = button.getAttribute('data-tab');

		// 모든 콘텐츠 숨기기
		document.querySelectorAll('.info-tabs').forEach(content => {
			content.classList.remove('active');
		});

		// 모든 버튼에서 active 제거
		document.querySelectorAll('.info-tab-btn').forEach(btn => {
			btn.classList.remove('active');
		});

		// 선택된 콘텐츠와 버튼 활성화
		document.getElementById(tabName).classList.add('active');
		button.classList.add('active');

		// 배너 업데이트
		updateBanner(tabName);

		// sessionStorage
		sessionStorage.setItem('tab', tabName);
		
	}

/* 배너 내용 업데이트 */
	function updateBanner(tabName) {
		const bannerContent = {
			"info_1_1": { title: "태양계" },
			"info_1_2": { title: "ISS (국제우주정거장)" },
			"info_1_3": { title: "제임스웹 우주망원경" },
			"info_1_4": { title: "허블 우주망원경" },
			"info_2_1": { title: "블랙홀" },
			"info_2_2": { title: "적색거성" },
			"info_2_3": { title: "암흑 물질" },
			"info_3_1": { title: "우주여행의 역사" },
			"info_3_2": { title: "우주탐사의 역사" },
			"info_3_3": { title: "미래전망" },
		}

		const content = bannerContent[tabName];
		if (content) {
			const bannerTitle = document.querySelector('.banner-content h2');
			const lastBreadcrumb = document.querySelector('.breadcrumb-item.active');
			if (bannerTitle) {
				bannerTitle.textContent = content.title;
				lastBreadcrumb.textContent = content.title;
			}
		}
	}



/* 마이페이지 - 탭 전환 함수 */
	function activateTab_mypage(button) {
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
	
		// sessionStorage
		sessionStorage.setItem('tab', button.dataset.tab);
	}

	// 마이페이지 초기화 함수: PC에서만 첫 번째 탭 활성화
	function initializeTabs() {
		const isPC = window.innerWidth >= 992; // PC 기준 너비
		const firstTab = document.querySelector('.tab-btn[data-tab="account-tab"]');
		const allTabs = document.querySelectorAll('.mypage-tabs');
		const allButtons = document.querySelectorAll('.tab-btn');
		const pcMypageTitle = document.querySelector('.widget_custom');
		const mobileMypageTitle = document.querySelector('#mypage-title');

		if (isPC && firstTab) {
			// PC: 첫 번째 탭 활성화
			const firstTabName = firstTab.getAttribute('data-tab');
			allTabs.forEach(content => content.classList.remove('active'));
			document.getElementById(firstTabName).classList.add('active');

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

			// 타이틀
			pcMypageTitle.classList.remove('active');
			mobileMypageTitle.classList.add('active');
		}
	}



/* 스토어 페이지 - 탭 전환 함수 */
	function activateTab_store(button) {
		const filter = $(button).data('filter');

		if(filter === 'all'){
			$('.item').removeClass('active');
    		$('.item:lt(9)').addClass('active'); // 처음 9개만 active
		} else {
			$('.item').removeClass('active');
			$(filter).addClass('active');
		}
	
		// 모든 버튼에서 active 제거
		document.querySelectorAll('.filter-btn').forEach(btn => {
			btn.classList.remove('active');
		});

		// 선택된 콘텐츠와 버튼 활성화
		button.classList.add('active');
		document.querySelectorAll('.tag-filter').forEach(tag => {
			tag.classList.remove('active');
		});

		updateFiltering();
		
	
		// sessionStorage
		sessionStorage.setItem('tab', button.dataset.filter);

		navActive_Store();
	}


	/* 스토어 - 태그 함수 */
	function activateTab_store2(button) {
		// 다른 모든 태그 필터 비활성화
		document.querySelectorAll('.tag-filter').forEach(btn => {
			btn.classList.remove('active');
		});

		// 선택된 태그 필터 활성화
		button.classList.add('active');

		const tag = button.getAttribute('data-tag');
		filterItems(tag); // 아이템 필터링 함수 호출
	}
	
	function filterItems(tag) {
		const items = document.querySelectorAll(`.item[data-tag*="${tag}"]`);

		// 모든 아이템에서 active 클래스 제거
		document.querySelectorAll('.item').forEach(item => {
			item.classList.remove('active');
		});

		// 해당 태그를 가진 아이템에만 active 클래스 추가
		items.forEach(item => {
			item.classList.add('active');
		});

		updateFiltering();
	}

	/* 스토어 - 금액 필터링 */
	function filterPrice(minPrice, maxPrice) {
		$(".item").each(function () {
			var price = parseFloat($(this).find(".price").text().replace('$', ''));
	
			if (price >= minPrice && price <= maxPrice) {
				$(this).addClass("price-active");
			} else {
				$(this).removeClass("price-active");
			}
		});
	
		updateFiltering();
	}
	
	function updateFiltering() {
		$(".item").each(function () {
			if ($(this).hasClass("active") && $(this).hasClass("price-active")) {
				$(this).addClass("visible");
			} else {
				$(this).removeClass("visible");
			}
		});

		updateCount();
	}


	/* 스토어 - 카운트 */
	function updateCount() {
		const itemsPerPage = 9; // 한 번에 표시할 개수
		const itemsContainer = document.querySelector(".filter-container");
		const allItems = Array.from(itemsContainer.children);
		const visibleItems = allItems.filter(item => item.classList.contains("item") && item.classList.contains("visible"));
		const totalCountElement = document.querySelector(".count");
		const resultCountElement = document.querySelector(".result-count p");

		let totalItems = visibleItems.length;
		let currentStart = 1;
		let currentEnd = Math.min(itemsPerPage, totalItems);
		
		// 총 상품 개수 업데이트
		totalCountElement.textContent = totalItems;

		// 표시 중인 범위 업데이트
		if (visibleItems.length < 9) {
			resultCountElement.innerHTML = `총 <span class="count">${totalItems}</span> 개 중 ${currentStart}-${currentEnd}개 표시`;
		} else {
			resultCountElement.innerHTML = `총 <span class="count">14</span> 개 중 ${currentStart}-${currentEnd}개 표시`;
		}
	}
	



	
	  
	/* 챗봇 */	
	const chatBotButton = document.querySelector('.chat-bot');

	if(chatBotButton) {
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
	
		chatBotButton.addEventListener('click', () => {
			const width = 400;
			const height = 846;
	
			// 화면 중앙
			const left = (window.screen.width / 2) - (width / 2);
			const top = (window.screen.height / 2) - (height / 2);
			// 새 창 열기
			const chatbotWindow = window.open(
				"/pages/chatbot.html", // 챗봇 내용을 표시할 HTML 파일 경로
				"Chatbot", // 창 이름
				`width=${width},height=${height},top=${top},left=${left},resizable=no,scrollbars=no`
			);
			
				if (!chatbotWindow) {
					alert("팝업 차단이 활성화되어 있습니다. 팝업 차단을 해제해주세요.");
				  }
		});
	}



	/* 탭 복원 - 스토어 */
	function navActive_Store() {
		let savedTab = sessionStorage.getItem('tab');

		if(savedTab.includes('figure')) {
			document.querySelectorAll('.link_4_1').forEach(e => e.classList.add('active'));
			document.querySelectorAll('.link_4_2').forEach(e => e.classList.remove('active'));
			document.querySelectorAll('.link_4_3').forEach(e => e.classList.remove('active'));
		} else if(savedTab.includes('badge')) {
			document.querySelectorAll('.link_4_1').forEach(e => e.classList.remove('active'));
			document.querySelectorAll('.link_4_2').forEach(e => e.classList.add('active'));
			document.querySelectorAll('.link_4_3').forEach(e => e.classList.remove('active'));
		} else if(savedTab.includes('clothing')) {
			document.querySelectorAll('.link_4_1').forEach(e => e.classList.remove('active'));
			document.querySelectorAll('.link_4_2').forEach(e => e.classList.remove('active'));
			document.querySelectorAll('.link_4_3').forEach(e => e.classList.add('active'));
		}
	}

	/* 탭 복원 함수 */
	function restoreTab() {
		const savedTab = sessionStorage.getItem('tab');

		if(savedTab && savedTab.includes('info_')) {
			// 우주정보 페이지
			let targetButton = $('.info-tab-btn[data-tab="' + savedTab + '"]');
			if (targetButton.length) {
				activateTab(targetButton.get(0));
			}

		} else if(savedTab && savedTab.includes('-tab')) {
			// 마이페이지
			let targetButton = $('.tab-btn[data-tab="' + savedTab + '"]');
			if (targetButton.length) {
				activateTab_mypage(targetButton.get(0));
			}

		} else if(savedTab && savedTab.includes('item')) {
			// 스토어 페이지
			let targetButton = $('.filter-btn[data-filter="' + savedTab + '"]');
			if (targetButton.length) {
				activateTab_store(targetButton.get(0));
			}
		}
	}

	/* 현재 페이지 active 함수 */
	function showCurrentPage() {
		let currentPath = window.location.pathname;
		
		// Netlify .html 누락 방지
		if (!currentPath.endsWith(".html") && !currentPath.endsWith("/")) {
			currentPath += ".html";
		}
		// Netlify /index.html(/)
		if (currentPath === '/' || currentPath === '/index.html') {
			currentPath = '/index.html';
		}

		if (currentPath === '/index.html') {
			document.querySelectorAll('.link_1_0').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath.startsWith('/pages/travel')) {
			document.querySelectorAll('.link_2_0').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/info/space_info.html') {
			document.querySelectorAll('.link_3_0').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/info/space_info_1.html') {
			document.querySelectorAll('.link_3_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_3_1').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/info/space_info_2.html') {
			document.querySelectorAll('.link_3_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_3_2').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/info/space_info_3.html') {
			document.querySelectorAll('.link_3_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_3_3').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/info/news.html') {
			document.querySelectorAll('.link_3_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_3_4').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/store/store.html') {
			document.querySelectorAll('.link_4_0').forEach(e => {
				e.classList.add('active');
			});
			navActive_Store();
		} else if (currentPath === '/pages/support/support.html') {
			document.querySelectorAll('.link_5_0').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/support/notice.html') {
			document.querySelectorAll('.link_5_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_5_1').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/support/faq.html') {
			document.querySelectorAll('.link_5_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_5_2').forEach(e => {
				e.classList.add('active');
			});
		} else if (currentPath === '/pages/support/contact.html') {
			document.querySelectorAll('.link_5_0').forEach(e => {
				e.classList.add('active');
			});
			document.querySelectorAll('.link_5_3').forEach(e => {
				e.classList.add('active');
			});
		}
	}






/* 내비게이션 + 세션 스토리지 복원 */

	$(document).ready(function () {
		/* Include */
		$('.includeJs').each(function () {
			const $this = $(this);
			const filePath = $this.data('include-file');
		
			if (filePath) {
				$.get(filePath)
					.done(function (data) {
						$this.html(data); // Include 완료
						
						// Include 완료 후 실행 - 현재 페이지 표시
						showCurrentPage();

						// 탭 복원
						restoreTab();

					})
					.fail(function (xhr, status, error) {
						console.error(`Error loading file: ${filePath} - ${error}`);
					});
			}
		});
	  
		
		/* 테마 상태 복원 */
		const savedTheme = sessionStorage.getItem('theme');

        if(savedTheme === 'false') {
            document.body.classList.remove('dark-theme');
        }


		/* 언어 설정 복원 */
		const savedLanguage = sessionStorage.getItem('language');

		if (savedLanguage) {
			document.body.classList.remove('kr', 'en');
			document.body.classList.add(savedLanguage);
		}


		// 초기화 실행
		if(document.body.classList.contains('my')) {
			initializeTabs();
		}
		
		



		/* 우주정보 하위페이지 - 탭 전환 기능 */
		$('.info-tab-btn').each(function() {
			$(this).on('click', function() {
				activateTab(this);
			});
		});
	
		// 우주정보 메인페이지 -> 하위페이지 이동
		const hash = window.location.hash.substring(1); // '#' 제거
		
		if (hash) {
			const button = document.querySelector(`.info-tab-btn[data-tab="${hash}"]`);
			if (button) {
				activateTab(button);
			}
			
			// 스토어 탭 활성화 (내비게이션)
			const storeButton = document.querySelector(`.filter-btn[data-filter=".item-${hash}"]`);
			
			if (storeButton) {
				activateTab_store(storeButton);
			}

			// 마이페이지 탭 활성화 (mypage-tabs, tab-btn)
			const $mypageTab = $('#' + hash);
			if ($mypageTab.length) {
				$('.mypage-tabs').removeClass('active');
				$('.tab-btn').removeClass('active');
	
				$mypageTab.addClass('active');
				$('.tab-btn[data-tab="' + hash + '"]').addClass('active');
			}
		}


		/* 마이페이지 - 탭 전환 기능 */
		$('.tab-btn').each(function() {
			$(this).on('click', function() {
				activateTab_mypage(this);
			});
		});


		/* 스토어 - 탭 전환 기능 */
		$('.filter-btn').each(function() {
			$(this).on('click', function() {
				activateTab_store(this);
			});
		});

		/* 스토어 - Tags */
		$('.tag-filter').on('click', function(e) {
			e.preventDefault();
			activateTab_store2(this);
			document.querySelectorAll('.filter-btn').forEach(btn => {
				btn.classList.remove('active');
			});
		});

		/* 스토어 - 금액 필터링 */
		if ($(".store-section").length) {

			$(".price_slider").slider({
				range: true,
				min: 0,
				max: 500,
				values: [0, 500],
				slide: function (event, ui) {
					$(".from").text("$" + ui.values[0]);
					$(".to").text("$" + ui.values[1]);
					filterPrice(ui.values[0], ui.values[1]);
				}
			});
	
			// 초기 가격 설정
			$(".from").text("$" + $(".price_slider").slider("values", 0));
			$(".to").text("$" + $(".price_slider").slider("values", 1));
	
			// 초기 상품 목록 필터링 (페이지 로드 시 실행)
			setTimeout(function () {
				$(".price_slider").slider("values", 0, $(".price_slider").slider("values", 0));
				$(".price_slider").slider("values", 1, $(".price_slider").slider("values", 1));
				$(".price_slider").trigger("slide"); // 슬라이더 이벤트 강제 실행
				filterPrice($(".price_slider").slider("values", 0), $(".price_slider").slider("values", 1)); // 필터링 실행
			}, 100)


			// count 함수
			updateCount();

			$('.item').removeClass('active');
    		$('.item:lt(9)').addClass('active'); // 처음 9개만 active
		}



		/* 영상 로딩 속도 최적화 */
		const videos = document.querySelectorAll(".lazy-video source");
        videos.forEach(video => {
            video.src = video.getAttribute("data-src"); // 나중에 로드
        });
		
		
	});
	


/* 모바일 메뉴창 외부 클릭 감지 */
	document.addEventListener("click", function(event) {
		const menu = document.querySelector(".responsive-navbar.offcanvas.show");
		const closeButton = document.querySelector(".responsive-navbar .btn-close");
	
		if (menu && !menu.contains(event.target) && closeButton) {
			closeButton.click();
		}
	});
	
	


	


	
/* 스크롤 관련 */
	window.onload = function() {
		// URL에서 해시(#) 제거 + Netlify 오류 관련
		if (window.location.hash) {
			requestAnimationFrame(() => {
				history.replaceState(null, null, window.location.pathname + window.location.search);
				window.scrollTo(0, 0);
			});
		}
	
		// 해시값 기반 탭 활성화
		const hash = window.location.hash.substring(1);
		if (hash) {
			const button = document.querySelector(`.info-tab-btn[data-tab="${hash}"]`);
			if (button) {
				activateTab(button);
			}
		}
	};
	

	

}(jQuery));






	


  