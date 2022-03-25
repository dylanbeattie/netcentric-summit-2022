function renderCanvas(canvas, getColorAtPixel) {
    let ctx = canvas.getContext('2d');
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            ctx.fillStyle = getColorAtPixel(x, y);
            ctx.fillRect(x, y, 1, 1);
        }
    }
}
export function Chessboard(canvas) {
    let color1 = "#f00";
    let color2 = "#00f";
    let size = 20;
    renderCanvas(canvas, (x, y) => {
        const xOdd = (x % (2 * size) < size);
        const yOdd = (y % (2 * size) < size);
        return (xOdd != yOdd ? color1 : color2);
    });
}

export function Gradiance(canvas) {
    renderCanvas(canvas, (x, y) => {
        let r = (4 * x) % 256
        let g = (x + y) % 256
        let b = y % 256
        return `rgb(${r},${b},${g})`
    });
}

export function DrawRed(canvas) {
    renderCanvas(canvas, function drawRed(x, y) {
        return "#f00";
    });
}
