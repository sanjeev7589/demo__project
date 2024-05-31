sap.ui.define(
    ["sap/fe/core/AppComponent",
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
    ],
    function (AppComponent, UIComponent, JSONModel) {
        "use strict";

        return AppComponent.extend("demoproject.Login.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                var oModel,
                oRouter;
                // Call the base component's init function
                AppComponent.prototype.init.apply(this, arguments);

                // Initialize the router
                oRouter = this.getRouter();
                oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
                oRouter.initialize();
            },
            _onBeforeRouteMatched: function (oEvent) {
                this.setModel(new JSONModel([]), "errors"); //it can set new error model every screen navigation before routing
            },
        });
    }
);