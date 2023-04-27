// reusable file package for Date, day, and year

module.exports.getDate = getDate;

function getDate() {

  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
    // year: 'numeric'
  };

  const day = today.toLocaleDateString("en-US", options);

  return day;
}

module.exports.getDay = getDay;

function getDay() {

    const today = new Date();

    const options = {
      weekday: 'long'
    };
  
    const day = today.toLocaleDateString("en-US", options);
  
    return day;
  }

  module.exports.getYear = getYear;

  function getYear() {

    const today = new Date();
  
    const options = {
    //   weekday: 'long',
    //   day: 'numeric',
    //   month: 'long'
      year: 'numeric'
    };
  
    const day = today.toLocaleDateString("en-US", options);
  
    return day;
  }