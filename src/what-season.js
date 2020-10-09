const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  else if(Object.prototype.toString.call(date) === '[object Date]') {
    let month = date.getMonth() + 1;

    switch(month) {
      case 12:
      case 1:
      case 2:
        return 'winter';
      case 3:
      case 4:
      case 5:
        return 'spring';
      case 6:
      case 7:
      case 8:
        return 'summer';
      default:
        return 'autumn';
    } 
  } else {
    throw new Error('Error');
  }
};
