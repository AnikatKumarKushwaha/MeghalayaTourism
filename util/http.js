import axios from "axios";

const BACKEND_URL = "https://nearby-e7370-default-rtdb.firebaseio.com/";

export async function storeTour(tourData) {
  const response = await axios.post(BACKEND_URL + "tour.json", tourData);
  const id = response.data.name;
  return id;
}

export async function fetchTour() {
  const response = await axios.get(
    "https://nearby-e7370-default-rtdb.firebaseio.com/tour.json"
  );

  const tour = [];

  for (const key in response.data) {
    const tourObj = {
      id: key,
      Agency: response.data[key].Agency,
      Owner: response.data[key].Owner,
      Place: response.data[key].Place,
      email: response.data[key].email,
      phoneNo: response.data[key].phoneNo,
    };
    tour.push(tourObj);
  }

  return tour;
}

export function updateTour(id, tourData) {
  return axios.put(BACKEND_URL + `tour/${id}.json`, tourData);
}

export function deleteTour(id) {
  return axios.delete(BACKEND_URL + `tour/${id}.json`);
}
