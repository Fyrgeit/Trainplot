import { plot } from 'nodeplotlib';
import type { Plot } from 'nodeplotlib'

const xs: number[] = [];
const ys: number[] = [];

for (let t = 0; t < 10; t++) {
    xs.push(t)
    ys.push(t**2)    
}

const data: Plot[] = [
  {
    x: xs,
    y: ys,
    type: 'scatter',
    line: {
        color: 'red'
    }
  },
];

plot(data);