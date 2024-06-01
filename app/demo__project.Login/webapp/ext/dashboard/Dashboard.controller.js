sap.ui.define([
    'demoproject/Login/controller/BaseController', 
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/format/DateFormat",
    "sap/m/MessageToast",
    "sap/ui/integration/library",
    "sap/ui/core/Core",
    'sap/f/library',
], function (BaseController, JSONModel, DateFormat, MessageToast, library, Core, fioriLibrary) {
    "use strict";
    var that = this;
    return BaseController.extend('demoproject.Login.ext.dashboard.Dashboard', {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("dashboard").attachMatched(this._onRouteMatched, this);

            this.pageId = this.byId("oplDashboard");
        },
        _onRouteMatched: function () {
            this.dashboardModel();
            // this.userSettingsData();
            // this.fetchMasterData();
        },
        onPressTile: function (oEvent) {
            var route = oEvent.getSource().getCustomData().find(e => e.getProperty("key") == "route").getValue();
            this.getRouter().navTo(route);
        },
        onManageTileLoadingState: function () {
            var sections = this.pageId.getSections();
            sections.forEach((section) => {
                let tiles = section._getGrid().getContent()[0]._getGrid().getContent()[0].getItems();
                for (var i = 1; i < content.length; i++) {
                    tiles[i].setState("Loading");
                }
                setTimeout(function () {
                    for (var j = 1; j < content.length; j++) {
                        tiles[j].setState("Loaded");
                    }
                }, 10000);
            });

        },
        dashboardModel: function () {
            let dashboardData = {
                "linerService": {
                   // "title": this.getResourceProperty("dEmployees"),
                    "items": [
                        {
                            "header": this.getResourceProperty("dEmployees"),
                            "subHeader": this.getResourceProperty("dEmployees"),
                            "icon": "sap-icon://employee",
                            "footer": this.getResourceProperty("dEmployees"),
                            "route": "employeesMaster",
                            "key": 1,
                            "value": "29"
                        },
                        {
                            "header": this.getResourceProperty("dTickets"),
                            "subHeader": this.getResourceProperty("dTickets"),
                            "icon": "sap-icon://BusinessSuiteInAppSymbols/icon-target",
                            "footer": this.getResourceProperty("dTickets"),
                            "route": "manageTickets",
                            "key": 1,
                            "value": "17"
                        },
                        {
                            "header": this.getResourceProperty("dReports"),
                            "subHeader": this.getResourceProperty("dReports"),
                            "icon": "sap-icon://BusinessSuiteInAppSymbols/icon-source",
                            "footer": this.getResourceProperty("dReports"),
                            "route": "manageReports",
                            "key": 1,
                            "value": "12"
                        },
                       
                    ]
                }
            };
            this.getView().setModel(new JSONModel(dashboardData), "dashboard");
            //this.onManageTileLoadingState();
        }
    });
});
