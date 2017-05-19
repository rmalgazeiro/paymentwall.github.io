---
id: desktop-payalto
title: PayAlto
sectionid: docs
permalink: payalto-home
---

# PayAlto

PayAlto is a payment methods aggregation platform which contains the payment methods provides by Paymentwall and our partners.

It can be integrated in any kind of checkout flow, from a standalone widget to deep-linked payment systems.

## Payment method categories

Below are the categories which PayAlto includes.

* Credit Cards

* Bank Transfer

* Prepaid and Cash based methods.

* Mobile Payments.

Check [payment methods](https://www.paymentwall.com/payment-methods) for more details.

> The payment methods which are shown into widget depends on user's current IP address and configuration in payment system of your project.

## Components

* [Stored product](/paymentwall.github.io/payalto/stored-products).

* [Flexible product](/paymentwall.github.io/payalto/flexible-products).

## Requirements

* A created Paymentwall project with payment widget created.

## Use PayAlto

We assume that you have created a Paymentwall project.

* Using our [PayAlto API](/paymentwall.github.io/API-Reference#section-payalto) to call the payment widget. 

* Display our payment widget in your application.

* Setup Pingback listener

[Pingback](/paymentwall.github.io/default-pingback) is Paymentwall's instant payment notification. Each pingback has a unique reference ID in our system, please store it and proceed delivery according to our pingback.