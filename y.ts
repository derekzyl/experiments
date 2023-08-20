const u = 123;

function me(x: number) {
  const n: string = String(x);
  const b = n.split("");
  let g;
  if (isNaN(Number(b[0]))) {
    g = b[0];
    b.shift();
  }
  if (Number(b[b.length - 1]) === 0) b.pop();
  const f = b.reverse().join("");
  const r = g ? g + f : f;
  switch (true) {
    case Number(r) > 2 ** 31 - 1:
      return 0;
    case Number(r) < -(2 ** 31):
      return 0;
    default:
      return Number(r);
  }
}

console.log(me(-98765));
