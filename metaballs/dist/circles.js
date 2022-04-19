"use strict";
const getCircleFunction = (c) => {
    return (x, y) => c.radius /
        Math.sqrt(Math.pow(x - c.center.x, 2) + Math.pow(y - c.center.y, 2));
};
const updateCircle = (c) => {
    if (c.center.x + c.radius >= WIDTH / 2 ||
        c.center.x - c.radius <= (-1 * WIDTH) / 2) {
        c.velocity.x *= -1;
    }
    if (c.center.y + c.radius >= HEIGHT / 2 ||
        c.center.y - c.radius <= (-1 * HEIGHT) / 2) {
        c.velocity.y *= -1;
    }
    c.center.x += c.velocity.x;
    c.center.y += c.velocity.y;
};
const getFullFunction = (cs) => {
    return (x, y) => {
        let sum = 0;
        cs.forEach((c) => (sum += getCircleFunction(c)(x, y)));
        return sum;
    };
};
const updateFullCircles = (cs) => {
    cs.forEach((c) => updateCircle(c));
};
const getRandomCircles = (circles) => {
    const getRandom = (min, max) => Math.random() * (max - min) + min;
    return [...Array(circles).keys()].map((_) => {
        const radius = getRandom(20, 60);
        return {
            radius: radius,
            center: {
                x: getRandom((-1 * WIDTH) / 2 + 2 * radius, WIDTH / 2 - 2 * radius),
                y: getRandom((-1 * HEIGHT) / 2 + 2 * radius, HEIGHT / 2 - 2 * radius),
            },
            velocity: {
                x: getRandom(-30, 30),
                y: getRandom(-30, 30),
            },
        };
    });
};
