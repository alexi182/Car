import './ActionsBar.scss';

class ActionsBar extends React.Component {

   copyFirst = () => {
      this.props.copyFirst()
   }

   copyLast = () => {
      this.props.copyLast()
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