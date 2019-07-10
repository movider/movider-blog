---
title: How to send an SMS with PHP using Movider API?
thumbnail: /blog/img/headere_page.jpg
date: 2019-07-10T09:06:15.702Z
description: Simple steps to send SMS messages from your system with PHP using Movider API.
---
Let's get started.

1. [Sign-up](https://dashboard.movider.co/sign-up) at Movider to get an account. If you already have one, please [sign-in](https://dashboard.movider.co/sign-in) instead.
2. After signed-in, go to [Setting](https://dashboard.movider.co/setting), you will see your API key and API secret.
3. Make to request as following example.

3.1 Define your parameters.

`$apiKey="<YOUR_API_KEY>";`\
`$apiSecret="<YOUR_API_SECRET>";`\
`$message="<YOUR_MESSAGE>";`\
`$phone="<YOUR_DESTINATION_PHONE_NUMBER>";`

3.2 Initiate a cURL and set options as follow.

```
$curl = curl_init();curl_setopt_array($curl, array(  CURLOPT_URL => "https://api.movider.co/v1/sms",  CURLOPT_RETURNTRANSFER => true,  CURLOPT_ENCODING => "",  CURLOPT_MAXREDIRS => 10,  CURLOPT_TIMEOUT => 30,  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,  CURLOPT_CUSTOMREQUEST => "POST",  CURLOPT_POSTFIELDS => "api_key=$apiKey&api_secret=$apiSecret&text=$message&to=$phone",  CURLOPT_HTTPHEADER => array(    "Accept: ",    "Content-Type: application/x-www-form-urlencoded",    "cache-control: no-cache"  ),));
```

3.3 Run your code and get the response. Also see whether there is any error.

```
$response = curl_exec($curl);$err = curl_error($curl);curl_close($curl);if ($err) {  echo "cURL Error #:" . $err;} else {  echo $response;}
```

4. If everything was set correctly, you will get a response like this.


```
{     "remaining_balance":3.49211382,   "total_sms":1,   "phone_number_list":[        {           "number":"<YOUR_DESTINATION_PHONE_NUMBER>",         "message_id":"j9sPvkZrHFjFPH0p9UUXJM",         "price":0.0140625      }   ],   "bad_phone_number_list":[     ]}
```

5. Done! Take your coffee break.
