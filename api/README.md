API to communicate between SPDX Database and spdx-dashboard.

##Instalation Instructions
###Requirements
* [node.js and npm](http://www.joyent.com/blog/installing-node-and-npm/)
* [mysql](www.mysql.com) (or another db of your choosing, however testing has only been done in mysql)

To get started, clone this repo into your local folder
`git clone https://github.com/joerter/Database.git`

###Setting up the database
Once you have mysql installed, use [SPDX.sql](../SPDX.sql) to create the database.

`mysql> source SPDX.sql`

If you would like foreign keys, use [SPDXcreateForeignKeys.sql](SPDXcreateForeignKeys.sql) in the same manner.

`mysql> source SPDXcreateForeignKeys.sql`

To input some good test data, use the [Good_Test_Data.sql](Good_Test_Data.sql), again, using the source command.

`mysql> source Good_Test_Data.sql`

###Setting up the API web server
Once your db instance is up and running, edit the [connectionSettings.js](connectionSettings.js) to match the settings for your db that you would like the API to connect to.

Then, start the server

`node server.js`

If you get errors about not having express or mysql installed, try

`npm install`

or

`npm install mysql` and `npm install express`

The service will run on port 3000 by default, so make sure this is open or change to a different port in the [server.js](server.js) file.

[Forever](https://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever/) is a great module for keeping node services running even when your user has been logged out. It even restarts the service if it encounters an error.

Install it with

`npm install -g forever`

and run with 

`forever start server.js`

To confirm that the service is running and is working, send a request with  
`http://localhost:3000/api/spdx`  
If no data is returned, or errors occur and you are unable to diagnose the problem, feel free to create an issue.
