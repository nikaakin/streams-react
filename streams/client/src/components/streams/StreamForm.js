import { Form, Field } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";

const StreamForm = ({ onSubmitForm, initialValues }) => {
  const onSubmit = async (values) => {
    onSubmitForm(values);
    // dispatch(createStream(values));
  };

  const required = (value) => (value ? "" : "* required");

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit} className="ui form error">
          <div>
            <Field
              name="title"
              component="input"
              placeholder="title"
              validate={required}
            >
              {({ input, meta, placeholder }) => (
                <div className="field">
                  <label>
                    title
                    <input
                      {...input}
                      placeholder={placeholder}
                      autoComplete="off"
                    />
                  </label>
                  <span className="ui error message">
                    {meta.pristine && meta.touched && meta.error}
                  </span>
                </div>
              )}
            </Field>
          </div>
          <div>
            <Field
              name="description"
              component="input"
              placeholder="description"
              validate={(value) => required(value)} // valiedate={required} <---for short
            >
              {({ input, meta, placeholder }) => (
                <div className="field">
                  <label>
                    description
                    <input
                      {...input}
                      placeholder={placeholder}
                      autoComplete="off"
                    />
                  </label>
                  <span className="ui error message">
                    {meta.pristine && meta.touched && meta.error}
                  </span>
                </div>
              )}
            </Field>
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="ui button primary"
          >
            Submit
          </button>
        </form>
      )}
    </Form>
  );
};

export default StreamForm;
