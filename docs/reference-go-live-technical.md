---
id: go_live-technical
title: Technical Integration Checklist
sectionid: docs
permalink: go_live-technical
---

# Technical Integration Checklist

You will see technical integration part on the left side. Check all the checkbox to make sure you have completed the basic integration of our products. 

<div class="docs-img" style="text-align: center;">
	<img src="/paymentwall.github.io/textures/pic/reference/golive/golive-technical-checklist.png" style="width: 30%">
</div>

> The url where Paymentwall widget is placed should be provided along with a test account on your website. If you are using our product on mobile, please replace the url with a downloadable link of your application.

## PayAlto check points

Below is the check points for merchants who are using [PayAlto](/paymentwall.github.io/payalto-home).

* Integrate a payment widget. It should be accessible on your website/application.

* User ID (uid) must be persistent and unique per user.

* Make a test payment using [Test Payment Method](/paymentwall.github.io/sandbox/test-payment).

+ If subscription is used, additional check points will be added.
	- Your website should show subscription conditions clearly.
	- Cancellation and refund policy is clearly accessible and visible in the website.

* Set up a [Pingback](/paymentwall.github.io/default-pingback) listener in your server.

+ You need to response ```ok``` to following [pingback types](/paymentwall.github.io/default-pingback#pingback-type).
	- Confirmation pingback with ```type=0```.
	- Negative pingback with ```type=2```.

* Pingbacks with ```ref``` parameter repeated should be rejected (avoid delivering same product twice for customer).

* Pingbacks with wrong ```signature``` should be rejected.

* Pingbacks are being tracked and the product is being delivered.

## Brick check points

Below is the check points for merchants who are using [Brick](/paymentwall.github.io/brick-home).

* Payment page must be loaded via **HTTPS**.

* Client-side tokenization using Brick.js, fingerprint is included in Brick requests. 

* [3D secure](/paymentwall.github.io/brick/3dsecure) payment step is implemented.

* Your servers does NOT receive/handle customer's CC data.

+ If subscription is used, additional check points will be added.
	- Your website should show subscription conditions clearly.
	- Cancellation and refund policy is clearly accessible and visible in the website.

* Set up a [Pingback](/paymentwall.github.io/default-pingback) listener in your server.

+ You need to response ```ok``` to following [pingback types](/paymentwall.github.io/default-pingback#pingback-type).
	- Confirmation pingback with ```type=0```.
	- Negative pingback with ```type=2```.
	- Transaction pending pingback with ```type=200```.
	- Transaction accept pingback with ```type=201```.
	- Transaction decline pingback with ```type=202```.

* Pingbacks with ```ref``` parameter repeated should be rejected (avoid delivering same product twice for customer).

* Pingbacks with wrong ```signature``` should be rejected.

* Pingbacks are being tracked and the product is being delivered.

## Reference

You should also have the approval from our compliance team to go live your project.

> See [checklist of compliance team](/paymentwall.github.io/go_live-compliance).
