const scaleSorceRef = document.querySelector('.dev-scene__block');
const opacitySorceceRef = document.querySelector('.dev__source-img');
const controlPanel = document.querySelector('.dev-scene__control');
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