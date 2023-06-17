import AdminOutput from "../../components/Admin/AdminOutput";
import AdminOverlay from "../../components/Admin/AdminOverlay";
import { useContext, useState } from "react";
import { TourContext } from "../../store/tour-context";
import { useEffect } from "react";
import { fetchTour } from "../../util/http";
import LoadingOverlay from "../../components/LoadingOverlay";
import TourOutput from "../../components/Admin/TourOutput";
import TourOverlay from "../../components/Admin/TourOverlay";

function TourUserData() {
  const TourCtx = useContext(TourContext);
  const [tourData, setTourData] = useState([]);
  const [isFetching, setIsFeteching] = useState(true);

  useEffect(() => {
    async function getTour() {
      setIsFeteching(true);
      const tour = await fetchTour();
      setIsFeteching(false);
      setTourData(tour);
    }
    getTour();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  function RenderTourOperator(itemData) {
    return (
      <TourOverlay
        id={itemData.item.id}
        Agency={itemData.item.Agency}
        Owner={itemData.item.Owner}
        phoneNo={itemData.item.phoneNo}
        Place={itemData.item.Place}
        email={itemData.item.email}
      />
    );
  }

  return <TourOutput list={tourData} RenderItem={RenderTourOperator} />;
}

export default TourUserData;
