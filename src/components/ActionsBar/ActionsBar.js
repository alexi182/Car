import './ActionsBar.scss';
import * as actions from "../../actions/actions";
import {connect} from "react-redux";

class ActionsBar extends React.Component {

  copyFirst = () => {
    this.props.copyFirst()
  }

  copyLast = () => {
    this.props.copyLast()
  }

  removeFirst = () => {
    this.props.removeFirst()
  }

  removeLast = () => {
    this.props.removeLast()
  }

  render() {

    console.log(this.props.data);

    return (
        <div className="actions">
          <button className="action" onClick={this.copyFirst}>
            Добавить в начало
          </button>
          <button className="action" onClick={this.copyLast}>
            Добавить в конец
          </button>
          <button className="action" onClick={this.removeFirst}>
            Удалить первый
          </button>
          <button className="action" onClick={this.removeLast}>
            Удалить последний
          </button>

        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.actions.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    copyFirst: () => dispatch(actions.copyFirst()),
    copyLast: () => dispatch(actions.copyLast()),
    removeFirst: () => dispatch(actions.removeFirst()),
    removeLast: () => dispatch(actions.removeLast())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsBar);

