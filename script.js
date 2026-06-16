const calendar = document.getElementById("calendar");

const events = {
1:"SOOP 생방 낮 12시 ON 오후 3시쯤 예정 준밧드 합방 ",
2:"휴방",
3:"무수페페데이",
4:"수익신고",
5:"갠방",
6:"카드쇼",
7:"합방",
8:"게임방송",
9:"카드깡",
10:"휴방",
11:"합방",
13:"롤",
14:"포대장 합방",
16:"무수 몽골 1일차",
17:"무수 몽골 2일차",
18:"무수 몽골 3일차",
};

for(let i=1;i<=30;i++){

const day=document.createElement("div");
day.classList.add("day");

if(i===16){
day.classList.add("today");
}

day.innerHTML=`
<div class="day-number">${i}</div>
<div class="dot"></div>
<div class="event">${events[i] || ""}</div>
`;

calendar.appendChild(day);
}
