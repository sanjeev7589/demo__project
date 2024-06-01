sap.ui.define(
    ["sap/fe/core/AppComponent",
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
        "sap/ui/core/IconPool"
    ],
    function (AppComponent, UIComponent, JSONModel,IconPool) {
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

                this.iconPoolRegister();
            },
            _onBeforeRouteMatched: function (oEvent) {
                this.setModel(new JSONModel([]), "errors"); //it can set new error model every screen navigation before routing
            },
            iconPoolRegister: function () {
                var b = [];
                var c = {};
                //Fiori Theme font family and URI
                var t = {
                    fontFamily: "SAP-icons-TNT",
                    fontURI: sap.ui.require.toUrl("sap/tnt/themes/base/fonts/")
                };
                //Registering to the icon pool
                IconPool.registerFont(t);
                b.push(IconPool.fontLoaded("SAP-icons-TNT"));
                c["SAP-icons-TNT"] = t;
                //SAP Business Suite Theme font family and URI
                var B = {
                    fontFamily: "BusinessSuiteInAppSymbols",
                    fontURI: sap.ui.require.toUrl("sap/ushell/themes/base/fonts/")
                };
                //Registering to the icon pool
                IconPool.registerFont(B);
                b.push(IconPool.fontLoaded("BusinessSuiteInAppSymbols"));
                c["BusinessSuiteInAppSymbols"] = B;
            },
        });
    }
);