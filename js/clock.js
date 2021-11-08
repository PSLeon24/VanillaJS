const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

setInterval(getClock, 1000); // 1초마다 getClock 실행 타이머
//setTimeout(Clock, 5000);
//padStart 는 string형에만 쓸 수 있다. padStart(MaxLength, "대체문자");