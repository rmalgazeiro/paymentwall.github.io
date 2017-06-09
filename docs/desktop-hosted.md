---
id: desktop-hosted
title: Hosted checkout
sectionid: docs
permalink: hosted-home
---

# Hosted checkout

Hosted checkout uses a payment methods aggregation platform which contains all the payment methods provides by Paymentwall and our partners.

It can be integrated as widget in your application. 

## Widget

Widget is a web page hosted by Paymentwall to display available payment options to your customers. You can simply display it in a new browser window or embed it into an ```iframe```.

## Payment method categories

Below are the categories which hosted checkout includes.

* Credit Cards

* Bank Transfer

* Prepaid and Cash based methods.

* Mobile Payments.

Check [payment methods](https://www.paymentwall.com/payment-methods) for more details.

> The payment methods which are shown into widget depends on user's current IP address and configuration in payment system of your project.

## Components

* [Stored product](/hosted/stored-products).

* [Flexible product](/hosted/flexible-products).

## Requirements

* A created Paymentwall project with payment widget created.

## Use Hosted Checkout

We assume that you have created a Paymentwall project.

* Using our [Hosted Checkout API](/API-Reference#section-hosted) to build the payment widget. 

* Display our payment widget by using ```iframe``` or opening it directly in a new tab.

* Setup Pingback listener

[Pingback](/default-pingback) is Paymentwall's instant payment notification. Each pingback has a unique reference ID in our system, please store it and proceed delivery according to our pingback.