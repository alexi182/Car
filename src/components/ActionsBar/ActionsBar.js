import './ActionsBar.scss';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

@connect( store => {
  return store.actions;
})

class ActionsBar extends React.Component {

  copyFirst = () => {
    let toDispatch = actions.copyFirst();
    this.props.dispatch(toDispatch);
  }

   render() {

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


export default ActionsBar