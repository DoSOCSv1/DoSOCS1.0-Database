SOCSDatabase
========

<h3>About</h3>
Database schema for use with SOCS projects.

We are currently maintaining two versions of the schema. Version 1.2 is for use with SPDX version 1.2, as is version 2.0 is to be used with SPDX 2.0.
The Schema version 1.2 will be retired once all SOCS projects are migrated to the 2.0 version and SPDX 2.0 is offically released.

<h3>Requirements</h3>
* [mysql](http://www.mysql.com/) (or another db of your choosing, however testing has only been done in mysql)




<h3>Installation</h3>
<ol>
  <li>Download SPDX.sql to your host server.</li>
  <li>Open a terminal and navigate to the directory you downloaded SPDX.sql to.</li>
  <li>Run the following commands (Note: be sure to change the user name and password appropriately.)</li>
</ol>
`$> mysql --user=UserName --password=Password`

`mysql> source SPDX.sql`

<h3>Copyright</h3>
Copyright (C) 2014 University of Nebraska at Omaha.
