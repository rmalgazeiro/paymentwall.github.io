---
category: section-tools-cancellation
---

Request endpoint

```
POST https://api.paymentwall.com/developers/api/ticket
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