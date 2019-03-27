import './ActionsBar.scss';
import * as actions from "../../actions/actions";
import {connect} from "react-redux";

class ActionsBar extends React.Component {


   render() {

      const {
         data,
         copyFirst,
         copyLast ,
         removeFirst,
         removeLast
      } = this.props

      let firstElem = data[0]
      let lastElem = data.length-1

      return (
          <div className="actions">
             <button className="action" onClick={copyFirst}>
                Добавить в начало
             </button>
             <button className="action" onClick={copyLast}>
                Добавить в конец
             </button>
             <button className="action" onClick={removeFirst.bind(this, firstElem)}>
                Удалить первый
             </button>
             <button className="action" onClick={removeLast.bind(this, lastElem)}>
                Удалить последний
             </button>

          </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      data: state.actions.data
   };
};

const mapDispatchToProps = dispatch => {
   return {
      copyFirst: () => dispatch(actions.copyFirst()),
      copyLast: () => dispatch(actions.copyLast()),
      removeFirst: (id) => dispatch(actions.removeFirst(id)),
      removeLast: (id) => dispatch(actions.removeLast(id))
   };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsBar);

