---
id: desktop-payalto-stored-vc
title: Virtual Currency
sectionid: docs
permalink: payalto/stored/vc
---

# Virtual Currency

To set up your virtual currency in Paymentwall, you first need to access your [project settings]() and set the virtual currency exchange rate and name of your virtual currency. For example, lets set the virtual currency like 1 USD = 15 Gold coins:

<div class="docs-img">
    <img src="/textures/pic/payalto/pw_project_vc_exchange_rate.png">
</div>


You can also set more than one currency exchange clicking on "Manage Currency Rates". So your project will have an USD exchange rate, and an EUR exchange rate for EUR region:

<div class="docs-img">
    <img src="/textures/pic/payalto/pw_project_vc_custom_xe.png">
</div>

To use Virtual Currency API you need to register your price points in Paymentwalls side, in Project > Price Points area.

Please make sure your project is configured as **Virtual Currency API** in order to use this feature.

<div class="docs-img">
    <img src="/textures/pic/payalto/pw_project_pricepoints.png">
</div>

Setting price points for Virtual Currency API is not different from Digital Goods products, but now you will also see how much virtual currency the customer is purchasing (this is calculated according to the virtual currency exchange rate). 

<div class="docs-img">
    <img src="/textures/pic/payalto/pw_project_pricepoint_screen.png">
</div>

## Price points details

| Field | Description |
|:---|:---|
|**Active**| shows or hides the product inside the widget |
|**Price**| End user payment price|
|**Base, Gold Coins**| How much VC the price point is worth. No bonuses or discounts applied |
|**Discount type**| You can set that price point to have bonuses or discounts applied. |
|**Discount amount**| Amount of discount/bonus to be applied |
|**Result**| Final amount of VC the user is purchasing |
|**Promotion**| Promotional message |
|**Default**| Sets the product as pre-selected when widget is opened |
|**Most popular**| Adds **Most Popular** tag |
|**Best value**| Adds **Best Value** tag |
|**Clicks**| Amount of clicks this price point already has. You can use this to check price points popularity |
|**Convertions**| Amount of confirmed purchases this price point have |
|**Revenue**| Amount in USD of how much money this price point generates |
 
## API Call

See [code samples](/API-Reference#section-payalto-stored-vc).

You can use blow ways to handle the ```widget``` object.

* ```getHtmlcode```, which returns an **iFrame** html code with default width and height. 

* If you want to have your own iFrame to display our payment widget or open it in a new tab, use ```getUrl``` instead.

## Next Step

After implementing the Paylet you need to implement the server side pingback script in order to receive the payments confirmations.

Refer to the link below for Virtual Currency API pingbacks:

> [Pingbacks](/pingback-default-pingback)