---
title: How to send an SMS with Python using Movider API?
thumbnail: /blog/img/movider_python.png
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

<script src="https://gist.github.com/patipol/f8ec55619a890a798c8e348fcd57dc93.js"></script>

3.2 Define your parameters

<script src="https://gist.github.com/patipol/c042edab9280dc309a4bfb29f6c8b647.js"></script>

3.3 Construct a payload and headers.

<script src="https://gist.github.com/patipol/2cbcedd710564611c5c7a9822d773e2d.js"></script>

3.4 Make a request to our endpoint using previous payload and headers, take the returned response, and print it out.

<script src="https://gist.github.com/patipol/b3f34cee2b754e934382725dbd117381.js"></script>

4. If everything was set correctly, you will get a response like this.

<script src="https://gist.github.com/patipol/5f22f54c533e70d3a73c27239d67f87e.js"></script>

5. Done! Take your coffee break.

See, How simple is that. Enjoy your coffee break, and let's build something great together. Visit the resource of Movider API at <https://developer.movider.co/reference>
