---
category: section-tools-payment-systems
---

Request endpoint

```
GET https://api.paymentwall.com/api/payment-systems/
```

Request example
```php
<?php
require_once('/path/to/paymentwall-php/lib/paymentwall.php');
$params = array(
    'key' => 'YOUR_PUBLIC_KEY',
    'country_code' => 'RU',
    'sign_version' => 2
);

Paymentwall_Config::getInstance()->set(array('private_key' => 'YOUR_PRIVATE_KEY'));
$params['sign'] = (new Paymentwall_Signature_Widget())->calculate(
    $params,
    $params['sign_version']
);

$url = 'https://api.paymentwall.com/api/payment-systems/?' . http_build_query($params);
$payment_systems = json_decode(file_get_contents($url));
?>
```

Response:

```json
[  
  {  
    "id":"cc",
    "name":"Credit card",
    "new_window":false,
    "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_cc.png"
  },
  {  
    "id":"mobiamo",
    "name":"Mobiamo",
    "new_window":false,
    "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_mobilegateway.png",
    "pricepoints":[
      {
        "amount":140,
        "currency":"RUB",
        "currency_converted":"USD",
        "amount_converted":2.95
      },
      {
        "amount":205,
        "currency":"RUB",
        "currency_converted":"USD",
        "amount_converted":4.32
      },
      {
        "amount":307,
        "currency":"RUB",
        "currency_converted":"USD",
        "amount_converted":6.47
      }
    ]
  },
  {  
    "id":"webmoney",
    "name":"Webmoney",
    "new_window":true,
    "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_webmoney.png"
  },
  {  
    "id":"qiwiwallet",
    "name":"Qiwi Wallet",
    "new_window":false,
    "img_url":"https:\/\/api.paymentwall.com\/images\/ps_logos\/pm_qiwiwallet.png"
  }
]
```