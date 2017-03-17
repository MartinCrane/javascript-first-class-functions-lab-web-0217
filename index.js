function countdown(countdown) {
  return window.setTimeout(countdown, 2000);

}

// function hey() { console.log('hey')}
// countdown(hey)

function createMultiplier(number) {
  return function multiply(num) {
    return num * number;
  };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function createMultiplierBonus() {

}

function multiplier(multiplierValue, value) {
  return multiplierValue * value;
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);
// doublerWithBind(4);
