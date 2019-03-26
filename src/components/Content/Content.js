import ContentBlock from './ContentBlock/ContentBlock';
import './Content.scss';
import * as actions from "../../actions/actions";
import {connect} from "react-redux";

class Content extends React.Component {
   constructor(props) {
      super(props);

      // this.name = "Will";
      // this.count = "300";

      // this.state = {
      //    text: this.props.text,
      //    count: this.count
      // };
   }

   // handleChange(e) {
   //    this.setState({
   //       text: e.target.value,
   //       count: this.count - e.target.value.length
   //    });
   // }

   // componentDidMount() {
   //    let action = actions.init();
   //    this.props.dispatch(action);
   // }

   render() {

      console.log(this.props.data);

      return (
          <div className="content">
             {
                this.props.data !== undefined &&
                this.props.data.map((item, i) =>
                 <ContentBlock
                     {...item}
                     num={i}
                     key={i} />
             )}
          </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      data: state.data,
   };
};

export default connect(
    mapStateToProps
)(Content);



