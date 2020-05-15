<?php
// ! single line comment
# another single line comment
/*
multi
line
comment */

/*VARIABLES IN PHP use the $ sign
-----------------------*/
$num = 4;
$string = "string";
$boolean = true;
$arr = [1,2,3,4];
$void = null;


/* ARRAYS IN PHP
-----------------------*/
// ! PHP is a dynamic language, so variables of the same name will take new values.
$arr = [0,1,2,3,"string",true,false,null]; //!like in JS - this is more common
// $arr = array(1,2,3,"string",false,null); //!like in PHP long time ago
// echo $arr[3];
// print_r ($arr);
// var_dump($arr);

array_push($arr, "bob"); //this will add a vakue at the end of an array
array_pop(); //delete the end index
array_shift(); //delete the first index


$arr[] = "Something at the end"; // ! adding a value at the end
$arr[2] = 33; show($arr); //! changing the value of the 3rd index

// ! multidimentional array
$website_data = [
  'global title'=> "This is a key followed by a value",
  'keywords'=> "PHP, Dev, Bob",
  'author'=> "Nadeem :)",
  'pages'=> [
    'home' => [
      'title' => "Welcome Home!",
      'menu' => "Home"
    ],
    'work' => [
      'title' => "Here is my work!",
      'menu' => "Work"
    ],
  ],

];

$pages = $website_data['pages']; show($pages); //! creating a variable containing the pages element of the website_data array
show($pages['work']['title']); //! showing the title of work in pages

show($website_data['global title']);



//!return the surface area function challenge
function claculate_surface ($width  = 0, $length = 0) {
  return $width * $length; //!this will only return the result
  // everything after return will be ignored, because its the end of the function
};
show(claculate_surface(10,20));                                                       

// !a function uses a local scope
// use the gloabal kyword
// function site($key = '', $page_key = '') {
//   global $website_data, $arr, $pages;
  
//   if( !empty ($page_key));

//   return $website_data[$key];
// };
// show(site(['work']['title']));


/* LOOPS
-----------------------*/
// !show numbers from 1 to 10
// $n = 10;
// for($i = 1; $i <= $n; $i++) {
//   show($i);
// }

//! The best for array is to use foreach() loop
//! in PHP foreach could return values, or the pair key/value for each item

foreach($website_data as $val) {
  show($val); //! show values
};




foreach($website_data as $key => $val) {
  show($key); //! show keys
  show($val); //! show values
};



/* FUNCTIONS
-----------------------*/
function show($arr) {
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
};