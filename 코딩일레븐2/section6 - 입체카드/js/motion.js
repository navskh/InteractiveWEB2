var wrap;
var x = 0,
	y = 0;
var mx = 0,
	my = 0;
var isMobile = false;
var isIos = false;

window.onload = function () {
	wrap = document.querySelector('.contentWrap');
	isMobile = mobileChk();
	isIos = iosChk();

	var button = document.querySelectorAll('button')[0];

	button.addEventListener('click', function () {
		button.classList.add('dimd');
		wrap.classList.add('active');

    if (isMobile) {
			//모바일이면 실행
			if (isIos) {
				//ios일때만 실행 
        // DeviceOrientationEevnt 기기방향을 가져와서 이벤트 발생
				DeviceOrientationEvent.requestPermission() 
					.then(function () {
						console.log('DeviceOrientationEvent, DeviceMotionEvent enabled');
						mobileOrientationChk();
					})
					.catch(console.error);
			} else {
				mobileOrientationChk();
			}

			function mobileOrientationChk() {
				window.addEventListener('deviceorientation', function (event) {
					//디바이스가 움직임 감지될때 실행
					x = event.gamma;
					y = event.beta;
				});
				loopMobile();
			}
		} else {
			//pc면 실행
			window.addEventListener('mousemove', function (e) {
				x = e.clientX - window.innerWidth / 2;
				y = e.clientY - window.innerHeight / 2;
				//마우스 위치값을 화면의 정가운데가 0,0이 되도록 맞춤
			});
			loop();
		}
	});
};

function loopMobile() {
	mx += (x - mx) * 0.1;
	my += (y - my) * 0.1;
	wrap.style.transform =
		'translate3d(-50%, -50%, 0) rotateX(' +
		(my - 50) +
		'deg) rotateY(' +
		mx +
		'deg)';
	window.requestAnimationFrame(loopMobile);
}

function loop() {
	mx += (x - mx) * 0.1;
	my += (y - my) * 0.1;
	//가속도 설정. 뒤의 값을 변경하면 가속도 값 변경

	wrap.style.transform =
		'translate3d(-50%, -50%, 0) rotateX(' +
		my / 10 +
		'deg) rotateY(' +
		-mx / 10 +
		'deg)';
	//마우스 위치에 따른 대상의 움직임 위치 셋팅

	window.requestAnimationFrame(loop);
	//반복 실행
}

function mobileChk() {
	var mobileKeyWords = new Array(
		'Android',
		'iPhone',
		'iPad',
		'BlackBerry',
		'Windows CE',
		'SAMSUNG',
		'LG',
		'MOT',
		'SonyEricsson',
	);
	for (var info in mobileKeyWords) {
		if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
			return true;
		}
	}
	return false;
}

function iosChk() {
	var mobileKeyWords = new Array('iPhone', 'iPad');
	for (var info in mobileKeyWords) {
		if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
			return true;
		}
	}
	return false;
}
