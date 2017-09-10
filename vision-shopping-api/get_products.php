<?php


$keyword = $_GET['keyword'];

// Get cURL resource
$curl = curl_init();
// Set some options - we are passing in a useragent too here
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => 'http://api.walmartlabs.com/v1/search?query='.$keyword.'&format=json&apiKey=3u6ydbbsx8kz4ncfsgrdjqkx',
    CURLOPT_USERAGENT => 'Codular Sample cURL Request'
));
// Send the request & save response to $resp
$resp = curl_exec($curl);

echo $resp;
// var_dump(json_decode($resp));
// echo (json_encode($resp));

?>
