---
category: section-mint-redemption
---
Request endpoint

```
POST https://api.paymentwall.com/api/pure-mint/payment
```

Code sample
```
curl https://api.paymentwall.com/api/pure-mint/payment \ 
-d "amount=0.12" \
-d "currency=USD" \
-d "epin=[YOUR-EPIN]" \
-d "app_key=[YOUR-PROJECT-KEY]" \
-d "user_id=[YOUR-USER-ID]"
```

Response

```json
{
  "change_amount" : 0.12,                 
  "change_currency" : "USD",              
  "success" : 1                         
}
```