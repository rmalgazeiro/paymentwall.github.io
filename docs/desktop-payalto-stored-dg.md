---
id: desktop-payalto-stored-dg
title: Digital Goods
sectionid: docs
permalink: payalto/stored/dg
---

# Digital Goods 

Recurring membership, in-game virtual items, digital content, full version of a game or software, Saas, and one-time payments can be stored in Paymentwalls side in order to facilitate the API call: 

Please make sure your project is configured as **Digital Goods API** in order to use this feature.

<div class="docs-img">
    <img src="/textures/pic/payalto/pw_project_products.png" style="width: 50%"> 
</div>

You can set different settings for each product like specific regions you want that product to be sold (useful for localizing), one time payment or recurring subscription, price, and discount.

<div class="docs-img">
    <img src="/textures/pic/payalto/pw_project_product_screen.png" style="width: 50%">
</div>

## Product details

| Field | Description |
|---|---|
|**Active**| Whether to show the product inside the widget. |
|**Product name**| Products name. |
|**Type**| Fixed (one time payments) or time based (subscriptions). |
|**Length**| If subscription, this sets the duration of the subscription. |
|**Period**| If subscription, this sets the period of the subscription charges . |
|**Recurring billing**| Check if subscription should be recurring (auto-renewed). |
|**Trial**| If your subscription has a free trial period. |
|**Post-trial product**| The subscription product which will be applied once trail product is expired. |
|**SKU ID**| Id of the product. In Pingbacks, this comes back as ```goodsid```. |
|**Old Price**| Adds another price with strikethrough to show as discount, keep it same with ```Final Price``` if you don't want to use it. |
|**Final Price**| The price of your product. |
|**Currency**| Currency of the product. |
|**Show discount**| Show discount message for your product if ```Old price``` is higher than ```Final Price```. |
|**Promotion**| Add a note as promotion message to the product. |
|**Default**| Sets the product as pre-selected when widget is opened |
|**Most popular**| Add **Most Popular** tag |
|**Best value**| Adds **Best Value** tag |
|**Order**| Order the product should appear in the widget |
 
## API Call

See [code sample](/API-Reference#section-payalto-stored-dg) to perform API Call.

You can use blow ways to handle the ```widget``` object.

* ```getHtmlcode```, which returns an **iFrame** html code with default width and height. 

* If you want to have your own iFrame to display our payment widget or open it in a new tab, use ```getUrl``` instead.

## Next Step

After implementing the paylet you need to implement the server side pingback script in order to receive the payments confirmations.

Refer to the link below for Digital Goods API pingbacks:

> **[Pingbacks](/default-pingback-dg)**