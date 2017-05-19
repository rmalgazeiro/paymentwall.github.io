---
category: section-brick-onetime-token
---
Request endpoint

For live credentials
```
 POST https://pwgateway.com/api/token
```

For test credentials

```
 POST https://api.paymentwall.com/api/brick/token
```

Code sample
```javascript
var onetimetoken = new Paymentwall.Onetimetoken(
  4000000000000002, // Card number
  01,               // Expiration month
  2020,             // Expiration year
  123               // CVC/CVV
);

onetimetoken.createOnetimetoken(function(response){
  if(response.isSuccessful()){
    if(response.isActivated()){
      token = response.getOnetimeToken();
      card = response.getCardInfo();
    }
  } else{
    error_code = response.getErrorCode();
    error_details = response.getErrorDetails();
  };
});
```