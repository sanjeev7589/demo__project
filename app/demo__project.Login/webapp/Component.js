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
                // Call the base component's init function
                AppComponent.prototype.init.apply(this, arguments);

                // Initialize the router
                this.getRouter().initialize();
            }
        });
    }
);