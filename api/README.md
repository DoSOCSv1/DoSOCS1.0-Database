The Dashboard requires a RESTful API to communicate with the database. This is currently under development. Methods follow the following standard:  
`api/(table_name)`  
`api/(table_name)/id`   
`api/(table_name)?key=value`  

The following methods have been implemented so far:  
`GET api/spdx_docs // Returns all spdx docs in the database`  
`GET api/spdx_docs/id // Returns the spdx doc with the given id`  
  
`GET api/creators // Returns all creators in the database`  
`GET api/creators/id // Returns the creator with the given id`  

`GET api/license // Returns all licenses in the database`  
`GET api/license/id // Returns the license with the given id`  

`GET api/licensings // Returns all licensings in the database`     
`GET api/licensings/id // Returns the licensing with the given id`    

`GET api/package_files // Returns all package_files in the database`     
`GET api/package_files/id // Returns the package_file with the given id`    

`GET api/packages // Returns all packages in the database`     
`GET api/packages/id // Returns the package with the given id`    

`GET api/product_software // Returns all product_software in the database`     
`GET api/product_software/id // Returns the product_software with the given id`    

`GET api/products // Returns all products in the database`     
`GET api/products/id // Returns the product with the given id`    

`GET api/reviewers // Returns all reviewers in the database`    
`GET api/reviewers/id // Returns the reviewer with the given id`    

`GET api/software // Returns all software in the database`     
`GET api/software/id // Returns the software with the given id`

The API uses Nodejs and a MySQL database
