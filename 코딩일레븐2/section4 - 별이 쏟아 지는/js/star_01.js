

//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]
// 일단 많이 봐라!!
// 별 레이어가 한 두 3개정도 있으면 구현할 수 있겠다.
// 아래는 카드만 두면 되겠구나..
// 이미지는 bottom으로 붙이고
// 이 사이트가 아니더라도 많이 보면 좋다.



window.onload = function(){

    var starBg = document.querySelector(".starBg");
    var title = document.querySelector(".title");

    //스크롤 이벤트
    window.addEventListener("scroll", function(event){
        // scrollTop = document.documentElement.scrollTop;
        var scroll = this.scrollY;
        // console.log(scrollY / 5)
      
        // starBG와 bg 사이의 차이를 두기 위해 translate를 준 것임
      ///한번 스크롤할 때 100 씩 움직이는데, -/3 을 해주어, 그보다 천천히 올라가는 느낌을 줌.
      
        starBg.style.transform = "translateY("+ -scroll/3 +"px)";
        title.style.transform = "translateY("+ scroll/1.7 +"px)";
    });

    //스크롤 이동
    setTimeout(function(){

        window.scrollTo({
            top: document.querySelector('.bottom').offsetTop
            ,behavior: 'smooth'
        });
        // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });

    }, 2000)
}


