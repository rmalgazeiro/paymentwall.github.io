---
id: desktop-payalto-flexible-subscription
title: Charge
sectionid: docs
permalink: payalto/flexible/subscription
---

# Subscriptions

You can also setup subscription for your customers while using Flexible product.

## API Call

The parameter ```ag_type``` should be set as ```subscription``` in API call. See code sample for [subscription](/API-Reference#section-payalto-flexible-subscription) to perform API Call.

You can use blow ways to handle the ```widget``` object.

* ```getHtmlcode```, which returns an **iframe** html code with default width and height. 

* If you want to have your own iframe to display our payment widget or open it in a new tab, use ```getUrl``` instead.

## Subscription Schedule

Once a user makes his first payment via subscription, we sign him up for recurring billing.

We will automatically charge the user based on the subscription schedule. E.g. if you specify the product length as 1 month, we will charge the user every month. Next payment will happen the same day of the next month. If a payment happens on 30th of January, the next payment will be made in first days of March.

Every time a user is billed, we will send a new pingback.

Once the last charge happens Paymentwall will send a pingback with pingback ```type=13```,  which means the subscription is expired.

## Subscription failure

If a user has insufficient funds or a payment fails for any other reason, Paymentwall will make 2 reattempts (3 attempts in total) to charge the user. [Payment Status API](/API-Reference#section-tools-payment-status) will report active status of the subscription and ```date_next``` will contain the date of the next attempt.

If all of the attempts fail, Paymentwall will stop the subscription.

> Once the subscription stopped, it will no longer process an attempt to charge the user for the next scheduled payment.

For this event Paymentwall will send a pingback with ```type=14```, means subscription payment failed.

## Subscription Cancellation

See [cancellation API](/API-Reference#section-tools-cancellation)to stop subscription for your customers.

## Next Step

After implementing the paylet you need to implement the server side pingback script in order to receive the payments confirmations.

Refer to the link below for Digital Goods API pingbacks:

> **[Pingbacks](/default-pingback)**
