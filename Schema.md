Tables
======

<h5>spdx_docs</h5>
| Column Name         | Data Type    | Constraints                      |
|---------------------|--------------|----------------------------------|
| id                  | int(11)      | Auto Increment, Not Null, unique |
| spdx_version        | varchar(255) | Not Null                         |
| data_license        | varchar(255) | Not Null                         |
| upload_file_name    | varchar(255) | Not Null                         |
| upload_content_type | varchar(255) | Not Null                         |
| upload_file_size    | varchar(255) | Not Null                         |
| upload_updated_at   | datetime     | Not Null                         |
| document_comment    | text         |                                  |
| created_at          | datetime     | Not Null                         |
| updated_at          | datetime     |                                  |

<h5>packages</h5>
| Column Name                             | Data Type    | Constraints                      |
|-----------------------------------------|--------------|----------------------------------|
| id                                      | int(11)      | Auto Increment, Not Null, unique |
| package_name                            | varchar(255) | Not Null                         |
| package_file_name                       | varchar(255) | Not Null                         |
| package_download_location               | varchar(255) | Not Null                         |
| package_copyright_text                  | text         |                                  |
| package_version                         | varchar(255) | Not Null                         |
| package_description                     | text         |                                  |
| package_summary                         | text         |                                  |
| package_originator                      | varchar(255) | Not Null                         |
| package_supplier                        | varchar(255) | Not Null                         |
| package_license_concluded               | text         | Not Null                         |
| package_license_declared                | text         | Not Null                         |
| package_checksum                        | varchar(255) | Not Null                         |
| checksum_algorithm                      | varchar(255) | Not Null                         |
| package_home_page                       | varchar(255) | Not Null                         |
| package_source_info                     | varchar(255) | Not Null                         |
| package_license_comments                | text         |                                  |
| package_verification_code               | varchar(255) | Not Null                         |
| package_verification_code_excluded_file | varchar(255) | Not Null                         |
| created_at                              | datetime     | Not Null                         |
| updated_at                              | datetime     |                                  |

<h5>package_license_info_from_files</h5>
| Column Name                     | Data Type    | Constraints                      |
|---------------------------------|--------------|----------------------------------|
| id                              | int(11)      | Auto Increment, Not Null, unique |
| pacakge_id                      | int(11)      | Not Null                         |
| package_license_info_from_files | varchar(255) | Not Null
| created_at                      | datetime     | Not Null                         |
| updated_at                      | datetime     |                                  |


<h5>package_files</h5>
| Column Name                  | Data Type    | Constraints                      |
|------------------------------|--------------|----------------------------------|
| id                           | int(11)      | Auto Increment, Not Null, unique |
| file_name                    | varchar(255) | Not Null                         |
| file_type                    | varchar(255) | Not Null                         |
| file_copyright_text          | text         |                                  |
| artifact_of_project_name     | varchar(255) | Not Null                         |
| artifact_of_project_homepage | varchar(255) | Not Null                         |
| artifact_of_project_uri      | varchar(255) | Not Null                         |
| license_concluded            | text         | Not Null                         |
| license_info_in_file         | text         |                                  |
| file_checksum                | varchar(255) | Not Null                         |
| file_checksum_algorithm      | varchar(255) | Not Null                         |
| license_comments             | text         |                                  |
| file_notice                  | text         |                                  |
| file_contributor             | text         |                                  |
| file_dependency              | text         |                                  |
| file_comment                 | text         |                                  |
| created_at                   | datetime     | Not Null                         |
| updated_at                   | datetime     |                                  |

<h5>licenses</h5>
| Column Name             | Data Type    | Constraints                      |
|-------------------------|--------------|----------------------------------|
| id                      | int(11)      | Auto Increment, Not Null, unique |
| extracted_text          | text         |                                  |
| license_name            | varchar(255) | Not Null                         |
| osi_approved            | varchar(255) | Not Null                         |
| standard_license_header | varchar(255) | Not Null                         |
| license_cross_reference | varchar(255) | Not Null                         |
| created_at              | datetime     | Not Null                         |
| updated_at              | datetime     |                                  |

<h5>doc_license_associations</h5>
| Column Name       | Data Type    | Constraints                      |
|-------------------|--------------|----------------------------------|
| id                | int(11)      | Auto Increment, Not Null, unique |
| spdx_doc_id       | int(11)      | Not Null, FK(spdx_docs(id))      |
| license_id        | int(11)      | Not Null, FK(licenses(id))       |
| license_identifer | varchar(255) | Not Null                         |
| license_name      | varchar(255) | Not Null                         |
| license_comment   | text         | Not Null                         |
| created_at        | datetime     | Not Null                         |
| updated_at        | datetime     |                                  |

<h5>licensings</h5>
| Column Name                | Data Type    | Constraints                               |
|----------------------------|--------------|-------------------------------------------|
| id                         | int(11)      | Auto Increment, Not Null, unique          |
| package_file_id            | int(11)      | Not Null,FK(package_files(id))            |
| juncture                   | varchar(255) | Not Null                                  |
| doc_license_association_id | int(11)      | Not Null,FK(doc_license_associations(id)) |
| created_at                 | datetime     | Not Null                                  |
| updated_at                 | datetime     |                                           |

<h5>doc_file_package_associations</h5>
| Column Name     | Data Type | Constraints                      |
|-----------------|-----------|----------------------------------|
| id              | int(11)   | Auto Increment, Not Null, unique |
| spdx_doc_id     | int(11)   | Not Null,FK(spdx_docs(id))       |
| package_id      | int(11)   | Not Null,FK(packages(id))        |
| package_file_id | int(11)   | Not Null,FK(package_files(id))   |
| relative_path   | varchar(1000) | Not Null                     |
| created_at      | datetime  | Not Null                         |
| updated_at      | datetime  |                                  |

<h5>package_license_info_from_files</h5>
| Column Name     | Data Type | Constraints                      |
|---------------------------------|----------------|----------------------------------|
| package_id                      | int(11)        | Not Null                         |
| package_license_info_from_files | varchar(255)   | Not Null,FK(package_files(id))   |
| created_at                      | datetime       | Not Null                         |
| updated_at                      | datetime       |                                  |

<h5>creators</h5>
| Column Name          | Data Type    | Constraints                      |
|----------------------|--------------|----------------------------------|
| id                   | int(11)      | Auto Increment, Not Null, unique |
| generated_at         | datetime     | Not Null                         |
| creator_comments     | text         |                                  |
| license_list_version | varchar(255) | Not Null                         |
| spdx_doc_id          | int(11)      | Not Null,FK(spdx_docs(id))       |
| creator              | varchar(255) | Not Null                         |
| created_at           | datetime     | Not Null                         |
| updated_at           | datetime     |                                  |

<h5>reviewers</h5>
| Column Name      | Data Type    | Constraints                      |
|------------------|--------------|----------------------------------|
| id               | int(11)      | Auto Increment, Not Null, unique |
| reviewer_date    | datetime     | Not Null                         |
| reviewer_comment | text         |                                  |
| spdx_doc_id      | int(11)      | Not Null,FK(spdx_docs(id))       |
| reviewer         | varchar(255) | Not Null                         |
| created_at       | datetime     | Not Null                         |
| updated_at       | datetime     |                                  |
