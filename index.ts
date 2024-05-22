import { plot } from 'nodeplotlib';
import type { Plot } from 'nodeplotlib';

const acc = 1;
const dec = 0.75;
let d = 0;
let v = 80;

const steps: `${'wait' | 'slowTo' | 'accTo'}: ${number}`[] = [
    'wait: 5',
    'slowTo: 40',
    'wait: 5',
    'slowTo: 10',
    'wait: 5',
    'slowTo: 0',
    'accTo: 40',
    'wait: 15',
    'slowTo: 0',
];

const xs: number[] = [];
const ys: number[] = [];

xs.push(d);
ys.push(v);

steps.forEach((step) => {
    const type = (step as unknown as string).split(': ')[0] as
        | 'wait'
        | 'slowTo'
        | 'accTo';
    const value = +(step as unknown as string).split(': ')[1];

    if (type === 'wait') {
        d += v * value;

        xs.push(d);
        ys.push(v);
    } else if (type === 'slowTo') {
        while (v > value) {
            v -= dec;
            d += v;

            if (v - value < dec) {
                v = value;
            }

            xs.push(d);
            ys.push(v);
        }
    } else if (type === 'accTo') {
        while (v < value) {
            v += acc;
            d += v;

            if (value - v < acc) {
                v = value;
            }

            xs.push(d);
            ys.push(v);
        }
    }
});

xs.push(d);
ys.push(v);

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
