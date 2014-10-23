SOCSDatabase
========

<h3>About</h3>
Database schema for is a Free Open Source Software (FOSS) project built for OCRL related projects

<a href="https://github.com/socs-dev-env/SOCSDatabase/blob/master/Schema.md">Schema</a>

<h3>Requirements</h3>
* [mysql](http://www.mysql.com/) (or another db of your choosing, however testing has only been done in mysql)




<h3>Installation</h3>
<ol>
  <li>Download <a href="https://github.com/socs-dev-env/SOCSDatabase/blob/master/SQL/SPDX.sql">SPDX.sql</a> to your host server.</li>
  <li>Open a terminal and navigate to the directory you downloaded <a href="https://github.com/socs-dev-env/SOCSDatabase/blob/master/SQL/SPDX.sql">SPDX.sql</a> to.</li>
  <li>Run the following commands (Note: be sure to change the user name and password appropriately.)</li>
</ol>
`$> mysql --user=UserName --password=Password`

`mysql> source SPDX.sql`

<h3>Copyright</h3>
Copyright (C) 2014 University of Nebraska at Omaha.
