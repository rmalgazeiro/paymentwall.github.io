---
id: desktop-payalto
title: PayAlto
sectionid: docs
permalink: payalto-home
---

# PayAlto

PayAlto is a payment methods aggregation platform which contains the payment methods provides by Paymentwall and our partners.

It can be integrated as widget which is hosted by Paymentwall in your application. 

## Payment method categories

Below are the categories which PayAlto includes.

* Credit Cards

* Bank Transfer

* Prepaid and Cash based methods.

* Mobile Payments.

Check [payment methods](https://www.paymentwall.com/payment-methods) for more details.

> The payment methods which are shown into widget depends on user's current IP address and configuration in payment system of your project.

## Components

* [Stored product](/payalto/stored-products).

* [Flexible product](/payalto/flexible-products).

## Requirements

* A created Paymentwall project with payment widget created.

## Use PayAlto

We assume that you have created a Paymentwall project.

* Using our [PayAlto API](/API-Reference#section-payalto) to build the payment widget. 

* Display our payment widget by using ```iframe``` or opening it directly in a new tab.

* Setup Pingback listener

[Pingback](/default-pingback) is Paymentwall's instant payment notification. Each pingback has a unique reference ID in our system, please store it and proceed delivery according to our pingback.