<?php

// ! My custom print_r function
function show($arr) {
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
};
//!-----------------------------

// ! allow errors to show
ini_set('display_errors', 1); //!0 to disable
error_reporting(E_ALL);
// ! Grab the value of page keyword & set it to index by default
$page = isset($_GET['page']) ? $_GET['page'] : 'index';

// ! 1. GRAB/IMPORT the CONTENT of site_data.json
$site_data_json = file_get_contents("site_data.json");
// ! 2. Convert json content into PHP array
// has 2 arguments: the json string, AND the data type:
// true: conversion to an array
// false: conversion to an object (this is by default)
$site_data = json_decode($site_data_json, true);
$pages = $site_data['pages']; //! the pages is in the json

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title><?php echo $pages[$page]['title']; ?></title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?php echo $site_data['description']; ?>">
  <meta name="keywords" content="<?php echo $site_data['keywords']; ?>">
  <meta name="author" content="<?php echo $site_data['author']; ?>">

  <link rel="icon" href="img/favicon.png">

  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>

  <!-- HEADER -->
  <header class="header">

    <!-- Logo -->
    <figure class="logo-figure">
      <a href="./"><img src="img/logo.svg" alt="The heavy metal company"></a>
    </figure>

    <!-- Nav -->
    <nav class="nav">
      <ul class="menu">
        <li class="menu-item"><a href="?page=index">HOME</a></li> 
        <li class="menu-item"><a href="?page=work">WORK</a></li>
        <li class="menu-item"><a href="?page=contact">CONTACT</a></li>
      </ul>
    </nav>
<!-- IN V02-PHP WE REMOVED THE ACTIVE CLASS FROM THE NAVIGATION -->
  </header>


  <!-- CONTENT -->
  <main class="content">
  <!-- this shows the title of the page in h1 -->
  <h1 class="main-title"><?php echo $pages[$page]['title']; ?></h1>

    <?php

    // ! require once is the most used way; becuase php will chech if the content is already included 
    require_once("html/$page.html");

    ?>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>