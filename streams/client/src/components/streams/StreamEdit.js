import { useParams } from "react-router-dom";
import { fetchStream, editStreams } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import StreamForm from "./StreamForm";
import _ from "lodash";

const StreamEdit = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const stream = useSelector((state) => state.streams[id]);

  useEffect(() => {
    dispatch(fetchStream(id));
  }, []);

  const onSubmit = (values) => {
    dispatch(editStreams(stream.id, values));
  };

  return (
    <div>
      <h3>Edit the Stream</h3>
      <StreamForm
        onSubmitForm={onSubmit}
        // initialValues={{ title: stream.title, description: stream.description }}
        initialValues={_.pick(stream, "title", "description")}
      />
    </div>
  );
};

export default StreamEdit;
