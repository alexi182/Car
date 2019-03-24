import ActionsBar from "../../components/ActionsBar/ActionsBar";
import Content from '../../components/Content/Content';
import { NavLink } from 'react-router-dom';
import './Index.scss';

export default class Index extends React.Component {

   render() {
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

             <ActionsBar />

             <Content />


          </div>
      );
   }
}