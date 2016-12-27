var isValid = false;

if (isValid === true) {
  console.log('is Valid');
} else {
  console.log('is not Valid');
}


function toggleBoolean (booleanVar) {
  if (typeof booleanVar === 'boolean') {
    return !booleanVar;
  } else {
    console.log('Warning! Not a boolean.');
  }
}

var newBoolean = toggleBoolean(isValid);
console.log(newBoolean);

newBoolean = toggleBoolean('Sus');
console.log(newBoolean);
