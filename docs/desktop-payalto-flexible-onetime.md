---
id: desktop-payalto-flexible-onetime
title: Onetime payment
sectionid: docs
permalink: payalto/flexible/onetime
---

# Onetime Payments

Paymentwall receives product details from your Widget Call and proceed the payments based on the information we've got.

## API Call

The parameter ```ag_type``` should be set as ```fixed``` in API call. See code sample for [onetime payments](/API-Reference#section-payalto-flexible-onetime) to perform API Call.

You can use below ways to handle the ```widget``` object.

* ```getHtmlcode```, which returns an **iframe** html code with default width and height. 

* If you want to have your own iframe to display our payment widget or open it in a new tab, use ```getUrl``` instead.

## Next Step

After implementing the paylet you need to implement the server side pingback script in order to receive the payments confirmations.

Refer to the link below for Digital Goods API pingbacks:

> [Pingbacks](/default-pingback).