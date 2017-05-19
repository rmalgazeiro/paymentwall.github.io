---
category: section-brick-subscription
---
Subscription request

Request endpoint
```
POST https://api.paymentwall.com/api/brick/subscription
```

Code sample
```php
<?php
Paymentwall_Config::getInstance()->set(array(
    'public_key' => 'YOUR_PUBLIC_KEY',
    'private_key' => 'YOUR_PRIVATE_KEY'
));

$parameters = $_POST;
$subscriptionInfo = array(
    'token' => $_POST['brick_token'],
    'email' => $_POST['email'],
    'currency' => 'USD',
    'amount' => 10,
    'fingerprint' => $_POST['brick_fingerprint'],
    'plan' => 'product_123',
    'description' => 'Order #123',
    'period' => 'week',
    'period_duration' => 2,
    // if trial, add following parameters
    'trial[amount]' => 1,
    'trial[currency]' => 'USD',
    'trial[period]'   => 'month',
    'trial[period_duration]' => 1
);

$subscription = new Paymentwall_Subscription();
$subscription->create($subscriptionInfo);
?>
```
<br>

Get Subscription details

Request endpoint
```
GET https://api.paymentwall.com/api/brick/subscription/$subscriptionid
```

Code sample
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$subscription = new Paymentwall_Subscription($subscriptionid);
$subscription->get();
$response=$subscription->getRawResponseData();
echo $response;
?>
```

<br>
Cancel a Subscription

Request endpoint
```
POST https://api.paymentwall.com/api/brick/subscription/$id/cancel
```

Code sample
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$subscription = new Paymentwall_Subscription($subscriptionid);
$subscription->cancel();
$response=$subscription->getRawResponseData();
echo $response;
?>
```
