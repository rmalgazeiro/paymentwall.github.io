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
curl https://pwgateway.com/api/token \
-d "public_key=YOUR_PUBLIC_API_KEY" \
-d "card[number]=4000000000000002" \
-d "card[exp_month]=01" \
-d "card[exp_year]=2021" \
-d "card[cvv]=123"
```