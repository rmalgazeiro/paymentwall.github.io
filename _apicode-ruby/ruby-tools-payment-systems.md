---
category: section-tools-payment-systems
---

Request endpoint

```
GET https://api.paymentwall.com/api/payment-systems/
```

Response

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