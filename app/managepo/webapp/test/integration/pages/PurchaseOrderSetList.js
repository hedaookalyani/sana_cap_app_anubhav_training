sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'sana.kh.managepo',
            componentId: 'PurchaseOrderSetList',
            contextPath: '/PurchaseOrderSet'
        },
        CustomPageDefinitions
    );
});