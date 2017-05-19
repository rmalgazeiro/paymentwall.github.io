---
category: section-tools-payment-status
---

Request endpoint

```
GET https://api.paymentwall.com/api/rest/payment
```

Request example
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PUBLIC_KEY',
    'uid' => 'user_200255',
    'ag_external_id' => 'product_100244',
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_PRIVATE_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/rest/payment/?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
```

Response:

```json
{
	"object":"payment",
	"id":"b111260108",
	"created":1488521465,
	"amount":"0.5000",
	"currency":"USD",
	"refunded":false,
	"risk":"approved",
	"uid":"testuser",
	"product_id":"or_123456",
	"payment_system":"credit card"
}
```
