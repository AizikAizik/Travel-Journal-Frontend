import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchJornalEntries } from "../actions/journalActions";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import EntryWithImage from "../components/EntryWithImage";
import EntryWithoutImage from "../components/EntryWithoutImage";
import AddEntryForm from "../components/AddEntryForm";

const MapScreen = () => {
  // state values
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

  const [addEntryLocation, setaddEntryLocation] = useState(null);

  const showMarkerPopup = (e) => {
    const [longitude, latitude] = e.lngLat;

    setaddEntryLocation({
      latitude,
      longitude,
    });
  };

  const [showPopup, setshowPopup] = useState({});

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
        onDblClick={showMarkerPopup}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {journalEntry.map((entry) => {
          return (
            <div key={entry._id}>
              <Marker
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
                  onClick={() =>
                    setshowPopup({
                      [entry._id]: true,
                    })
                  }
                />
              </Marker>
              {showPopup[entry._id] && (
                <Popup
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setshowPopup({})}
                  anchor="top"
                  dynamicPosition={true}
                  sortByDepth={true}
                >
                  {entry.image ? (
                    <EntryWithImage entry={entry} />
                  ) : (
                    <EntryWithoutImage entry={entry} />
                  )}
                </Popup>
              )}
            </div>
          );
        })}
        {addEntryLocation && (
          <>
            <Marker
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              offsetLeft={-12}
              offsetTop={-24}
            >
              <img
                src="https://th.bing.com/th/id/R4a2afab3dfbf5287f9bb4aabfdefdbe3?rik=gaKyLBhTlO3BtA&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fH%2f9%2f3%2fz%2fe%2fO%2fred-pin-maps.svg.hi.png&ehk=rs7Wnn0Le04CoZ25h1Rf2jTlrIUNT4Et8PdHOi4qdEk%3d&risl=&pid=ImgRaw"
                alt="red marker"
                className="marker"
              />
            </Marker>
            <Popup
              latitude={addEntryLocation.latitude}
              longitude={addEntryLocation.longitude}
              closeButton={true}
              closeOnClick={false}
              onClose={() => setaddEntryLocation(null)}
              anchor="top"
              dynamicPosition={true}
              sortByDepth={true}
            >
              <AddEntryForm
                points={addEntryLocation}
                onClose={() =>{
                   setaddEntryLocation(null);
                   dispatch(fetchJornalEntries())
                }}
              />
            </Popup>
          </>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapScreen;
