function renderCanvas(canvas, getColorAtPixel) {
    let ctx = canvas.getContext('2d');
    for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
            ctx.fillStyle = getColorAtPixel(x, y);
            ctx.fillRect(x, y, 1, 1);
        }
    }
}

export function DylanLaserPattern(canvas) {
    renderCanvas(canvas, (x, y) => {
        let r = 255 * Math.sin(200 - x / 20) + 255 * Math.cos(150 - y / 20)
        let g = 50 * Math.sin(200 - x / 40) + (5 * Math.cos(150 - y / 10))
        let b = 255 * Math.cos(150 - y / 20)
        if (x % 20 == 0 || y % 20 == 0) g = 255;
        return `rgb(${r},${g},${b})`
    });
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
