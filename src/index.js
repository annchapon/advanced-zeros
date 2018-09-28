module.exports = function getZerosCount(number, base) {
  let zeros = number;
  let myBase  = base;
  for (let i = 2; i <= base; i++) {
    let zNum = 0;
    let myNumber = number;
    if (myBase % i === 0) {
      let zBase = 0;
      while (myBase % i === 0) {
        zBase++;
        myBase = Math.floor(myBase/i);
      }
      while (myNumber/i > 0) {
        zNum = zNum + Math.floor(myNumber/i);
        myNumber = Math.floor(myNumber/i);
      }
      zeros = Math.floor(Math.min(zeros, zNum/zBase));
    }
  }
  return zeros;
}