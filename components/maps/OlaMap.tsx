import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useState, useEffect } from "react";
import { Map as MapLibreMap, NavigationControl } from "maplibre-gl";

import "maplibre-gl/dist/maplibre-gl.css";

const OLA_MAPS_API_KEY = "EkrQrT7mWoLXhadkgbeBxdgQjCdRoDcmTAqDY3em";

const OlaMap = () => {
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!mapReady) return;

    const map = new MapLibreMap({
      container: "map",
      center: [0, 0],
      zoom: 0,
      style:
        "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
      transformRequest: (url, resourceType) => {
        url = url.replace("app.olamaps.io", "api.olamaps.io");

        if (url.includes("?")) {
          url = url + `&api_key=${OLA_MAPS_API_KEY}`;
        } else {
          url = url + `?api_key=${OLA_MAPS_API_KEY}`;
        }
        return { url, resourceType };
      },
    });

    const nav = new NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, "top-left");
  }, [mapReady]);
  return (
    <View style={styles.map} ref={() => setMapReady(true)} id="map"></View>
  );
};

export default OlaMap;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});
