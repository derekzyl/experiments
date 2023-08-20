var u = 123;
function me(x) {
    var n = String(x);
    var b = n.split("");
    var g;
    if (isNaN(Number(b[0]))) {
        g = b[0];
        b.shift();
    }
    if (Number(b[b.length - 1]) === 0)
        b.pop();
    var f = b.reverse().join("");
    var r = g ? g + f : f;
    switch (true) {
        case Number(r) > Math.pow(2, 31) - 1:
            return 0;
        case Number(r) < -(Math.pow(2, 31)):
            return 0;
        default:
            return Number(r);
    }
}
console.log(me(-98765));
