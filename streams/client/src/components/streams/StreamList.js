import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount = () => {
    this.props.fetchStreams();
  };

  renderAdmin = (userID, streamID) => {
    if (userID === this.props.currentUserID) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${streamID}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${streamID}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream.userID, stream.id)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.title}
            </Link>

            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate = () => {
    return (
      this.props.isSignedIn && (
        <div style={{ textAlign: "right" }}>
          <Link className="ui button blue" to="/streams/new">
            Create stream
          </Link>
        </div>
      )
    );
  };

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserID: state.auth.userID,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
