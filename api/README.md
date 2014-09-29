API to communicate between SOCS Database and SOCS Dashboard.

##Instalation Instructions
###Requirements
* [node.js and npm](http://www.joyent.com/blog/installing-node-and-npm/)
* [mysql](www.mysql.com)

To get started, clone this repo into your local folder
`git clone https://github.com/joerter/Database.git`

###Setting up the database
Once you have mysql installed, use [SPDX.sql](../SQL/SPDX.sql) to create the database.

`mysql> source SPDX.sql`

To input some good test data, use the [testdata.sql](../SQL/testdata.sql), again, using the source command.

`mysql> source testdata.sql`

###Setting up the API web server
Once your db instance is up and running, edit the [connectionSettings.js](connectionSettings.js) to match the settings for your db that you would like the API to connect to.

Install dependencies in the package.json file

`[sudo] npm install`

Then, start the server

`node server.js`

The service will run on port 3000 by default, so make sure this is open or change to a different port in the [server.js](server.js) file.

To confirm that the service is running and is working, send a request with  
`http://localhost:3000/api/spdx`  
If no data is returned, or errors occur and you are unable to diagnose the problem, feel free to create an issue.

[Forever](https://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever/) is a great module for keeping node services running even when your user has been logged out. It even restarts the service if it encounters an error.

Install it with

`npm install -g forever`

and run with 

`forever start server.js`

## Methods
### SPDX Docs
`GET api/spdx` Return all SPDX docs  
`GET api/spdx/{id}` Return SPDX doc by id  
`PUT api/spdx/{id}` Update SPDX doc  

### Files
`GET api/files` Return all files  

| Parameters     | Action                                                          |
|----------------|-----------------------------------------------------------------|
| packageid={id} | Returns all files associated with package with the specified id |

`GET api/files/{id}` Return one file by id

### Examples
(assuming the api is hosted at http://localhost:3000)  
`http://localhost:3000/api/spdx`  
`http://localhost:3000/api/spdx/2`    
`http://localhost:3000/api/files`  
`http://localhost:3000/api/files/1`  
`http://localhost:3000/api/files?packageid=2`  




