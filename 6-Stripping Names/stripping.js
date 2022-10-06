console.log('Name with white spaces')
console.log('   Asim Khan');
console.log('Asim Khan   ');
console.log('   Asim Khan  ');

console.log('Name After stripping white spaces')
function strip(_Name) {
  
  // use (^\s+ ) for replace spaces at start of string and

  //use (\s+$)for replace spaces at the end of string

  return _Name.replace(/^\s+|\s+$/g, '');
       }
console.log(strip("   Asim Khan"));
console.log(strip('Asim Khan   '));
console.log(strip('   Asim Khan  '));