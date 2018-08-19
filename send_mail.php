<?php

// $_POST['g-recaptcha-response'];
// $_POST['name'];
// $_POST['email'];
// $_POST['message'];
// var_dump($_POST['g-recaptcha-response']);
// var_dump($_POST['name']);
// var_dump($_POST['email']);
// var_dump($_POST['message']);
// die();

if(isset($_POST['g-recaptcha-response'])){
  var_dump($_POST);
  // $secret = '6LfwEy0UAAAAAOH6Z-WEgzzqXSgpKTlU-yQ9gKV3';
  // $ip = $_SERVER['REMOTE_ADDR'];
  // $captcha = $_POST['g-recaptcha-response'];
  // $resp = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='$secret.'&response='.$captcha.'&remoteip='.&ip);
  // $arr = json_decode($resp,TRUE);
  // if($arr[status]){
  // echo "Done";}
  // else{
  // echo 'fail';
}
}else{
  echo "1";
}

?>
