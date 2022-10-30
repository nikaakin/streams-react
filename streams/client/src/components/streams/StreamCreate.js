import { submitForm, createStream } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import StreamForm from "./StreamForm";

const StreamCreate = () => {
  // const formValues = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    dispatch(submitForm(values));
    dispatch(createStream(values));
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmitForm={onSubmit} />
    </div>
  );
};

export default StreamCreate;
