import ActionsBar from "../components/ActionsBar/ActionsBar";
import Content from '../components/Content/Content';
import './Layout.scss';

class Layout extends React.Component {

  render() {

    return (
        <div className="container">
          <ActionsBar />
          <Content />

        </div>
    );
  }
}


export default (Layout);


