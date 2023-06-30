// == assing function

function add(val1: number, val2: number, cb: (num: number) => void) {
  const result = val1 + val2;
  let value = cb(result); // here return type not care by ts.
  console.log("value: ", value); // value:  73
}

add(52, 21, (num: number) => {
  console.log("number: ", num); // number:  73
  return num;
});
