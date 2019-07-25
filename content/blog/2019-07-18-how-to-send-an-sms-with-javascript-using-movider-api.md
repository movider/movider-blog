---
title: How to send an SMS with JavaScript using Movider API?
thumbnail: /blog/img/movider_blog_java.png
date: 2019-07-18T06:41:58.736Z
description: >-
  Simple steps to send SMS messages from your system with JavaScript using
  Movider API.
---
# Simple steps to send SMS messages from your system with JavaScript using Movider API.

In this guide, we'll show you how to use Movider's Programmable SMS to send SMS messages from your JavaScript.

**Let's get started.** 😉

1. [Sign-up](https://dashboard.movider.co/sign-up) at Movider to get an account. If you already have one, please [sign-in](https://dashboard.movider.co/sign-in) instead.
2. After signed-in, go to [Setting](https://dashboard.movider.co/setting), you will see your API key and API secret.
3. Make the request as following example.

3.1 Define your parameters and construct a data payload.

<script src="https://gist.github.com/patipol/e27bca75368b27a56e8fa1c312321799.js"></script>

3.2 Construct a new `XMLHttpRequest` and `addEventListener` to get the response.

<script src="https://gist.github.com/patipol/630500820083f5beacc10736de842e4f.js"></script>

3.3 Set the URL endpoint, request header options, and send the request.

<script src="https://gist.github.com/patipol/befee55b1552369b447313724c4d443c.js"></script>

4. If everything was set correctly, you will get a response like this.

<script src="https://gist.github.com/patipol/5f22f54c533e70d3a73c27239d67f87e.js"></script>

5. Done! Take your coffee break.

See, How easy is that? Now If you want to learn more about Movider API Reference, please visit https://developer.movider.co/reference
