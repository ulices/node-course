function doWork () {
  throw new Error('unable to do work');
}


try {
  //throw new Error('Unable to decrypt accounts');
  doWork();
} catch (e) {
  console.log(e.message);
} finally {
  console.log('Finally block executed!');
}

console.log('Try catch ended');
