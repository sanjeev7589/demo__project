sap.ui.define(
    [
        'sap/fe/core/PageController',
        'demoproject/Login/controller/BaseController',  
    ],
    function(PageController,BaseController) {
        'use strict';

        return BaseController.extend('demoproject.Login.ext.main.Second', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf demoproject.Login.ext.main.Second
             */
            onInit: function () {
                this.oOwnerComponent = this.getOwnerComponent();
                this.oRouter = this.oOwnerComponent.getRouter();
                this.oRouter.getRoute("second").attachMatched(this.onRouteMatched, this);
            },
            onRouteMatched:function(){
                
            }
        });
    }
);