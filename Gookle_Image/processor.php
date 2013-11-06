
<?php

// Get user inputs
$strSubject = $_POST["subject"];


// Create an array to store images from google's api. we can't get them all so lets grab every 4.
$start = array(0, 4, 8, 12, 16, 20, 24, 28);
foreach ($start as &$p) {
// Use IP and your own query term. here's where we pass our search term var i.e. (subject) 
  $jsrc = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" .$strSubject. "&userip=12.345.67.890&start=$p";
  $json = file_get_contents($jsrc); 
  $jset = json_decode($json, true);
    for($i=0;$i<4;$i=$i+1) {
    $image = $jset['responseData']['results'][$i]['url'];
    $ImagesArray[] = $image;

   }
}

// Print the Image array
for ($i=0; $i<=31; $i++){
	echo "<img src=\"$ImagesArray[$i]\" width=\"200px\" height=\"200px\"><br>";
  }



?>



<!-- Here's where we spit everything out -->

<html>
<head>
<title>Functions</title>
</head>
<body>






</body>
</html>
