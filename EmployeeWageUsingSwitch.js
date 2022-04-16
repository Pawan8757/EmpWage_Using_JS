const IS_ABSENT =1;
const IS_PERSENT =2;
const WAGE_PER_HOUR=20;

let empHrs=0;
let empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IS_ABSENT:
        empHrs=4;
        break;
    
    case IS_PERSENT:
        empHrs=8;
        break;

    default:
        empHrs=0;
}
let Wages = empHrs*WAGE_PER_HOUR;
console.log("Emp Wage =" +Wages);