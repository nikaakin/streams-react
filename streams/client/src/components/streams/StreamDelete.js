import Modal from "../Modal";
import history from "../../history";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStream, deleteStreams } from "../../actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const StreamDelete = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);

  const actions = (
    <>
      <button
        onClick={() => dispatch(deleteStreams(id))}
        className="ui negative button"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const message = "Do you want to delete the Stream:";

  return (
    <Modal
      title="Delete stream"
      content={`${message}  ${stream?.description || "Loading..."}`}
      actions={actions}
      onDismiss={() => history.push("/")} // * if clicked outside of modal, modal with disappear
    />
  );
};

export default StreamDelete;
