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

    // Add new markers with Hero Icon
    this.markers = data.map(({ latitude, longitude, location }) => {
      const icon = L.divIcon({
        className: "hero-icon", // Define a class for the icon
        html: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
      });

      return L.marker([parseFloat(latitude), parseFloat(longitude)], { icon })
        .addTo(this.map)
        .bindPopup(location);
    });
  }

  render() {
    return <div id="map" style={{ height: "100vh" }} ref={this.mapRef} />;
  }
}

export default Map;
