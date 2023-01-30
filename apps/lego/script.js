const onClickFunctions = {};

document.body.addEventListener('click', legoClickHandler);

function legoClickHandler({ target }) {
    const onClick = onClickFunctions[target.dataset.click];
    if (typeof onClick !== 'function') return;
    onClick(target);
}

// Controll

onClickFunctions.addBrickBefore = () => {
    addBrick('before');
}
onClickFunctions.addBrickAfter = () => {
    addBrick('after');
}
// Brick
function addBrick(position) {
    position = ['after', 'before'].find(el => el === position);
    if (!position) return;
    // const controlledBlock --- is from html page on element.id = 'controlledBlock'  
    if (typeof controlledBlock === 'undefined') return;
    if (!controlledBlock[position]) return;

    const brick = getNewBrick();
    // colorize
    setElementRandomBgColor(brick)
    //DOM insert 
    controlledBlock[position](brick);
}

function getNewBrick() {
    const newBrick = document.createElement('div');
    newBrick.classList.add(...['block', 'block__brick']);
    return newBrick;
}

// random color
function setElementRandomBgColor(element) {
    element.style.backgroundColor = getRandomColorHex();
}
function getRandomColorHex() { return '#' + Math.floor(Math.random() * 16777215).toString(16); }