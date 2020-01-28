
 function leapYear(year){
     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
     {         console.log(year+ " is leapYear");     }
 }
 leapYear(2020);


