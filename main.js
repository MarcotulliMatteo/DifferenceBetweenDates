/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 * 
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
*/
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    const monthInAYear = 12;
    const millisecondInADay = 1000 * 60 * 60 * 24;
  
    const [firstDay, firstMonth, firstYear] = dates[0]
        .split(".")
        .map((val) => parseInt(val));
    const [secondDay, secondMonth, secondYear] = dates[1]
        .split(".")
        .map((val) => parseInt(val));
  
    const date1 = new Date(`${firstMonth}.${firstDay}.${firstYear}`);
    const date2 = new Date(`${secondMonth}.${secondDay}.${secondYear}`);
  
    const totalMsDifference = Math.abs(date2.getTime() - date1.getTime());
    const totalDayDifference = Math.round(totalMsDifference / millisecondInADay);
  
    let monthDifference = secondMonth - firstMonth;
    if (monthDifference >= 0) {
        monthDifference -= 1;
    } else {
        monthDifference = monthInAYear - firstMonth - 1 + secondMonth;
    }
    if (secondDay >= firstDay) {
        monthDifference += 1;
    } else if (firstMonth === secondMonth && firstDay > secondDay) {
        monthDifference += monthInAYear;
    }
  
    let yearDifference = secondYear - firstYear;
    if (yearDifference > 0) {
        if (firstMonth > secondMonth) {
            yearDifference--;
        } else if (firstMonth === secondMonth && firstDay > secondDay) {
            yearDifference--;
        }
    }
  
    let answer = "";
    if (yearDifference > 0) {
      if (yearDifference === 1) answer += `${yearDifference} year, `;
      else answer += `${yearDifference} years, `;
    }
    if (monthDifference > 0) {
      if (monthDifference === 1) answer += `${monthDifference} month, `;
      else answer += `${monthDifference} months, `;
    }
    if (totalDayDifference === 1) answer += `total ${totalDayDifference} day`;
    else answer += `total ${totalDayDifference} days`;
  
    return answer;
}