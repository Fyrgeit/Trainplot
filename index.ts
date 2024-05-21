import { plot } from 'nodeplotlib';
import type { Plot } from 'nodeplotlib';

const xs: number[] = [];
const ys: number[] = [];

let d = 0;
let v = 40;
let t = 0;
let timer = 0;

while (t < 3600) {
    if (t > 10 && v > 10) {
        v -= 0.5;
    } else if (t > 120 && v > 0) {
        v -= 0.4;
    }

    d += v;

    xs.push(d);
    ys.push(-t);
    t++;
    timer++;

    if (t >= 200) break;
}

const data: Plot[] = [
    {
        x: xs,
        y: ys,
        type: 'scatter',
        line: {
            color: 'red',
        },
    },
];

plot(data);
