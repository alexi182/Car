import './ActionsBar.scss';

class ActionsBar extends React.Component {

   render() {

      return (
          <div className="actions">
             <button className="action" onClick={this.addFirst}>
                Добавить в начало
             </button>
             <button className="action" onClick={this.addLast}>
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