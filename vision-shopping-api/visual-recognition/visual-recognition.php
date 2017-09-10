<?php

header('Access-Control-Allow-Origin: *');

$keyword = $_GET['keyword'];

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=e7e587e88068b4654c409477fdeff95fc410787a&url=".$keyword."&version=2016-05-20",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "postman-token: 221ed8d7-bb0e-5403-9171-e713b59906ae"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}