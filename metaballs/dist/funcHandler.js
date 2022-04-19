"use strict";
const [WIDTH, HEIGHT] = [1024, (1024 * 9) / 16];
const calcFn = (fn, x, y) => {
    try {
        return fn(x - Math.floor(WIDTH / 2), y - Math.floor(HEIGHT / 2));
    }
    catch (e) {
        return 1;
    }
};
const calcSquare = (fn, xTop, yTop) => [
    calcFn(fn, xTop, yTop),
    calcFn(fn, xTop + 1, yTop),
    calcFn(fn, xTop + 1, yTop + 1),
    calcFn(fn, xTop, yTop + 1),
];
const generatePointOfSquare = (xTop, yTop, idx) => {
    return {
        x: xTop + ([1, 2].includes(idx) ? 1 : 0),
        y: yTop + ([2, 3].includes(idx) ? 1 : 0),
    };
};
const getLinePoint = (p1, p2, p1Val, p2Val) => {
    const k = Math.abs(p1Val - 1);
    const l = Math.abs(1 - p2Val);
    return {
        x: (p1.x * l + p2.x * k) / (k + l),
        y: (p1.y * l + p2.y * k) / (k + l),
    };
};
const getLinesFromSquare = (square, xTop, yTop) => {
    const newArr = square.map((v) => (v > 1 ? 1 : 0));
    const sum = newArr.reduce((a, b) => a + b, 0);
    if (sum === 4 || sum === 0) {
        return [];
    }
    else if (sum === 1) {
        const idx = newArr.indexOf(1);
        const p = generatePointOfSquare(xTop, yTop, idx);
        const nextIdx = (idx + 1) % 4;
        const prevIdx = (idx + 3) % 4;
        const nextP = generatePointOfSquare(xTop, yTop, nextIdx);
        const prevP = generatePointOfSquare(xTop, yTop, prevIdx);
        return [
            [
                getLinePoint(p, nextP, square[idx], square[nextIdx]),
                getLinePoint(prevP, p, square[prevIdx], square[idx]),
            ],
        ];
    }
    else if (sum === 2) {
        const idx = newArr.indexOf(1);
        if (newArr[(idx + 2) % 4] === 1) {
            const [idx2, idx3, idx4] = [1, 2, 3].map((i) => (idx + i) % 4);
            const [p, p2, p3, p4] = [idx, idx2, idx3, idx4].map((i) => generatePointOfSquare(xTop, yTop, i));
            const t1 = [
                getLinePoint(p, p2, square[idx], square[idx2]),
                getLinePoint(p2, p3, square[idx2], square[idx3]),
            ];
            const t2 = [
                getLinePoint(p3, p4, square[idx3], square[idx4]),
                getLinePoint(p4, p, square[idx4], square[idx]),
            ];
            return [t1, t2];
        }
        else {
            const [currentIdx, nextIdx] = newArr[(idx + 1) % 4] == 1
                ? [idx, (idx + 1) % 4]
                : [(idx + 3) % 4, idx];
            const nextNextIdx = (nextIdx + 1) % 4;
            const prevIdx = (currentIdx + 3) % 4;
            const [prevP, p, nextP, nextNextP] = [
                prevIdx,
                currentIdx,
                nextIdx,
                nextNextIdx,
            ].map((i) => generatePointOfSquare(xTop, yTop, i));
            return [
                [
                    getLinePoint(nextP, nextNextP, square[nextIdx], square[nextNextIdx]),
                    getLinePoint(prevP, p, square[prevIdx], square[currentIdx]),
                ],
            ];
        }
    }
    else {
        const idx = newArr.indexOf(0);
        const p = generatePointOfSquare(xTop, yTop, idx);
        const nextIdx = (idx + 1) % 4;
        const prevIdx = (idx + 3) % 4;
        const nextP = generatePointOfSquare(xTop, yTop, nextIdx);
        const prevP = generatePointOfSquare(xTop, yTop, prevIdx);
        return [
            [
                getLinePoint(p, nextP, square[idx], square[nextIdx]),
                getLinePoint(prevP, p, square[prevIdx], square[idx]),
            ],
        ];
    }
};
const getLinesFromFn = (fn) => {
    const lst = [];
    for (let x = WIDTH - 1; x >= 0; x--) {
        for (let y = HEIGHT - 1; y >= 0; y--) {
            const sqr = calcSquare(fn, x, y);
            const res = getLinesFromSquare(sqr, x, y);
            res.forEach((r) => lst.push(r));
        }
    }
    return lst;
};
