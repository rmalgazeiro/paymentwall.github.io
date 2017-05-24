---
id: nav-desktop-mobiamo-integration
title: Integration and Activation
permalink: mobiamo/mobiamo-integration
sectionid: docs
---

# Integration

* Mobiamo can be simply enabled for an existing project in the Merchant Account or for a new project for Mobiamo separately. The integration can be done for **[Web Applications]()** or for **[Mobile Applications]()**.

* If you integrate **[Virtual Currency API](/payalto/stored-vc)**, Mobiamo will immediately appear as a payment option on the **Widget** upon being activated.

<div class="docs-img">
	<img src="/textures/pic/mobiamo/mobiamovc.png">
</div>

> In case Mobiamo is the only payment option that you are interested in, **Mobiamo Standalone Widget** will be the best choice for you (Widget Code = **mo1**)

* If you integrate **[Digital Goods API](/payalto/stored-dg)** or using **[Flexible product](/payalto/flexible-products)**, for Mobiamo to be available, the price of your products must satisfy the conditions specified under the **[Price points discovery mechanic](#pricepoints-discovery-mechanic)**.

* Beside **Virtual Currency** and one-time payment **Digital Goods**, Mobiamo also can help to monetize recurring product in several countries with certain pricepoints.  

# Activation

On the merchant account, simply go to ```My Projects``` > ```Payment Systems``` to turn on Mobiamo.

<div class="docs-img">
	<img src="/textures/pic/mobiamo/mobiamo.png">
</div>

## Price points discovery mechanic

* It is important to note that Mobiamo offer support for fixed price points per country and per mobile carrier. This **[page](http://www.mobiamo.com/coverage)** provides all necessary information about this attribute. 

> You can also pull the list of Mobiamo active price points for a project in a specific country via **[Price point API](/API-Reference#section-mobiamo-pricepoint)**

* The default pricepoint discovery mechanic for Digital Goods is that if the price of your product is ```P```, the supported price point will be searched in the range from ```0.9*P``` to ```1.25*P```. The nearest available price point to your price P will be selected if it is in the range. 

> For example, if you pass the price of your product equal to 7.00 PLN in Poland, your users will be able to pay with Mobiamo at 7.38 PLN because it is the nearest supported price point to your price 7.00 PLN and it is in the range of search (6.3 PLN to 7.8 PLN).

* In case no supported pricepoint is discovered in the default range, Mobiamo won't be included as a payment option for your users to choose from. 

> If you want to change the default range of price point discovery, please kindly contact us at [**devsupport@paymentwall.com**](mailto:devsupport@paymentwall.com).
