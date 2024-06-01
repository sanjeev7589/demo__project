sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
    ],
    function (Controller) {
      return Controller.extend(
        "demoproject.Login.controller.BaseController", {
        onInit: function () {
  
        },
        getRouter: function () {
          return sap.ui.core.UIComponent.getRouterFor(this);
        },
        showLoading: function (status) {
          this.getView().setBusy(status);
        },
        getResourceProperty: function (text) {
          return this.getOwnerComponent()
            .getModel("i18n")
            .getResourceBundle()
            .getText(text);
        },
        restMethodGet: function (url) {
          let that = this;
          url = 'http://localhost:8080/Employees/all';
          var deferred = $.Deferred();
          
            $.ajax({
              type: "GET",
              beforeSend: function (xhr) {
                xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
              },
              url: url,
              contentType: "application/json",
              //headers: { "my-token": token },
              success: function (response) {
                deferred.resolve(response);
              },
              error: function (xhr) {
                deferred.reject(xhr); //.responseJSON.message);
                if (xhr && xhr.status == "401") {
                 
                }
              },
            });
          
          return deferred.promise();
        },
      })
    })