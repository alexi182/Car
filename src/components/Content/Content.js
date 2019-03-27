import ContentBlock from './ContentBlock/ContentBlock';
import './Content.scss';
import {connect} from "react-redux";

class Content extends React.Component {

   // handleChange(e) {
   //    //    this.setState({
   //    //       text: e.target.value,
   //    //       count: this.count - e.target.value.length
   //    //    });
   //    // }

   render() {

      console.log(this.props.data);

      return (
          <div className="content">
             {
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
      data: state.actions.data,
   };
};

export default connect(
    mapStateToProps
)(Content);



