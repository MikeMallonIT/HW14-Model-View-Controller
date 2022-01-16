# Homework 14 - Model View Controller: Tech Blog - Michael Mallon

## What I did

This week I used Express.js to build a blog posting website. It allows users to log into their dashboard where they can see blog posts that they wrote, edit, and delete them. This time, we used Handlebars to serve SQL data to the front end. I built Models and Routes to organize and serve up the data stored in an SQL database. I wrote PUSH, PUT, GET and DELETE routes for modifying the three different types of data. 

<br>

### Motivation:
This application built on the knowledge we gained in the last unit with back end client/ server + routes and models. Adding a front end with user validation is another step twards a customer-facing application

<br>

### Problems I solved:
    * Built Models for standaized data types
    * Built routes to serve data from server-sied SQL database
    * Used Handlebars to display SQL data on a website
    * Modified index.js file in models folder so models can reference eachother
    * Deployed to Heroku for public website hosting

<br />
<br />

## Installation:
Download all associated files in this repository. Install Node.js then use the `npm install` function. Initilize the SQL database by logging into MySQL in your perfered CLI then running the command `create database techblog_db;` After that, CD to the directory the root application folder is installed in and use the `npm start` function.


## Credits
- SMU
- Trilogy Education Services
- [Mozilla](https://developer.mozilla.org)
- [W3 Schools](https://www.w3schools.com/)
- [W3.org](https://www.w3.org/)
- [Stack Overflow](https://stackoverflow.com)
- [MySQLTutorial](https://www.mysqltutorial.org/mysql-update-data.aspx)
- [DYClassroom](https://dyclassroom.com/mysql/mysql-select-from-table)
- [FreeCodeCamp](https://forum.freecodecamp.org/t/console-log-array-prints-a-result-but-return-array-is-undefined/192382)
- [Dev.to](https://dev.to/afifsohaili/dealing-with-promises-in-an-array-with-async-await-5d7g)
- [MYSQL](https://dev.mysql.com/doc/refman/8.0/en/datetime.html)
