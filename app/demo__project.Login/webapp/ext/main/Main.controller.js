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
           /*      let sRouteName = oEvent.getParameter('name');
                if (sRouteName === 'CustomersMain') {
                    let oSecondView = this.getView().byId('Second');
                    if (!oSecondView) {
                        oSecondView = sap.ui.xmlview({
                            viewName: 'demoproject.Login.ext.main.Second'
                        });
                        this.getView().addDependent(oSecondView);
                    }
                    this.getView().byId('Main').addContent(oSecondView);
                } */
            },
             onPressLogin: function () {
               // MessageBox.information("Hello");
               this.oRouter.navTo("second");
            },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf demoproject.Login.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf demoproject.Login.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf demoproject.Login.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
        });
    }
);
