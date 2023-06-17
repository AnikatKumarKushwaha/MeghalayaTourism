import { createContext, useReducer } from "react";

export const TourContext = createContext({
  tour: [],
  addTour: ({ Agency, Owner, Place, phoneNo, email }) => {},
  setTour: (tour) => {},
  deleteTour: (id) => {},
  updateTour: (id, { Agency, Owner, Place, phoneNo, email }) => {},
});

function TourReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updatableTourIndex = state.findIndex(
        (tour) => tour.id === action.payload.id
      );
      const updatableTour = state[updatableTourIndex];
      const updatedItem = { ...updatableTour, ...action.payload.data };
      const updatedTours = [...state];
      updatedTours[updatableTourIndex] = updatedItem;
      return updatedTours;
    case "DELETE":
      return state.filter((Tour) => Tour.id !== action.payload);
    default:
      return state;
  }
}

function TourContextProvider({ children }) {
  const [TourState, dispatch] = useReducer(TourReducer, []);

  function AddTour(tourData) {
    dispatch({ type: "ADD", payload: tourData });
  }

  function setTour(tour) {
    dispatch({ type: "SET", payload: tour });
  }

  function DeleteTour(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function UpdateTour(id, tourData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: tourData } });
  }

  const value = {
    tour: TourState,
    setTour: setTour,
    addTour: AddTour,
    deleteTour: DeleteTour,
    updateTour: UpdateTour,
  };

  return <TourContext.Provider value={value}>{children}</TourContext.Provider>;
}
export default TourContextProvider;
