sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.emp.module.zempmod1401.controller.EmpMain", {
            onInit: function () {
                this.getView().bindElement("/Emp14_02Set"); //ddd
            },
            onPress: function (oEvent) {
                var oItem = oEvent.getSource()
                const model = new JSONModel(oItem.getBindingContext().getObject());
                const model1 = new JSONModel({
                    url : this.getView().getModel().getProperty(`/Emp14_02Set(Company='${oItem.getBindingContext().getObject().Company}',Emp_No='${oItem.getBindingContext().getObject().Emp_No}')/Zimage`)
                })
                this.getOwnerComponent().setModel(model, "detail");
                this.getOwnerComponent().setModel(model1, "imageurl");

                const geocoder = new google.maps.Geocoder();
                geocodeAddress(geocoder, sap.ui.getCore()._initMap);
                function geocodeAddress(geocoder, resultMap) {

                    const address = oItem.getBindingContext().getObject().Address;

                    geocoder.geocode({ 'address': address }, function (result, status) {

                        if (status === 'OK') {
                            // 맵의 중심 좌표를 설정한다.
                            resultMap.setCenter(result[0].geometry.location);
                            // 맵의 확대 정도를 설정한다.
                            resultMap.setZoom(18);
                            // 맵 마커
                            var marker = new google.maps.Marker({
                                map: resultMap,
                                position: result[0].geometry.location
                            });
                        } else {
                            alert('지오코드가 다음의 이유로 성공하지 못했습니다 : ' + status);
                        }
                    });
                }
            }
        });
    });
