<?php
//$dat = ["data"=>' <v-row
//        justify="center">
//    <v-col cols="2"></v-col>
//    <v-col cols="8">
//        fdsfdsf
//        dsfdsfdsf
//        <vm-test ></vm-test>
//        <!--                    <vm-section :sections="sections" @dochange="dochange"></vm-section>-->
//    </v-col>
//
//    <v-col cols="2"></v-col>
//</v-row>',
//"js"=>'Components/vmTest.js'];
//echo  json_encode($dat);
//exit();

$dat = [
    [
        "id" => "1",
        "title" => "title 1 ",
        "urlName" => "name 1",
        "compName" => "vmPage1",
        "url" => "Pages/vmPage1.js",
    ], [
        "id" => "2",
        "title" => "title 2 ",
        "urlName" => "name 2",
        "compName" => "vmPage2",
        "url" => "Pages/vmPage2.js",
    ]
];
$id = $_GET["id"];

if ($id % 2 == 0)
    unset($dat[0]);
echo json_encode( array_values( $dat));
exit();
?>

