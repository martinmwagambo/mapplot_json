import React, { Component } from "react";
import Map from "./Map";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          latitude: 40.7128,
          longitude: -74.006,
          location: "New York City, USA",
        },
        {
          latitude: 34.0522,
          longitude: -118.2437,
          location: "Los Angeles, USA",
        },
        { latitude: 51.5074, longitude: -0.1278, location: "London, UK" },
        { latitude: 48.8566, longitude: 2.3522, location: "Paris, France" },
        { latitude: 35.6895, longitude: 139.6917, location: "Tokyo, Japan" },
        {
          latitude: 37.7749,
          longitude: -122.4194,
          location: "San Francisco, USA",
        },
        {
          latitude: -33.8688,
          longitude: 151.2093,
          location: "Sydney, Australia",
        },
        { latitude: 55.7558, longitude: 37.6176, location: "Moscow, Russia" },
        {
          latitude: -22.9068,
          longitude: -43.1729,
          location: "Rio de Janeiro, Brazil",
        },
        { latitude: 40.4168, longitude: -3.7038, location: "Madrid, Spain" },
        { latitude: 41.9028, longitude: 12.4964, location: "Rome, Italy" },
        { latitude: 19.076, longitude: 72.8777, location: "Mumbai, India" },
        {
          latitude: -6.2088,
          longitude: 106.8456,
          location: "Jakarta, Indonesia",
        },
        {
          latitude: -34.6037,
          longitude: -58.3816,
          location: "Buenos Aires, Argentina",
        },
        {
          latitude: 55.7558,
          longitude: 12.4384,
          location: "Copenhagen, Denmark",
        },
        {
          latitude: 59.3293,
          longitude: 18.0686,
          location: "Stockholm, Sweden",
        },
        {
          latitude: 37.5665,
          longitude: 126.978,
          location: "Seoul, South Korea",
        },
        { latitude: 31.2304, longitude: 121.4737, location: "Shanghai, China" },
        {
          latitude: -33.4489,
          longitude: -70.6693,
          location: "Santiago, Chile",
        },
        { latitude: -12.0464, longitude: -77.0428, location: "Lima, Peru" },
      ], // Initialize data as an empty array
    };
  }

  // componentDidMount() {
  //   fetch("data.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const contentType = response.headers.get("content-type");
  //       console.log("Content-Type:", contentType); // Log content-type

  //       if (!contentType || !contentType.includes("application/json")) {
  //         throw new Error("Response is not in JSON format");
  //       }

  //       return response.json();
  //     })
  //     .then((jsonData) => this.setState({ data: jsonData }))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }

  render() {
    return (
      <div>
        <h1 className="text-xl font-bold text-center">Map</h1>
        <Map data={this.state.data} />
      </div>
    );
  }
}

export default App;
