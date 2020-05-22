<?php

if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['phone'])) {
    $userData[] = trim(filter_var($_POST['name'], FILTER_SANITIZE_STRING));
    $userData[] = trim(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL));
    $userData[] = trim(filter_var($_POST['phone'], FILTER_SANITIZE_STRING));
    if (!in_array(null, $userData)) {

        $phoneRegExp = "/^[0-9]{2,15}$/";
        // $phoneRegExp = "/^(?:0(?!(5|7))(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5|7)(?:-?\d){9})$/";     //israel phone number
        if (mb_strlen($userData[0]) > 2 && mb_strlen($userData[0]) < 50) {
            if (preg_match($phoneRegExp, $userData[2])) {

                function curlPost($url, $data) {
                    $ch = curl_init($url);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
                    $response = curl_exec($ch);
                    $error = curl_error($ch);
                    curl_close($ch);
                    if ($error !== '') {
                        throw new \Exception($error);
                    }
                    var_dump($data);
                    return $response;
                }
                curlPost('https://test.com/server/api/', 
                [
                    'name' => $userData[0], 
                    'phone' => $userData[2], 
                    'email' => $userData[1], 
                    'course' =>  'Cybersecurity',
                    'formname' =>  'Consultation Form',
                    'apiID' => 'jhasdfghJJgmnf76'
                ]);

            }

        }

    }

}
