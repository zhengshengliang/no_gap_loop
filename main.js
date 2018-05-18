// 正交
// 只用改css不用改js

// index一般下标0开始  n一般1开始

// 一年的程序员写不出来方方的那种代码
// 状态机？


let n;
init();

function init() {
	n = 1;
	$(`.images > img:nth-child(${n})`).addClass('current').siblings().addClass('enter');
}

setInterval(() => {
	$(`.images > img:nth-child(${control(n)})`).removeClass('current').addClass('leave').one('transitionend', (e) => {
		$(e.currentTarget).removeClass('leave').addClass('enter');
	});

	$(`.images > img:nth-child(${control(n + 1)})`).removeClass('enter').addClass('current');

	console.log(n)
	++n;
}, 3000)


const control = function (n) {
	if (n > 3) {
		n = n % 3;
		if (n === 0) {
			n = 3;
		}
	}
	return n;
}