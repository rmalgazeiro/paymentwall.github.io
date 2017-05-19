---
category: section-tools-delivery-confirmation-digital
---

Request endpoint

```
POST https://api.paymentwall.com/api/delivery
```

Request example
```
curl https://api.paymentwall.com/api/delivery \
-H "X-ApiKey: [YOUR_PRIVATE_API_KEY]" \
-d "payment_id=b111260108" \
-d "merchant_reference_id=order_12345" \
-d "type=digital" \
-d "status=started" \
-d "is_test=1" \
-d "estimated_delivery_datetime=2017/01/15 15:04:55 +0500" \
-d "estimated_update_datetime=2017/01/16 15:04:55 +0500" \
-d "refundable=false" \
-d "details=Item will be delivered via email by 3PM on 2017/01/15" \
-d "shipping_address[email]=test@paymentwall.com"
-d "reason=none"
```

Response

Success example
```json
{
	"success": 1
}
```

Error example
```json
{	
	"error_code":2,
	"error":"Wrong parameters passed",
	"notices":["You don't have access to this delivery"]
}
```
