//https://www.youtube.com/watch?v=lyf7UkkcI1I
//[스타벅스 현대카드] 별이 쏟아지는, 스타벅스 현대카드]

//https://cdnjs.com/libraries/gsap
//트윈맥스 cdn

/**
 * twinmax 에 관하여...
 *
 */

window.onload = function () {
	var starBg = document.querySelector('.starBg');
	var title = document.querySelector('.title');
	var topBtn = document.querySelector('.topBtn');

	//스크롤 이벤트
	window.addEventListener('scroll', function (event) {
		// scrollTop = document.documentElement.scrollTop;
		var scroll = this.scrollY;
		starBg.style.transform = 'translateY(' + -scroll / 3 + 'px)';
		title.style.transform = 'translateY(' + scroll / 1.7 + 'px)';
	});

	//텍스트 모션 -하는방법이 많음 svg 로할 수 도 있고..
	/**
	 * 그냥 div로 감싸서, query selector로 모두 가져와서
	 * tween max를 씀.
	 * 가장 많이 쓰는 부분이 to를 쓰는데 여기서는 From을 사용함.
	 * Power3.easeinOut
	 * 다라락 나오게 만들어줌
	 * 여러가지 많이할 수 있음
	 * scale 도 쓸 수 있고
	 * rotate도 쓸 수 있고..
	 * from : 저기서 이렇게 (다라락 나타남)
	 * to : 여기서 저렇게 (다라락 사라짐)
	 *
	 */
	for (var i = 0; i < title.querySelectorAll('div').length; i++) {
		var _text = title.querySelectorAll('div')[i];

		TweenMax.from(_text, 1, {
			autoAlpha: 0,
			// scale:4,
			// rotate: Math.random()*360,
			delay: Math.random() * 1,
			ease: Power3.easeInOut,
		});
	}

	//스크롤 이동하는 3가지 방법
	// setTimeout(function(){
	//     window.scrollTo({
	//         top: document.querySelector('.bottom').offsetTop
	//         ,behavior: 'smooth'
	//     });
	//     // document.querySelector('.bottom').scrollIntoView({ behavior: 'smooth' });
	// }, 2000)

	/**
	 * 위는 아까 했던거고 (star1.js 참고)
	 * tweenmax를 써서
	 * to 로 scorll 값을 넘겨준다.
	 * 1.7초 뒤에 아래로 내려가라
	 */

	TweenMax.to(window, 2, {
		scrollTo: {
			y: '.bottom',
			// autoKill: true
		},
		delay: 1.7,
		ease: Power4.easeInOut,
	});

	//하단 영역 커지는 것
	TweenMax.from('.bottom', 2.5, {
		scale: 0.7,
		y: 100,
		delay: 2.2,
		ease: Power3.easeInOut,
	});

	// top btn 클릭했을 때 0으로 가게끔 만들어 줌.
	topBtn.addEventListener('click', function () {
		TweenMax.to(window, 1.5, {
			scrollTo: {
				y: '.top', // class를 가지고도 갈 수 있음 css selector
				autoKill: true,
			},
			ease: Power3.easeInOut,
		});
	});

	var bgColorArr = ['#85FFBD', '#FFFB7D', '#E0C3FC', '#00DBDE'];
	var cardItem = document.querySelector('.contWrap').querySelectorAll('li');

	for (var i = 0; i < cardItem.length; i++) {
		(function (idx) {
			cardItem[idx].onclick = function () {
				// alert(idx)
				document.getElementsByTagName('body')[0].style.background = bgColorArr[idx];
			};
		})(i);
	}
};
