const classMarkShow = "hide-panel--show";
const refHidePanels = document.querySelectorAll('.js__hide-panel');
const onStopMouseMoveDebounceTime = 1000;
// 

handleMouseMove();

// 
function handleMouseMove() {
    document.addEventListener('mousemove', onStartMouseMove, {
  once : true
});
}
function onStartMouseMove() {
    refHidePanels.forEach(el=>el.classList.remove(classMarkShow));
    document.addEventListener('mousemove', debounce(onStopMouseMove, onStopMouseMoveDebounceTime));
}
function onStopMouseMove() {
    refHidePanels.forEach(el=>el.classList.add(classMarkShow));
    handleMouseMove();
}
function debounce(func, timeout){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
