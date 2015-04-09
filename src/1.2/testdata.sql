/*
 * spdx_docs 4 inserts
 */

INSERT INTO `spdx_docs` (`spdx_version`,`data_license`,`upload_file_name`,`upload_content_type`,`upload_file_size`,`upload_updated_at`,`document_comment`,`created_at`,`updated_at`) VALUES (1, "MIT", "AngularJS", "TAG", "22000", NULL,"#FOSSOLOGY_ONLY",NOW(),NULL);
INSERT INTO `spdx_docs` (`spdx_version`,`data_license`,`upload_file_name`,`upload_content_type`,`upload_file_size`,`upload_updated_at`,`document_comment`,`created_at`,`updated_at`) VALUES (1, "APACHE 2.0", "Node.js", "TAG", "14520", NULL,"#FOSSOLOGY_ONLY",NOW(),NULL);
INSERT INTO `spdx_docs` (`spdx_version`,`data_license`,`upload_file_name`,`upload_content_type`,`upload_file_size`,`upload_updated_at`,`document_comment`,`created_at`,`updated_at`) VALUES (1, "GPL V2", "Django", "TAG", "22000", NULL,"#FOSSOLOGY_ONLY",NOW(),NULL);
INSERT INTO `spdx_docs` (`spdx_version`,`data_license`,`upload_file_name`,`upload_content_type`,`upload_file_size`,`upload_updated_at`,`document_comment`,`created_at`,`updated_at`) VALUES (1, "GPL", "ExpressJS", "TAG", "22000", NULL,"#FOSSOLOGY_ONLY",NOW(),NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * packages 4 inserts
 */

INSERT INTO `packages` (`package_name`,`package_file_name`,`package_download_location`,`package_copyright_text`,`package_version`,`package_description`,`package_summary`,`package_originator`,`package_supplier`,`package_license_concluded`,`package_license_declared`,`package_checksum`,`checksum_algorithm`,`package_home_page`,`package_source_info`,`package_license_info_from_files`,`package_license_comments`,`package_verification_code`,`package_verification_code_excluded_file`,`created_at`,`updated_at`) VALUES ("ExpressJS", "Package File Name 1", "Package Download Location 1", "Package Copyright Text 1", "V1.1", "Package Description 1", "Package Summary 1", "Package Originator 1", "Package Supplier 1", NULL, "GPL", "PACKAGECHECKSUM1", "SHA1", "Home Page 1", "Source Info Test 1", "License Info From Files 1", "Package License Comments 1", "Package Verification Code 1", "Package Verification Code Excluded File 1", NOW(), NULL);
INSERT INTO `packages` (`package_name`,`package_file_name`,`package_download_location`,`package_copyright_text`,`package_version`,`package_description`,`package_summary`,`package_originator`,`package_supplier`,`package_license_concluded`,`package_license_declared`,`package_checksum`,`checksum_algorithm`,`package_home_page`,`package_source_info`,`package_license_info_from_files`,`package_license_comments`,`package_verification_code`,`package_verification_code_excluded_file`,`created_at`,`updated_at`) VALUES ("Node.js", "Package File Name 2", "Package Download Location 2", "Package Copyright Text 2", "V2.1", "Package Description 2", "Package Summary 2", "Package Originator 2", "Package Supplier 2", NULL, "APACHE 2.0", "PACKAGECHECKSUM2", "SHA1", "Home Page 2", "Source Info Test 2", "License Info From Files 2", "Package License Comments 2", "Package Verification Code 2", "Package Verification Code Excluded File 2", NOW(), NULL);
INSERT INTO `packages` (`package_name`,`package_file_name`,`package_download_location`,`package_copyright_text`,`package_version`,`package_description`,`package_summary`,`package_originator`,`package_supplier`,`package_license_concluded`,`package_license_declared`,`package_checksum`,`checksum_algorithm`,`package_home_page`,`package_source_info`,`package_license_info_from_files`,`package_license_comments`,`package_verification_code`,`package_verification_code_excluded_file`,`created_at`,`updated_at`) VALUES ("AngularJS", "Package File Name 3", "Package Download Location 3", "Package Copyright Text 3", "V3.1", "Package Description 3", "Package Summary 3", "Package Originator 3", "Package Supplier 3", NULL, "MIT", "PACKAGECHECKSUM3", "SHA1", "Home Page 3", "Source Info Test 3", "License Info From Files 3", "Package License Comments 3", "Package Verification Code 3", "Package Verification Code Excluded File 3", NOW(), NULL);
INSERT INTO `packages` (`package_name`,`package_file_name`,`package_download_location`,`package_copyright_text`,`package_version`,`package_description`,`package_summary`,`package_originator`,`package_supplier`,`package_license_concluded`,`package_license_declared`,`package_checksum`,`checksum_algorithm`,`package_home_page`,`package_source_info`,`package_license_info_from_files`,`package_license_comments`,`package_verification_code`,`package_verification_code_excluded_file`,`created_at`,`updated_at`) VALUES ("Django", "Package File Name 4", "Package Download Location 4", "Package Copyright Text 4", "V4.1", "Package Description 4", "Package Summary 4", "Package Originator 4", "Package Supplier 4", NULL, "GPL V2", "PACKAGECHECKSUM4", "SHA1", "Home Page 4", "Source Info Test 4", "License Info From Files 4", "Package License Comments 4", "Package Verification Code 4", "Package Verification Code Excluded File 4", NOW(), NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * package_files 12 inserts (3 for each pacakge)
 */

INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("app", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 1", "Artifact Of Project URI Homepage 1", "Artifact Of Project URI 1", "MIT", "MIT", "FILECHECKSUM1", "SHA1", "Relative Path 1", "#FOSSOLOGY_ONLY", "File Notice 1", "File Contributor 1", "File Dependency 1", "File Comment 1", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("index", "HTML", "Creative Commons", "Artifact Of Project URI Name 2", "Artifact Of Project URI Homepage 2", "Artifact Of Project URI 2", "MIT", "MIT", "FILECHECKSUM2", "SHA1", "Relative Path 2", "#FOSSOLOGY_ONLY", "File Notice 2", "File Contributor 2", "File Dependency 2", "File Comment 2", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("angular", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 3", "Artifact Of Project URI Homepage 3", "Artifact Of Project URI 3", "MIT", "MIT", "FILECHECKSUM3", "SHA1", "Relative Path 3", "#FOSSOLOGY_ONLY", "File Notice 3", "File Contributor 3", "File Dependency 3", "File Comment 3", NOW(), NULL);

INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("config", "XML", "Creative Commons", "Artifact Of Project URI Name 4", "Artifact Of Project URI Homepage 4", "Artifact Of Project URI 4", "GPL V2", "GPL V2", "FILECHECKSUM4", "SHA1", "Relative Path 4", "#FOSSOLOGY_ONLY", "File Notice 4", "File Contributor 4", "File Dependency 4", "File Comment 4", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("index", "HTML", "Creative Commons", "Artifact Of Project URI Name 5", "Artifact Of Project URI Homepage 5", "Artifact Of Project URI 5", "GPL V2", "GPL V2", "FILECHECKSUM5", "SHA1", "Relative Path 5", "#FOSSOLOGY_ONLY", "File Notice 5", "File Contributor 5", "File Dependency 5", "File Comment 5", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("django", "Python", "Creative Commons", "Artifact Of Project URI Name 6", "Artifact Of Project URI Homepage 6", "Artifact Of Project URI 6", "GPL V2", "GPL V2", "FILECHECKSUM6", "SHA1", "Relative Path 6", "#FOSSOLOGY_ONLY", "File Notice 6", "File Contributor 6", "File Dependency 6", "File Comment 6", NOW(), NULL);

INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("express", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 7", "Artifact Of Project URI Homepage 7", "Artifact Of Project URI 7", "GPL", "GPL", "FILECHECKSUM7", "SHA1", "Relative Path 7", "#FOSSOLOGY_ONLY", "File Notice 7", "File Contributor 7", "File Dependency 7", "File Comment 7", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("config", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 8", "Artifact Of Project URI Homepage 8", "Artifact Of Project URI 8", "GPL", "GPL", "FILECHECKSUM8", "SHA1", "Relative Path 8", "#FOSSOLOGY_ONLY", "File Notice 8", "File Contributor 8", "File Dependency 8", "File Comment 8", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("connect", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 9", "Artifact Of Project URI Homepage 9", "Artifact Of Project URI 9", "GPL", "GPL", "FILECHECKSUM9", "SHA1", "Relative Path 9", "#FOSSOLOGY_ONLY", "File Notice 9", "File Contributor 9", "File Dependency 9", "File Comment 9", NOW(), NULL);

INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("node", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 10", "Artifact Of Project URI Homepage 10", "Artifact Of Project URI 10", "APACHE 2.0", "APACHE 2.0", "FILECHECKSUM10", "SHA1", "Relative Path 10", "#FOSSOLOGY_ONLY", "File Notice 10", "File Contributor 10", "File Dependency 10", "File Comment 10", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("config", "XML", "Creative Commons", "Artifact Of Project URI Name 11", "Artifact Of Project URI Homepage 11", "Artifact Of Project URI 11", "APACHE 2.0", "APACHE 2.0", "FILECHECKSUM11", "SHA1", "Relative Path 11", "#FOSSOLOGY_ONLY", "File Notice 11", "File Contributor 11", "File Dependency 11", "File Comment 11", NOW(), NULL);
INSERT INTO `package_files` (`file_name`,`file_type`,`file_copyright_text`,`artifact_of_project_name`,`artifact_of_project_homepage`,`artifact_of_project_uri`,`license_concluded`,`license_info_in_file`,`file_checksum`,`file_checksum_algorithm`,`relative_path`,`license_comments`,`file_notice`,`file_contributor`,`file_dependency`,`file_comment`,`created_at`,`updated_at`) VALUES ("modules", "JavaScript", "Creative Commons", "Artifact Of Project URI Name 12", "Artifact Of Project URI Homepage 12", "Artifact Of Project URI 12", "APACHE 2.0", "APACHE 2.0", "FILECHECKSUM12", "SHA1", "Relative Path 12", "#FOSSOLOGY_ONLY", "File Notice 12", "File Contributor 12", "File Dependency 12", "File Comment 12", NOW(), NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * licenses 4 inserts
 */

INSERT INTO `licenses` (`extracted_text`,`license_name`,`osi_approved`,`standard_license_header`,`license_cross_reference`,`created_at`,`updated_at`) VALUES ("Extracted Text 1", "GPL", "OSI Approved 1", "Standard License Header 1", "License Cross Reference 1", NOW(), NULL);
INSERT INTO `licenses` (`extracted_text`,`license_name`,`osi_approved`,`standard_license_header`,`license_cross_reference`,`created_at`,`updated_at`) VALUES ("Extracted Text 2", "GPL V2", "OSI Approved 2", "Standard License Header 2", "License Cross Reference 2", NOW(), NULL);
INSERT INTO `licenses` (`extracted_text`,`license_name`,`osi_approved`,`standard_license_header`,`license_cross_reference`,`created_at`,`updated_at`) VALUES ("Extracted Text 3", "MIT", "OSI Approved 3", "Standard License Header 3", "License Cross Reference 3", NOW(), NULL);
INSERT INTO `licenses` (`extracted_text`,`license_name`,`osi_approved`,`standard_license_header`,`license_cross_reference`,`created_at`,`updated_at`) VALUES ("Extracted Text 4", "APACHE 2.0", "OSI Approved 4", "Standard License Header 4", "License Cross Reference 4", NOW(), NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * doc_license_associations 4 inserts
 */

INSERT INTO `doc_license_associations` (`spdx_doc_id`,`license_id`,`license_identifier`,`license_name`,`license_comments`,`created_at`,`updated_at`) VALUES (1, 3, "MIT", "MIT", "License Comments 1", NOW(), NULL);
INSERT INTO `doc_license_associations` (`spdx_doc_id`,`license_id`,`license_identifier`,`license_name`,`license_comments`,`created_at`,`updated_at`) VALUES (2, 4, "APACHE 2.0", "APACHE 2.0", "License Comments 2", NOW(), NULL);
INSERT INTO `doc_license_associations` (`spdx_doc_id`,`license_id`,`license_identifier`,`license_name`,`license_comments`,`created_at`,`updated_at`) VALUES (3, 2, "GPL V2", "GPL V2", "License Comments 3", NOW(), NULL);
INSERT INTO `doc_license_associations` (`spdx_doc_id`,`license_id`,`license_identifier`,`license_name`,`license_comments`,`created_at`,`updated_at`) VALUES (4, 1, "GPL", "GPL", "License Comments 4", NOW(), NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * licensings 4 inserts
 */

INSERT INTO `licensings` (`package_file_id`,`juncture`,`doc_license_association_id`,`created_at`,`updated_at`) VALUES (1, "Juncture 1", 1, NOW(), NULL);
INSERT INTO `licensings` (`package_file_id`,`juncture`,`doc_license_association_id`,`created_at`,`updated_at`) VALUES (2, "Juncture 2", 2, NOW(), NULL);
INSERT INTO `licensings` (`package_file_id`,`juncture`,`doc_license_association_id`,`created_at`,`updated_at`) VALUES (3, "Juncture 3", 3, NOW(), NULL);
INSERT INTO `licensings` (`package_file_id`,`juncture`,`doc_license_association_id`,`created_at`,`updated_at`) VALUES (4, "Juncture 4", 4, NOW(), NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * doc_file_package_associations 12 inserts
 */

INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (1, 1, 1, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (1, 1, 2, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (1, 1, 3, NOW(), NULL);

INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (2, 2, 4, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (2, 2, 5, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (2, 2, 6, NOW(), NULL);

INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (3, 3, 7, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (3, 3, 8, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (3, 3, 9, NOW(), NULL);

INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (4, 4, 10, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (4, 4, 11, NOW(), NULL);
INSERT INTO `doc_file_package_associations` (`spdx_doc_id`,`package_id`,`package_file_id`,`created_at`,`updated_at`) VALUES (4, 4, 12, NOW(), NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * creators 4 inserts
 */

INSERT INTO `creators` (`generated_at`,`creator_comments`,`license_list_version`,`spdx_doc_id`,`creator`,`created_at`,`updated_at`) VALUES (NOW(), "Just a Test 1", "MIT", 1, "Ajay", NOW(),NULL);
INSERT INTO `creators` (`generated_at`,`creator_comments`,`license_list_version`,`spdx_doc_id`,`creator`,`created_at`,`updated_at`) VALUES (NOW(), "Just a Test 2", "APACHE 2.0", 2, "John", NOW(),NULL);
INSERT INTO `creators` (`generated_at`,`creator_comments`,`license_list_version`,`spdx_doc_id`,`creator`,`created_at`,`updated_at`) VALUES (NOW(), "Just a Test 3", "GPL V2", 3, "Zach", NOW(),NULL);
INSERT INTO `creators` (`generated_at`,`creator_comments`,`license_list_version`,`spdx_doc_id`,`creator`,`created_at`,`updated_at`) VALUES (NOW(), "Just a Test 4", "GPL", 4, "Corbin", NOW(),NULL);

/*------------------------------------------------------------------------------------------------------------------------------*/

/*
 * reviewers 4 inserts
 */

INSERT INTO `reviewers` (`reviewer_date`,`reviewer_comment`,`spdx_doc_id`,`reviewer`,`created_at`,`updated_at`) VALUES (NOW(), "OMG ITS SOOO AWESOME!", 4, "Harper, Uma F.", NOW(), NULL);
INSERT INTO `reviewers` (`reviewer_date`,`reviewer_comment`,`spdx_doc_id`,`reviewer`,`created_at`,`updated_at`) VALUES (NOW(), "OMG ITS SOOO AWESOME!", 2, "Harper, Uma F.", NOW(), NULL);
INSERT INTO `reviewers` (`reviewer_date`,`reviewer_comment`,`spdx_doc_id`,`reviewer`,`created_at`,`updated_at`) VALUES (NOW(), "OMG ITS SOOO AWESOME!", 3, "Harper, Uma F.", NOW(), NULL);
INSERT INTO `reviewers` (`reviewer_date`,`reviewer_comment`,`spdx_doc_id`,`reviewer`,`created_at`,`updated_at`) VALUES (NOW(), "OMG ITS SOOO AWESOME!", 1, "Harper, Uma F.", NOW(), NULL);