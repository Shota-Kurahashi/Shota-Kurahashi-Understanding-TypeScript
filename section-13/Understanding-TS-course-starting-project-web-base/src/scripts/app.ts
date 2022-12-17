/* eslint-disable @typescript-eslint/no-unsafe-call */
import axios from "axios";
import "../styles/style.scss";

const form = document.querySelector("form") as HTMLFormElement;
const addressInput = document.querySelector("#address") as HTMLInputElement;
const GOOGLE_API_KEY = "API_KEY";
// 消去済み

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
  }[];
  status: "OK" | "ZERO_RESULTS";
};

const searchAddressHandler = (e: Event) => {
  e.preventDefault();

  const enteredAddress = addressInput.value;
  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 16,
        }
      );
      new google.maps.Marker({
        position: coordinates,
        map,
      });
    })
    .catch((err: Error) => {
      console.log(err.message);
    });
};

form.addEventListener("submit", searchAddressHandler);
