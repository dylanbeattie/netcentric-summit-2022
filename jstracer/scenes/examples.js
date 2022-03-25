import { Camera, Scene, Vector, Color } from '../modules/tracer.js';

export function EmptySky() {
    let camera = new Camera(new Vector(-4, 1, -5), new Vector(0, 1, 0));
    let background = new Color(0, 0, 25);
    return new Scene(camera, background);
}