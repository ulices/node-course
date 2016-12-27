var i = 0;
var countLimit = 8;

while (i < countLimit) {
  console.log('while: ' + i);
  i++;
}

for (i = 0; i < countLimit; i++) {
  console.log('for: ' + i);
}

function setPoints (startingPoint, stopingPoint) {
  console.log('Set start and stop');

  if (startingPoint < stopingPoint) {
    var auxiliar = startingPoint;
    startingPoint = stopingPoint;
    stopingPoint = auxiliar;
  }

  return [startingPoint, stopingPoint];
}

function countDownWhile (startingPoint, stopingPoint) {
  var points = setPoints(startingPoint, stopingPoint);

  while (points[0] >= points[1]) {
    console.log('countDownWhile: ' + points[0]);
    points[0]--;
  }

}

function countDownFor (startingPoint, stopingPoint) {
  var points = setPoints(startingPoint, stopingPoint);

  for (; points[0] >= points[1]; points[0]--) {
    console.log('countDownFor: ' + points[0]);
  }

}

countDownWhile(10, 15);
countDownFor(10, 0);

