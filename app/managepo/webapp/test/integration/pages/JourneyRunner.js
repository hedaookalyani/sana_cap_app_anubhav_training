sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"sana/kh/managepo/test/integration/pages/PurchaseOrderSetList",
	"sana/kh/managepo/test/integration/pages/PurchaseOrderSetObjectPage",
	"sana/kh/managepo/test/integration/pages/PurchaseItemSetObjectPage"
], function (JourneyRunner, PurchaseOrderSetList, PurchaseOrderSetObjectPage, PurchaseItemSetObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('sana/kh/managepo') + '/test/flp.html#app-preview',
        pages: {
			onThePurchaseOrderSetList: PurchaseOrderSetList,
			onThePurchaseOrderSetObjectPage: PurchaseOrderSetObjectPage,
			onThePurchaseItemSetObjectPage: PurchaseItemSetObjectPage
        },
        async: true
    });

    return runner;
});

