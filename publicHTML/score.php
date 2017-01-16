<?php


// location the config file
require ('../confin.inc.php');
// connect to the database
$dbc  = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

// test connection
if ($dbc->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$score = $_POST["score"];
$name = $_POST["name"];
$fail = true;

if (is_numeric($score)){
  if ((int)$score > 0 ){
    if (strlen($name) > 0 && strlen($name) <= 5) {
      $sql = "INSERT INTO scoreboard (name, score) VALUES ( '$name', '$score') ";
      $result = $dbc->query($sql);

      $fail = false;
    };
  };
};

if ($fail === true){
  echo "fail";
} else {
  echo "success";
};
