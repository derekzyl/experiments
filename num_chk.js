function n(s) {
    var data = s.trim();
    var v = NaN;
    var check_data = Number(s);
    var regex = /(-)?[0-9]*[a-zA-Z0-9.-]*/g;
    var fd = /([-+])?[0-9]*/g;
    if (Number.isNaN(check_data)) {
        var d = data.split(" ");
        var da = [];
        for (var _i = 0, d_1 = d; _i < d_1.length; _i++) {
            var f = d_1[_i];
            if (f.length > 0) {
                v = Number(f);
                if (!Number.isNaN(v)) {
                    console.log(" inside v house" + v);
                    if (v < 0) {
                        var f_1 = String(v);
                        var ff = f_1.slice(1);
                        var j = Number(ff);
                        console.log("".concat(j, " this is j and ").concat(Math.pow(2, 31)));
                        return j >= Math.pow(2, 31) ? -(Math.pow(2, 31)) : -j;
                    }
                    else {
                        return v >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : v;
                    }
                }
                else if (f.match(regex)) {
                    console.log(" inside v house regex " + v);
                    var me = fd.exec(f);
                    if (me) {
                        var df = Number(me[0]);
                        if (df < 0) {
                            var f_2 = String(df);
                            var ff = f_2.slice(1);
                            var j = Number(ff);
                            return j >= Math.pow(2, 31) ? -(Math.pow(2, 31)) : Number.isNaN(-j) ? 0 : -j;
                        }
                        else {
                            return df >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : Number.isNaN(df) ? 0 : df;
                        }
                    }
                }
                else {
                    return (v = 0);
                }
            }
        }
        return v;
    }
    else {
        if (s.match(regex)) {
            console.log("matcherďegex");
            // const vb = s.replace("e", "i");
            if (s.indexOf("e") !== -1) {
                console.log("inside this mess");
                var fdf = Number(s.split("e")[0]);
                if (fdf < 0) {
                    var f = String(fdf);
                    var ff = f.slice(1);
                    var j = Number(ff);
                    return j >= Math.pow(2, 31) ? -(Math.pow(2, 31)) : Number.isNaN(-j) ? 0 : -j;
                }
                else {
                    return fdf >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : Number.isNaN(fdf) ? 0 : fdf;
                }
            }
            var me = fd.exec(s);
            var fff = Number(s);
            if (Number.isNaN(fff)) {
                if (me && me[0] === null) {
                    var df = Number(me[0]);
                    if (df < 0) {
                        var f = String(df);
                        var ff = f.slice(1);
                        var j = Number(ff);
                        return j >= Math.pow(2, 31) ? -(Math.pow(2, 31)) : Number.isNaN(-j) ? 0 : -j;
                    }
                    else {
                        return df >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : Number.isNaN(df) ? 0 : df;
                    }
                }
            }
            else {
                if (check_data < 0) {
                    var f = String(check_data);
                    var ff = f.slice(1);
                    var j = Number(ff);
                    console.log("".concat(j, " this is check data and ").concat(Math.pow(2, 31)));
                    return j >= Math.pow(2, 31) ? -(Math.pow(2, 31)) : -j;
                }
                else {
                    console.log("else own  ".concat(Math.pow(2, 31)));
                    return check_data >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : check_data;
                }
            }
        }
        else if (check_data < 0) {
            var f = String(check_data);
            var ff = f.slice(1);
            var j = Number(ff);
            console.log("".concat(j, " this is check data and ").concat(Math.pow(2, 31)));
            return j >= Math.pow(2, 31) ? -(Math.pow(2, 31)) : -j;
        }
        else {
            console.log("else own  ".concat(Math.pow(2, 31)));
            return check_data >= Math.pow(2, 31) ? Math.pow(2, 31) - 1 : check_data;
        }
    }
    // return Number(Number(nr).toFixed(2));
}
console.log(n("         +114249g23041"));
