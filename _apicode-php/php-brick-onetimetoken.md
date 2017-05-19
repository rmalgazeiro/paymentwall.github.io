---
category: section-brick-onetime-token
---
Request url

For live credentials
```
 POST https://pwgateway.com/api/token
```

For test credentials

```
 POST https://api.paymentwall.com/api/brick/token
```

Code sample
```php
<?php
$tokenModel = new Paymentwall_OneTimeToken();
$token =  $tokenModel->create(array(
  'public_key' => Paymentwall_Config::getInstance()->getPublicKey(),
  'card[number]' => '4242424242424242',
  'card[exp_month]' => '11',
  'card[exp_year]' => '19',
  'card[cvv]' => '123'
));
// send token to charge via $token->getToken();
?>
```