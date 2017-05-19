---
category: section-brick-charge
---

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge
```

Code sample
```php
<?php
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));

$parameters = $_POST;
$chargeInfo = array(
    'email' => $parameters['email'],
    'history[registration_date]' => '1489655092',
    'amount' => 9.99,
    'currency' => 'USD',
    'token' => $parameters['brick_token'],
    'fingerprint' => $parameters['brick_fingerprint'],
    'description' => 'Order #123'
);

$charge = new Paymentwall_Charge();
$charge->create($chargeInfo);
?>
```

<br>

Get Charge details

Request endpoint
```
GET https://api.paymentwall.com/api/brick/charge/$chargeid
```
Code sample
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$charge = new Paymentwall_Charge($chargeid);
$charge->get();
$response=$charge->getRawResponseData();
echo $response;
?>
```

<br>

Refund a Charge

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/refund
```
Code sample
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$charge = new Paymentwall_Charge($chargeid);
$charge->refund();
$response=$charge->getRawResponseData();
echo $response;
?>
```

<br>

Capture a Charge

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/capture
```
Code sample
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$charge = new Paymentwall_Charge($chargeid);
$charge->capture();
$response=$charge->getRawResponseData();
echo $response;
?>
```

<br>

Void a Charge

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/void
```
Code sample
```php
<?php
require_once('path/to/lib/paymentwall.php');
Paymentwall_Config::getInstance()->set(array(
    'private_key' => 'YOUR_PRIVATE_KEY'
));
$charge = new Paymentwall_Charge($chargeid);
$charge->void();
$response=$charge->getRawResponseData();
echo $response;
?>
```
