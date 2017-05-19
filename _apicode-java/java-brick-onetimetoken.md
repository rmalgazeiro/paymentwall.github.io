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
{% raw  %}
```java
OneTimeToken token = new OneTimeToken();
token = (OneTimeToken) token.create(new LinkedHashMap<String, String>(){{
  put("public_key", Config.getInstance().getPublicKey());
  put("card[number]", "4000000000000002");
  put("card[exp_month]", "01");
  put("card[exp_year]", "2020");
  put("card[cvv]", "123");
}});
return token.getToken();
```
{% endraw %}