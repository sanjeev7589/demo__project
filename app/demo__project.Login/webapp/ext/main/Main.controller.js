sap.ui.define(
    [
        'sap/fe/core/PageController',
        'demoproject/Login/controller/BaseController',  
        "sap/ui/core/mvc/Controller",
         'sap/m/MessageBox',"sap/fe/core/AppComponent"
    ],
    function(PageController,Controller,BaseController,MessageBox,AppComponent) {
        'use strict';

        return BaseController.extend('demoproject.Login.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf demoproject.Login.ext.main.Main
             */
            /* onInit: function () {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
             }, */
             onInit: function () {
                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
                this.oRouter.getRoute("CustomersMain").attachMatched(this.onRouteMatched, this);
               
            },
            onRouteMatched: function (oEvent) {
                this.errorPopoverParams();
            },
            errorPopoverParams: function () {
                //******Set Initially Empty Error Mdl******
                this.eMdl = this.oOwnerComponent.getModel('errors');
                this.eMdl.setData([]);
            },
             onPressLogin: function () {
               // MessageBox.information("Hello");
               this.oRouter.navTo("dashboard");
            },

           
        });
    }
);
