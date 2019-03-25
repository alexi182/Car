import ActionsBar from "../../components/ActionsBar/ActionsBar";
import Content from '../../components/Content/Content';
import { NavLink } from 'react-router-dom';
import './Index.scss';
import * as actions from '../../actions/actions';
import { connect } from 'react-redux';

/*@connect( store => {
   return store.actions;
})*/

class Index extends React.Component {

   render() {

      // console.log(this.props.data);

      return (
          <div className="container">
             <h1>Добро пожаловать на главную страницу</h1>

             <nav>
                <ul>
                   <li>
                      <NavLink to="/">Главная</NavLink>
                   </li>
                   <li>
                      <NavLink to="/products">Продукты</NavLink>
                   </li>
                </ul>
             </nav>

             <ActionsBar copyFirst={this.props.copyFirst} />

          <Content data={this.props} />

          </div>
      );
   }
}


const mapStateToProps = state => {
   return {
      data: state.data,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      copyFirst: () => dispatch(actions.copyFirst()),
      copyLast: () => dispatch(actions.copyLast())
   };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);


