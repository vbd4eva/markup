

let clientX = -100;
let clientY = -100;
const cursor = document.querySelector(".js__cursor");
const cursorEffect = document.querySelector(".js__cursor-effect");
const cursorDiv = cursorEffect.querySelectorAll(".js__cursor-effect-unit");
const initCursor = () => {
	
	document.addEventListener("mousemove", (e) => {
		cursor.style.top = e.pageY + "px";
  		cursor.style.left = e.pageX + "px";
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

(cursorEffect && initCursor()) || console.log(`cursor-follow-effect.js couldn't find the hs marker ".js__cursor-effect" and didn't start.`);