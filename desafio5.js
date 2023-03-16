function stringInvert(str) {
    return (str === '') ? '' : stringInvert(str.substr(1)) + str.charAt(0);
  }
  console.log(stringInvert("String"));