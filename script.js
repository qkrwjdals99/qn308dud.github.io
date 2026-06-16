const calendar = document.getElementById("calendar");

const events = {
1:"한국도착",
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
16:"무수 몽골",
17:"무수 몽골",
18:"무수 몽골",
22:"미팅"
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
