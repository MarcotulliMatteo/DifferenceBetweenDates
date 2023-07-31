Code explainations:

- Calculate months difference:

If the difference of the months >= 0 then removed the last month

otherwise

calculate the difference checking the months left from the end of the first year - 1 adding 
the months from the start of the year of the second date

after that, 

case 1: checked if the day of second date is >= the day of the first date, added a month

case 2: checked month of date1 and date2 are the same but the firstDay > secondDay added 12 month (not 11 because the current month count is -1)

- Calculate years difference:

If the difference of years > 0 then

if the month of the first date is > the month of the second date

or

if the month of the first date is equal to the month of the second date and
the first day > second day

exclude the last year

-------------------------------------------------

Tests:
In the provided testes is not covered the case in which the months are equal but the first day 
is greater then second day.

ex: 

["23.02.2023", "22.02.2025"]

correctAnswers:

"1 year, 11 months, total 730 days"
