const domElement = {
	check() { return ['create', 'addClassList', 'get'].every(i => this[i]) },
	create: el => document.createElement(el || 'div'),
	get(options) {
		const el = this.create(options?.elem);
		if (!options?.class?.length) return el;
		this.addClassList.call(el, options.class);
		return el;
	},
	addClassList(classArr = []) {
		if (!this?.classList || !classArr.length) return;
		this.classList.add(classArr)
	},
}

const elementsToInsert = [];

const cursor = {
	use: true,
	class: ['cursor'],
	init() {
		if (!this.use || !domElement?.check?.()) return;
		this.ref = domElement.get(this);
		// return this?.ref?.nodeType && this.ref;
		return Boolean(this?.ref?.nodeType);
	}
};
// if (cursor.use) {
// 	cursor.ref = getElement.call(cursor);
// 	elementsToInsert = elementsToInsert ? elementsToInsert.after(cursor.ref) : cursor.ref;
// };

// cursor.init(); - return cursor Element


cursor.init() && elementsToInsert.push(cursor.ref)

console.log(cursor.ref);


let clientX = -100;
let clientY = -100;
// const cursor = document.querySelector(".js__cursor");
const cursorEffect = document.querySelector(".js__cursor-effect");
const cursorDiv = cursorEffect.querySelectorAll(".js__cursor-effect-unit");
const initCursor = () => {
	document.body.before(cursor.ref);
	// document.body.before(elementsToInsert);
	document.addEventListener("mousemove", (e) => {
		cursor.ref.style.top = e.pageY + "px";
		cursor.ref.style.left = e.pageX + "px";
		clientX = e.clientX;
		clientY = e.clientY;

	});

	gsap.set(cursorDiv, {
		x: clientX,
		y: clientY
	});

	const render = () => {
		gsap.to(cursorDiv, {
			duration: .5,
			x: clientX,
			y: clientY,
			stagger: {
				amount: .5,
				from: 0,
				ease: 'none'
			}
		});
		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}

(!elementsToInsert || initCursor()) && console.log(`cursor-follow-effect.js and didn't start.`);