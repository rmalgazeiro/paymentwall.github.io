---
id: mobile-pw-sdk-core
title: Core SDK
sectionid: docs
permalink: mobile/core
---

# Core SDK

Core SDK is the main component of Paymentwall SDK, where you can set your product details to perform request. About the payment options contained in Core SDK, we provide 4 kinds to satisfy your needs. We will give introduction of these 4 payment options in the next part, you can choose one or more accordingly.

Start implementation by viewing our SDK on Github:

* [Core Android SDK](https://github.com/paymentwall/paymentwall-android-sdk).

* [Core iOS SDK](https://github.com/paymentwall/ios-sdk-core).

## Payment options

Core SDK contains 4 payment options: Brick SDK, Mobiamo SDK, Mint SDK and PW Local SDK. The first 3 SDKs are supported by Paymentwall with **native UI**, while the PW Local SDK are supported with webview. Brief introduction will be given to the SDKs, please click links below to get details on how to implement them.

* Brick SDK: Brick SDK is a pure credit card payment solution, which means it is developed for credit card only. So through Brick SDK, we provide a better experience both on UI design and payment flow when your customers pay with credit cards. 

* Mobiamo SDK: Mobiaom SDK is a mobile payment solution, which means it satisfies the needs for countries that are popular with payment by replying messages on mobile phones. We have customized UI and different payment flows according to mobile payment features, so it is the best choice when mobile payment solution is in need.

* MINT SDK: Mint SDK is a prepaid card payment solution, which means users can buy Mint first and make a purchase with it later. The advantages of Mint over other prepaid cards are: 1. it provides customized UI; 2. It involves all the countries that Paymentwall supports.

* PW Local SDK: PW Local SDK is a local payment solution, which means you can have 130 popular local payment methods just by integrating one SDK. PW Local SDK can satisfy most of your needs on payment methods.

By default, none of them is added into core SDK, please choose the options you want and connect them with core SDK. 

> At least one payment option is required, otherwise no payment option would be available at payment selection view.

## Parameters in core SDK

| Parameter | Description|
| ---|---|
| amount<br> *required* <br> **Double**| Your product price. Default region 0.5 USD to 500 USD or equivalent currency. 2 decimal places is expected. |
| currency<br> *required* <br> **string**| Currency code of your product. Format by [ISO 4217](/supported_currency). 3 letters. |
| itemName <br> *required* <br> **string**| Your product name. The maximum length is 256.|
| itemId <br> *required* <br> **string** | ID of your product. Order reference ID could also be set here. We will communicate back to you via the pingback as goodsid parameter. The maximum length is 256. |
| itemImage <br> *recommend* <br> **string** | The path of where your product image is placed in. There would be a blank icon if ```itemImage``` is not configured.|
| userId <br> *required* <br> **string**| ID of the end-user in your system. The maximum length is 64. |
| nativeDialog <br> *required* <br> **bollean** | If you want to use native payment result dialog provided by core SDK, set to ```false``` if you want to define your own.|
| Timeout <br> *required* <br> **Integer** | The max duration of request, in milliseconds.|
| sign_version<br> *required* <br> **string**| The signature version. Version 2 uses MD5 and version 3 represents SHA256.|
| sign<br> *required* <br> **string lowercase**| The signature of widget. Refer to [signature calculation](/signature-calculation) for more details.|


## Next Step

Once you finished the configuration for core SDK, you can continue with ways below:

> [Including more payment options](/mobile/plugin) by using plugin SDK.

> [Setup pingback listener](/default-pingback) to complete the deliver process.


