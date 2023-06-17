import AdminOutput from "../../components/Admin/AdminOutput";
import AdminOverlay from "../../components/Admin/AdminOverlay";
import { useContext, useState } from "react";
import { TourContext } from "../../store/tour-context";
import { useEffect } from "react";
import { fetchTour } from "../../util/http";
import LoadingOverlay from "../../components/LoadingOverlay";

function AdminMain() {
  const TourCtx = useContext(TourContext);
  const [isFetching, setIsFeteching] = useState(true);

  useEffect(() => {
    async function getTour() {
      setIsFeteching(true);
      const tour = await fetchTour();
      setIsFeteching(false);
      TourCtx.setTour(tour);
    }
    getTour();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  function RenderTourOperator(itemData) {
    return (
      <AdminOverlay
        id={itemData.item.id}
        Agency={itemData.item.Agency}
        Owner={itemData.item.Owner}
        phoneNo={itemData.item.phoneNo}
        Place={itemData.item.Place}
        email={itemData.item.email}
      />
    );
  }

  return <AdminOutput list={TourCtx.tour} RenderItem={RenderTourOperator} />;
}

export default AdminMain;
