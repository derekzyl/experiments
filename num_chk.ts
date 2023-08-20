function n(s: string): number {
  const data = s.trim();
  let v: number = NaN;
  const check_data = Number(s);
  const regex = /(-)?[0-9]*[a-zA-Z0-9.-]*/g;
  const fd = /([-+])?[0-9]*/g;

  if (Number.isNaN(check_data)) {
    const d = data.split(" ");
    let da = [];
    for (const f of d) {
      if (f.length > 0) {
        v = Number(f);

        if (!Number.isNaN(v)) {
          console.log(" inside v house" + v);
          if (v < 0) {
            const f = String(v);
            const ff = f.slice(1);
            const j = Number(ff);
            console.log(`${j} this is j and ${2 ** 31}`);
            return j >= 2 ** 31 ? -(2 ** 31) : -j;
          } else {
            return v >= 2 ** 31 ? 2 ** 31 - 1 : v;
          }
        } else if (f.match(regex)) {
          console.log(" inside v house regex " + v);

          const me = fd.exec(f);
          if (me) {
            const df = Number(me[0]);

            if (df < 0) {
              const f = String(df);
              const ff = f.slice(1);
              const j = Number(ff);

              return j >= 2 ** 31 ? -(2 ** 31) : Number.isNaN(-j) ? 0 : -j;
            } else {
              return df >= 2 ** 31 ? 2 ** 31 - 1 : Number.isNaN(df) ? 0 : df;
            }
          }
        } else {
          return (v = 0);
        }
      }
    }
    return v;
  } else {
    if (s.match(regex)) {
      console.log("matcherďegex");
      // const vb = s.replace("e", "i");
      if (s.indexOf("e") !== -1) {
        console.log("inside this mess");
        const fdf = Number(s.split("e")[0]);
        if (fdf < 0) {
          const f = String(fdf);
          const ff = f.slice(1);
          const j = Number(ff);

          return j >= 2 ** 31 ? -(2 ** 31) : Number.isNaN(-j) ? 0 : -j;
        } else {
          return fdf >= 2 ** 31 ? 2 ** 31 - 1 : Number.isNaN(fdf) ? 0 : fdf;
        }
      }
      const me = fd.exec(s);
      const fff = Number(s);
      if (Number.isNaN(fff)) {
        if (me && me[0]! === null) {
          const df = Number(me[0]);

          if (df < 0) {
            const f = String(df);
            const ff = f.slice(1);
            const j = Number(ff);

            return j >= 2 ** 31 ? -(2 ** 31) : Number.isNaN(-j) ? 0 : -j;
          } else {
            return df >= 2 ** 31 ? 2 ** 31 - 1 : Number.isNaN(df) ? 0 : df;
          }
        }
      } else {
        if (check_data < 0) {
          const f = String(check_data);
          const ff = f.slice(1);
          const j = Number(ff);
          console.log(`${j} this is check data and ${2 ** 31}`);
          return j >= 2 ** 31 ? -(2 ** 31) : -j;
        } else {
          console.log(`else own  ${2 ** 31}`);
          return check_data >= 2 ** 31 ? 2 ** 31 - 1 : check_data;
        }
      }
    } else if (check_data < 0) {
      const f = String(check_data);
      const ff = f.slice(1);
      const j = Number(ff);
      console.log(`${j} this is check data and ${2 ** 31}`);
      return j >= 2 ** 31 ? -(2 ** 31) : -j;
    } else {
      console.log(`else own  ${2 ** 31}`);
      return check_data >= 2 ** 31 ? 2 ** 31 - 1 : check_data;
    }
  }

  // return Number(Number(nr).toFixed(2));
}

console.log(n("         +114249g23041"));
