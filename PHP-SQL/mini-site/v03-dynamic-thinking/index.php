<!-- IN V02 WE INSERTED A PHP DOC TAG, WE HAVE TO CLOSE IT ALSO BECAUSE WE HAVE HTML IN THE PAGE -->
<?php
// THIS IS THE PHP ZONE
// THIS BIT OF CODE WILL ALWAYS BE EXECUTED BEFORE HTML
// ! the code below is to force shoing the errors on the screen
ini_set('display_errors', 1); //!0 to disable
error_reporting(E_ALL);
// using a variable inside a php string
    // ! we have to know when to use the single or duble quotation. with single we have to contactnait using '.$variable.'
    // $name = "Nadeem";
    // $using_dubble_quotes ="My name is $name and I'm here!"; echo $using_dubble_quotes;
    // $using_single_quotes ='My name is '. $name .' and voila!'; echo $using_single_quotes;
$page = isset($_GET['page']) ? $_GET['page'] : 'index'; //echo $page; //! here we grabed the keyword page and stored it in $page variable //also used eternary operator to set a defualt page to be directed to in case we click on an element with an empty keyword, INSTEAD OF THE BELOW IF FUNCTION.
// _GET will look at the browser ULR to check what is the value of the keyword we assigned.
// if(empty($page)) {
//   $page = 'index';
// }; //creating a defualt page to be directed to in case we click on an element with an empty keyword.

?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Where hardest stuff is possible</title>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="How to use PHP to create a dynamic website">
  <meta name="keywords" content="php,dynamic site,cool,raoul">
  <meta name="author" content="Sorin Paun">

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
    
    <?php
    // ! GRAB AN EXTERNAL CONENTENT METHODS:
    // ! include function is one way to do it
    // include("html/index.html");

    // ! require is another way
    // require("html/index.html");

    // ! require once is the most used way; becuase php will chech if the content is already included 
    require_once("html/$page.html");

    // ! - there is also include once, not much we know about. but prety much the same as reuire once
    // include_once("html/index.html");
    ?>

  </main>


  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy;1998 - 2019 - Heavy Metal Company</p>
  </footer>

</body>

</html>