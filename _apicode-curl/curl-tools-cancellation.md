---
category: section-tools-cancellation
---

Request endpoint

```
POST https://api.paymentwall.com/developers/api/ticket
```

Request example
```
curl https://api.paymentwall.com/developers/api/ticket \
-d "key=[YOUR_PROJECT_API_KEY]" \
-d "ref=t1234" \
-d "uid=user40012" \
-d "type=1" \
-d "message=cancelled order" \
-d "is_test=1" \
-d "sign_version=2" \
-d "sign=[SIGNATURE]" \
```

Response:

Success example

```json
{"result":1}
```

Error example

```json
{"result":0,"errors":["Either ref or uid is required"]}
```