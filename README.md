<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>한둬얼 팬 아카이브</title>

<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="layout">

    <!-- 사이드바 -->
    <aside class="sidebar">

        <div class="logo">
            <div class="logo-circle">🎡</div>
            <h2>한둬얼</h2>
            <p>팬 아카이브</p>
        </div>

        <nav>
            <a href="#" class="menu active">📅 일정</a>
            <a href="#" class="menu">📢 공지</a>
            <a href="#" class="menu youtube">▶ 유튜브</a>
            <a href="#" class="menu cafe">🟢 팬카페</a>
            <a href="#" class="menu">📂 방송기록</a>
            <a href="#" class="menu">📸 방셀</a>
            <a href="#" class="menu">🎬 클립</a>
        </nav>

        <div class="bottom-btn">
            <button>🏕 놀이뒁산</button>
        </div>

    </aside>

    <!-- 메인 -->
    <main class="main">

        <div class="header">
            <h1>🔵 한둬얼 방송 일정</h1>
            <button>사이트 보기</button>
        </div>

        <div class="calendar-card">

            <div class="calendar-top">
                <h2>2026년 6월</h2>
            </div>

            <div class="weekdays">
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>

            <div class="calendar" id="calendar"></div>

        </div>

    </main>

</div>

<script src="script.js"></script>

</body>
</html>
