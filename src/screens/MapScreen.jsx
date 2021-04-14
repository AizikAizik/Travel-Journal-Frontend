import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchJornalEntries } from "../actions/journalActions";
import Header from "../components/Header";
import Loader from "../components/Loader";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Card, Button } from "react-bootstrap";

const MapScreen = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3,
  });

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
                      ...showPopup,
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
                  onClose={() =>
                    setshowPopup({
                      ...showPopup,
                      [entry._id]: false,
                    })
                  }
                  anchor="top"
                >
                  {entry.image ? (
                    <Card style={{ width: "18rem", margin: "8px" }}>
                      <Card.Img variant="top" src={entry.image} />
                      <Card.Body>
                        <Card.Title style={{ height: "40px" }}>
                          {entry.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Rating: {entry.rating}/10
                        </Card.Subtitle>
                        <Card.Text>{entry.comments}</Card.Text>
                        <Button
                          variant="danger"
                          title="delete entry"
                          style={{
                            borderRadius: "50%",
                            width: "20px",
                            marginLeft: "80%",
                          }}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ marginLeft: "-5px" }}
                          ></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  ) : (
                    <Card style={{ width: "18rem", margin: "8px" }}>
                      <Card.Body>
                        <Card.Title style={{ height: "40px" }}>
                          {entry.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Rating: {entry.rating}/10
                        </Card.Subtitle>
                        <Card.Text>{entry.comments}</Card.Text>
                        <Button
                          variant="danger"
                          title="delete entry"
                          style={{
                            borderRadius: "50%",
                            width: "20px",
                            marginLeft: "80%",
                          }}
                        >
                          <i
                            className="fas fa-trash"
                            style={{ marginLeft: "-5px" }}
                          ></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                </Popup>
              )}
            </div>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default MapScreen;
