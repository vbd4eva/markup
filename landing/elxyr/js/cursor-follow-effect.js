const domElementInterface = {
	check() {
		return ['create', 'addClassList', 'get', 'init'].every(i => this[i]);
	},

	create: el => document.createElement(el || 'div'),

	get({ elem, classList, amount = 1 }) {
		const elArr = new Array(1 * amount).fill().map(i => this.create(elem));
		if (classList?.length) elArr.forEach(el => this.addClassList.call(el, classList));
		return elArr;
	},

	init(elemOptions = {}, returnElements = false) {
		if (!this?.check?.()) return;
		elemOptions.ref = this.get(elemOptions);
		return returnElements ? elemOptions.ref : true;
	},

	addClassList(classArr = []) {
		if (!this?.classList || !classArr.length) return;
		this.classList.add(classArr);
	},
};

const initialHtmlElements = [];

const effect = {
	use: true,
	// elem: 'div',
	classList: ['cursor__follower'],
	amount: 3,
};

const cursor = {
	use: true,
	// elem: 'div',
	classList: ['cursor'],
	// amount: 1,

};
effect.use &&
	domElementInterface.init(effect) &&
	initialHtmlElements.push(...effect.ref);

cursor.use &&
	domElementInterface.init(cursor) &&
	initialHtmlElements.push(...cursor.ref);


// const ecu = initialHtmlElements.reduce((acc, elem, index) => {
// 	if (!acc) return elem;
// 	console.log('acc', acc);
// 	acc.after(elem);
// 	console.log('acc', acc);

// 	return acc;
// })
console.log(cursor.ref);


// let value = arr.reduce(function (accumulator, item, index, array) {
// 	// ...
// }, [initial]);

let clientX = -100;
let clientY = -100;
const cursorRef = cursor.ref[0];
const followersRef = effect.ref;
const initCursor = () => {
	document.body.prepend(...initialHtmlElements);
	document.addEventListener('mousemove', e => {

		cursorRef.style.top = e.pageY + 'px';
		cursorRef.style.left = e.pageX + 'px';

		clientX = e.clientX;
		clientY = e.clientY;
	});

	gsap.set(followersRef, {
		x: clientX,
		y: clientY,
	});

	const render = () => {
		gsap.to(followersRef, {
			duration: 0.5,
			x: clientX,
			y: clientY,
			stagger: {
				amount: 0.5,
				from: 0,
				ease: 'none',
			},
		});
		requestAnimationFrame(render);
	};
	requestAnimationFrame(render);
};

(!initialHtmlElements || initCursor()) &&
	console.log(`cursor-follow-effect.js and didn't start.`);
