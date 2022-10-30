import streams from "../apis/streams";

import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  SUBMIT_FORM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (id) => {
  return {
    type: SIGN_IN,
    payload: id,
  };
};
export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const submitForm = (values) => {
  return {
    type: SUBMIT_FORM,
    payload: values,
  };
};

export const createStream = (values) => async (dispatch, getState) => {
  const { userID } = getState().auth;

  const res = await streams.post("/streams", { ...values, userID });
  dispatch({ type: CREATE_STREAM, payload: res.data });

  history.push("/");
};

export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};
export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};
export const deleteStreams = (id) => async (dispatch) => {
  streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
export const editStreams = (id, values) => async (dispatch) => {
  const res = await streams.patch(`/streams/${id}`, values);
  dispatch({ type: EDIT_STREAM, payload: res.data });
  history.push("/");
};
