import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchJornalEntries } from "../actions/journalActions";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ReactMapGL, { Marker } from "react-map-gl";

const MapScreen = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  const userLogin = useSelector((state) => state.userLogin);

  const journal = useSelector((state) => state.journal);

  const { loading, journalEntry } = journal;

  const dispatch = useDispatch();

  const history = useHistory();

  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(fetchJornalEntries());
    }
  }, [userInfo, history, dispatch]);

  return (
    <div>
      <Header />
      {loading && <Loader />}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {journalEntry.map((entry) => {
          return <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}
            offsetLeft={-12}
            offsetTop={-24}
          >
              <img
                src="https://i.imgur.com/y0G5YTX.png"
                alt={entry.title}
                className="marker"
              />
          </Marker>;
        })}
      </ReactMapGL>
    </div>
  );
};

export default MapScreen;
