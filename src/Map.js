import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.loadMap();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      const { data } = this.props;
      this.setState({ data }, () => {
        this.updateMarkers();
      });
    }
  }

  loadMap() {
    if (!this.map) {
      const mbAttr =
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

      this.map = L.map(this.mapRef.current).setView([37.7749, -122.4194], 2);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: mbAttr,
      }).addTo(this.map);
    }

    this.updateMarkers();
  }

  updateMarkers() {
    const { data } = this.props;

    // Clear existing markers
    if (this.markers) {
      this.markers.forEach((marker) => {
        this.map.removeLayer(marker);
      });
    }

    // Add new markers
    this.markers = data.map(({ latitude, longitude, location }) => {
      return L.marker([parseFloat(latitude), parseFloat(longitude)])
        .addTo(this.map)
        .bindPopup(location);
    });
  }

  render() {
    return <div id="map" style={{ height: "100vh" }} ref={this.mapRef} />;
  }
}

export default Map;
