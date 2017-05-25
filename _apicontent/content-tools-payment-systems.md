---
category: section-tools-payment-systems
---
## Payment Systems

Payment system API can retrieve the list of payment systems activated for a project in a specific country along with their names, logos and shortcodes.


##### Parameters

| Name | Description|
|---|---|
|country_code<br>*required*<br>**string**| Country code.<br>[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) code of the country.|
|currency_converted<br>**string**| Currency code of your product.<br> Format by [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). 3 letters.|
|include_pricepoints<br>**string**|1 or 0 to include pricepoints for Mobiamo.|
|key<br>*required*<br>**string**| The project key. Can be found in General Settings of the project inside of your merchant account.|
|sign_version<br>*required*<br>**integer**| Signature version. Version 2 uses MD5 and version 3 represents SHA256.|
|sign<br>*required*<br>**string**| The signature of widget.<br>Refer to [signature calculation](/signature-calculation) for more details.|

<br>

Check below for the description of response attributes. 

##### Attributes

| Name | Description|
|---|---|
|id| Payment system shortcode.|
|name| Payment system name.|
|img_url| URL of the payment system logo.|
|new_window| Payment methods require opening a new window or redirecting users to a new url.|