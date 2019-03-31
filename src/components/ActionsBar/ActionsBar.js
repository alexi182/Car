import './ActionsBar.scss';
import * as actions from "../../actions/actions";
import {connect} from "react-redux";

class ActionsBar extends React.Component {

   render() {

      const {
         data,
         copyFirst,
         copyLast ,
         removeElement,
         viewList,
         viewCard
      } = this.props

      let firstElem = data[0]
      let lastElem = data.length-1

      return (
          <div className="actions">
             <button className="actions__item" onClick={copyFirst}>
                Добавить в начало
             </button>
             <button className="actions__item" onClick={copyLast}>
                Добавить в конец
             </button>
             <button className="actions__item" onClick={removeElement.bind(this, firstElem)}>
                Удалить первый
             </button>
             <button className="actions__item" onClick={removeElement.bind(this, lastElem)}>
                Удалить последний
             </button>

             <div className="actions__view">
                <div>Переключить вид</div>

                <div className="actions__view-bar">
                   <button className="action" onClick={viewList}>
                      Список
                   </button>
                   <button className="actions__view-item" onClick={viewCard}>
                      Карточки
                   </button>
                </div>
             </div>actions

          </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      data: state.actions.data,
      viewList: state.actions.viewList,
      viewCard: state.actions.viewCard
   };
};

const mapDispatchToProps = dispatch => {
   return {
      copyFirst: () => dispatch(actions.copyFirst()),
      copyLast: () => dispatch(actions.copyLast()),
      removeElement: (id) => dispatch(actions.removeElement(id)),
      viewList: () => dispatch(actions.viewList()),
      viewCard: () => dispatch(actions.viewCard())
   };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionsBar);

