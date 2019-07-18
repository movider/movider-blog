---
title: How to send an SMS with Python using Movider API?
thumbnail: /blog/img/php.png
date: 2019-07-17T07:21:08.174Z
description: >-
  Simple steps to send SMS messages from your system with Python using Movider
  API.
---
Think about Python, and you may notice the data science. Python is one of the popular programming languages for developers. In this guideline, we'll explain you the brief steps of how to send an SMS with Python using Movider API.

**Let's get started.** 😉

1. [Sign-up](https://dashboard.movider.co/sign-up) at Movider to get an account. If you already have one, please [sign-in](https://dashboard.movider.co/sign-in) instead.
2. After signed-in, go to [Setting](https://dashboard.movider.co/setting), you will see your API key and API secret.
3. Make the request as following example.

3.1 Import a library named `requests`.

```
import requests
```

3.2 Define your parameters

```
api_key = "<YOUR_API_KEY>"
api_secret = "<YOUR_API_SECRET>"
to = "<YOUR_DESTINATION_PHONE_NUMBER>"
text = "<YOUR_MESSAGE>"
```

3.3 Construct a payload and headers.

```
payload = "api_key="+api_key+"&api_secret="+api_secret+"&to="+to+"&text="+text
headers = {
    'accept': "application/json",
    'content-type': "application/x-www-form-urlencoded"
    }
```

3.4 Make a request to our endpoint using previous payload and headers, take the returned response, and print it out.

```
response = requests.request("POST", "https://api.movider.co/v1/sms", data=payload, headers=headers)

print(response.text)
```

4. If everything was set correctly, you will get a response like this.


```
{
  "remaining_balance":3.49211382,
  "total_sms":1,
  "phone_number_list":[
    {
      "number":"<YOUR_DESTINATION_PHONE_NUMBER>",
      "message_id":"j9sPvkZrHFjFPH0p9UUXJM",
      "price":0.0140625
    }
  ],
  "bad_phone_number_list":[
  ]
}
```

5. Done! Take your coffee break.

See, How simple is that. Enjoy your coffee break, and let's build something great together. Visit the resource of Movider API at [https://developer.movider.co/reference ](https://developer.movider.co/reference)
