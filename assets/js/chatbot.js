/* -------------------- 1. 입력창 -------------------- */
const textarea = document.getElementById('userInput');
const clearButton = document.querySelector('.chat-clear');

// 초기 설정
textarea.focus();

// 입력창 상태 업데이트 - 입력창에 내용이 있으면 삭제 버튼 표시
function updateClearButtonState() {
    clearButton.style.display = textarea.value.trim() !== '' ? 'flex' : 'none';
}

// 입력창 초기화 - 입력창 내용 삭제 + 포커스 + 삭제 버튼 상태 업데이트
function clearInput() {
    textarea.value = '';
    textarea.focus();
    updateClearButtonState();
}

// 이벤트 리스너
textarea.addEventListener('input', updateClearButtonState); // 입력 이벤트 감지
clearButton.addEventListener('click', clearInput); // 삭제 버튼 클릭 이벤트



/* -------------------- 2. 메시지 딜레이 -------------------- */
const chatM1 = document.getElementById('chat-m1');
const chatM2 = document.getElementById('chat-m2');

function showMessage(element, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            element.classList.remove('hidden');
            resolve(); // 지연 완료
        }, delay);
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayInitialMessages() {
    await showMessage(chatM1, 800);
    await showMessage(chatM2, 800);
    textarea.disabled = false; // 사용자 입력 활성화
    textarea.focus();
}

// 초기 메시지 출력 실행
displayInitialMessages();



/* -------------------- 3. 메시지 입력 -------------------- */
const messageBox = document.querySelector('.message-box');

// 사용자 메시지 추가
function addUserMessage(message) {
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'message-user');
    userMessage.textContent = message;
    messageBox.appendChild(userMessage);
    scrollToBottom();
}

function scrollToBottom() {
    messageBox.scrollTop = messageBox.scrollHeight;
}

// 사용자 메시지 전송
async function sendMessage() {
    const userInput = textarea.value.trim(); // 입력값 가져오기 + 앞뒤 공백 제거
    if (!userInput) return; // 빈 입력값 무시

    addUserMessage(userInput); // 사용자 메시지 추가
    clearInput(); // 입력창 초기화

    // 서버 응답 가져오기
    const botResponse = responses[userInput] || "죄송합니다, 해당 질문에 대한 답변을 찾을 수 없습니다.";
    // await delay(800);
    addBotMessage(botResponse); // 서버 메시지 추가
}

// 엔터키로 메시지 전송
textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});



/* -------------------- 3. 메시지 입력 -------------------- */
// 서버 답변 정의
const responses = {
    "우주여행 패키지 문의": "우주여행 패키지는 다양한 코스가 있습니다. 자세한 사항은 여기를 참고하세요.",
    "필요한 건강검진 문의": "우주여행 전 건강검진 항목은 다음과 같습니다: 심박수, 혈압, 체력 검사.",
    "우주복, 장비 문의": "우주복과 장비는 패키지에 포함되어 있습니다. 추가 정보는 문의하세요.",
    "상담원 연결": "상담원이 곧 연결됩니다. 잠시만 기다려 주세요!"
};

// 챗봇 메시지 추가
function addBotMessage(text) {
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'message-server');
    botMessage.textContent = text;
    messageBox.appendChild(botMessage);
    scrollToBottom();
}

// 카테고리 선택 버튼 이벤트
const categoryBtns = document.querySelectorAll('.c-btn');
categoryBtns.forEach(button => {
    button.addEventListener('click', async () => {
        const userMessage = button.textContent;
        const botResponse = responses[userMessage];

        addUserMessage(userMessage);
        // await delay(800);
        addBotMessage(botResponse);
    });
});






/* 임시 */
const themeBtns = document.querySelectorAll('.theme-switcher');
themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    });
});



/* 스크롤 버튼 */
jQuery.noConflict();
jQuery(function($) {
    // 스크롤 이벤트 등록
    $('.message-box').on('scroll', function() {
        var scrolled = $(this).scrollTop();
        var windowHeight = $(this).height();
        var documentHeight = this.scrollHeight;

        // 'go-bottom' 버튼 활성화 조건
        if (scrolled + windowHeight < documentHeight - 100) {
            $('.go-bottom').addClass('active');
        } else {
            $('.go-bottom').removeClass('active');
        }
    });

    // 버튼 클릭 이벤트
    $('.go-bottom').on('click', function() {
        $('.message-box').animate({ scrollTop: $('.message-box')[0].scrollHeight }, 500);
    });
});


