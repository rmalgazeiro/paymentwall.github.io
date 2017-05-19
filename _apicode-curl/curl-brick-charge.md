---
category: section-brick-charge
---
Charge Request
<br>

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge
```

Code sample
```php
curl https://api.paymentwall.com/api/brick/charge \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
-d "token=[TOKEN]" \
-d "amount=9.99" \
-d "currency=USD" \
-d "email=user@host.com" \
-d "fingerprint=[FINGERPRINT_BY_BRICK.JS]" \
-d "description=TestItem"
```
 
<br>

Get Charge details

Request endpoint
```
GET https://api.paymentwall.com/api/brick/charge/$chargeid
```
Code sample
```php
curl https://api.paymentwall.com/api/brick/charge/t123456 \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
```

<br>

Refund a Charge

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/refund
```
Code sample
```php
curl https://api.paymentwall.com/api/brick/charge/t123456/refund \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
```

<br>

Capture a Charge

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/capture
```
Code sample
```php
curl https://api.paymentwall.com/api/brick/charge/t123456/capture \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
```

<br>

Void a Charge

Request endpoint
```
POST https://api.paymentwall.com/api/brick/charge/$chargeid/void
```
Code sample
```php
curl https://api.paymentwall.com/api/brick/charge/t123456/void \
-H "X-ApiKey: [YOUR_PRIVATE_KEY]" \
```