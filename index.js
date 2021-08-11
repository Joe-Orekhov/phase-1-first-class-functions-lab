
function returnFirstTwoDrivers(drivers){ 
    return drivers.slice(0, 2);
  }

function returnLastTwoDrivers(drivers){ 
    return drivers.slice(drivers.length-2);
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
const fareTriplefareQuintupler = (x)=> {return (x**2)};
return fareTriplefareQuintupler;
}

function fareDoubler(x){
    return (x*2);
}

function fareTripler(x){
    return (x*3);
}

function selectDifferentDrivers(arrayOfDrivers, select){
    return select(arrayOfDrivers);
}
