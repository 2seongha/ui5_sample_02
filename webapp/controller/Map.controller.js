sap.ui.define([
  "sap/ui/core/mvc/Controller"
],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    "use strict";

    return Controller.extend("com.emp.module.zempmod1401.controller.Map", {
      onInit: function () {

      },
      onRenderMap: async function () {
        let map;
        // let map;
        async function initMap() {
          // The location of Uluru
          const position = { lat: -25.344, lng: 131.031 };
          // Request needed libraries.
          //@ts-ignore
          const { Map } = await google.maps.importLibrary("maps");

          // The map, centered at Uluru
          map = new Map(document.getElementById("map"), {
            zoom: 4,
            center: position,
            mapId: "DEMO_MAP_ID",
          });
        }
        await initMap();
        sap.ui.getCore()._initMap = map;
      }
    });
  });
