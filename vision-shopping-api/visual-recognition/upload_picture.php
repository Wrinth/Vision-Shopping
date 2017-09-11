<?php
require __DIR__ . '/vendor/autoload.php';
use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;
use Aws\Common\Credentials\Credentials;

$credentials = new Credentials('AKIAIY7ZMDYU5HLWWBKQ', 'sRaN3uH56Xws8OVxYg7SyCCWmiIsPjPtESe6WF4K');

$bucket = 'vision-shopping';

// Instantiate the client.
$s3 = S3Client::factory(array(
    'credentials' => $credentials
));


$meta = $_POST;
$name = $meta["name"];
if(isset($_FILES['file'])){
    //The error validation could be done on the javascript client side.
    $errors= array();
    $file_name = date("Y_m_d_H_i_s").$name.$_FILES['file']['name'];
    $file_size =$_FILES['file']['size'];
    $file_tmp =$_FILES['file']['tmp_name'];
    $file_type=$_FILES['file']['type'];
    $file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    $extensions = array("jpeg","jpg","png");

    if(in_array($file_ext,$extensions) === false){
        $errors[]="image extension not allowed, please choose a JPEG or PNG file.";
    }
    if($file_size > 10485760){
        $errors[]='File size cannot exceed 10 MB';
    }

    if(empty($errors)==true){
        move_uploaded_file($file_tmp,"../../images/search/".$file_name);


        // $filepath should be absolute path to a file on disk
        $filepath = "../../images/search/".$file_name;
        $keyname = $file_name;

        try {
            // Upload a file.
            $result = $s3->putObject(array(
                'Bucket'       => $bucket,
                'Key'          => $keyname,
                'SourceFile'   => $filepath,
                'ContentType'  => 'image/jpeg',
                'ACL'          => 'public-read',
                'StorageClass' => 'REDUCED_REDUNDANCY',
                'Metadata'     => array(
                    'param1' => 'value 1',
                    'param2' => 'value 2'
                )
            ));

            echo $result['ObjectURL'];
        } catch (S3Exception $e) {
            echo $e->getMessage() . "\n";
        }

    }else{
        echo 'error';
    }
}
