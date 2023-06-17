import axios from "axios";

export const getPlacesData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.157338",
          tr_latitude: "26.042544",
          bl_longitude: "90.940203",
          tr_longitude: "92.249542",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "8818c6825fmsha9a8915ba670772p1d2747jsn5a953a38e45f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const getHotelData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.157338",
          bl_longitude: "90.940203",
          tr_longitude: "92.249542",
          tr_latitude: "26.042544",
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "8818c6825fmsha9a8915ba670772p1d2747jsn5a953a38e45f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const JaintiaHillsRestaurent = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.194802",
          tr_latitude: "25.721833",
          bl_longitude: "91.888144",
          tr_longitude: "92.766662",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "8818c6825fmsha9a8915ba670772p1d2747jsn5a953a38e45f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const JaintiaHillsHotels = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.202805",
          bl_longitude: "91.9353122",
          tr_longitude: "92.766662",
          tr_latitude: "25.721833",
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "8818c6825fmsha9a8915ba670772p1d2747jsn5a953a38e45f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const GaroHillsRestaurent = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.297101",
          tr_latitude: "25.875628",
          bl_longitude: "89.849318",
          tr_longitude: "91.013242",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "8818c6825fmsha9a8915ba670772p1d2747jsn5a953a38e45f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};

export const GaroHillsHotels = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
      {
        params: {
          bl_latitude: "25.297101",
          tr_latitude: "25.875628",
          bl_longitude: "89.849318",
          tr_longitude: "91.013242",
          restaurant_tagcategory_standalone: "10591",
          restaurant_tagcategory: "10591",
          limit: "30",
          currency: "USD",
          open_now: "false",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "8818c6825fmsha9a8915ba670772p1d2747jsn5a953a38e45f",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    return null;
  }
};
