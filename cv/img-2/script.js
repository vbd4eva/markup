const scaleSorceRef = document.querySelector('.js__dev-scene-image');
const opacitySorceceRef = document.querySelector('.js__dev-scene-image');
const controlPanel = document.querySelector('.js__dev-scene-page-control');
// console.log(scaleDivREf.style);
controlPanel.addEventListener('click', controlClickHandler);


const actionsData = {
    opacity: { ref: opacitySorceceRef, cssRule: 'opacity', value: (val)=>val},
    scale: {ref:scaleSorceRef, cssRule: 'transform', value: (val)=>`scale(${val})`}
};

function controlClickHandler(e) {
    const {target} =  e ;
    let action = target.classList?.value;
    let param = target.dataset?.[action];
    if (!param || !actionsData[action] ) return;

    const { ref, cssRule, value } = actionsData[action];
    ref.style[cssRule] = value(param);
}