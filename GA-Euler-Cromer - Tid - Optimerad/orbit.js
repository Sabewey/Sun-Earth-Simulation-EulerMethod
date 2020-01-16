
var G = 6.673E-11;
var m1 = 5.972E24;
var m2 = 1.98847E30;
var x1 = 152.1E9;
var x2 = 0;
var y1 = 0;
var y2 = 0;
var v1x = 0;
var v2x = 0;
var v1y = 29.29E3;
var v2y = 0;
var dt = 0.1;

function euler_cromer() {
    var t0 = performance.now();
    for (let i = 0; i < 315360000; i++) {
        dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        F = G * m1 * m2 / (dist * dist)
        F1x = F * (x2 - x1) / dist
        F1y = F * (y2 - y1) / dist
        F2x = -F1x
        F2y = -F1y
        a1x = F1x / m1
        a1y = F1y / m1
        a2x = F2x / m2
        a2y = F2y / m2
        v1x = v1x + a1x * dt
        v1y = v1y + a1y * dt
        v2x = v2x + a2x * dt
        v2y = v2y + a2y * dt
        x1 = x1 + v1x * dt
        y1 = y1 + v1y * dt
        x2 = x2 + v2x * dt
        y2 = y2 + v2y * dt
    }
    var t1 = performance.now();
    console.log("function took " + (t1-t0) + " milliseconds");
}
