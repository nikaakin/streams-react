import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { fetchStream } from "../../actions";
import flv from "flv.js";

const StreamShow = () => {
  const videoRef = useRef();
  const { id } = useParams();
  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);

  useEffect(() => {
    const player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    player.attachMediaElement(videoRef.current);
    player.load();
    return () => {
      player.destroy();
    };
  }, [stream]);

  return (
    <div>
      <video ref={videoRef} style={{ width: "100%" }} controls />
      <h1>{stream?.title}</h1>
      <h5>{stream?.description}</h5>
    </div>
  );
};

export default StreamShow;
