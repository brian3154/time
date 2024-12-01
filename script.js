let clock = document.getElementById("clock");
let btn = document.getElementById("btn");
let minInput = document.getElementById("minute");
let secInput = document.getElementById("second");
let inputDate = document.getElementById("inputdate");
let inputDate1 = document.getElementById("inputdate1");
let btn2 = document.getElementById('btn2');

function updateClock() {
    let now = new Date();
    let year = now.getFullYear().toString();
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let day = now.getDate().toString().padStart(2, "0");
    let hours = now.getHours().toString().padStart(2, "0");
    let min = now.getMinutes().toString().padStart(2, "0");
    let sec = now.getSeconds().toString().padStart(2, "0");
    let alltime = `${year}년 ${month}월 ${day}일 ${hours}시 ${min}분 ${sec}초`;
    clock.textContent = alltime;
}

function calculateTime() {
    let number1 = Number(minInput.value);
    let number2 = Number(secInput.value);
    let finalNum = number1 * 60 + number2;
    return finalNum;
}

function calculateDate(){
    
}

setInterval(() => {
    updateClock();
}, 1000); // 초 단위 업데이트

btn.addEventListener("click", function () {
    let minutes = Number(minInput.value);
    let seconds = Number(secInput.value);

    if (isNaN(minutes) || isNaN(seconds)) {
        alert("숫자를 입력해주세요.");
        return;
    }

    if (secInput.value.length > 2) {
        alert("2글자 이내로 입력하시오.");
        return;
    }

    setTimeout(() => {
        alert("타이머 종료!");
    }, calculateTime() * 1000); // 초를 밀리초로 변환
});
