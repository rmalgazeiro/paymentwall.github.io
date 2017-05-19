---
category: section-tools-payment-status
---

Request endpoint

```
GET https://api.paymentwall.com/api/rest/payment
```

Response

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
