import './Form.scss';
import {connect} from "react-redux";

class Form extends React.Component {

   render() {
      return (
          <div className="form">
             {
                this.props.data.map((item, i) =>
                    { if (this.props.viewList) {
                       return  <ContentBlock {...item} num={i} key={i} />
                    } else return  <ContentBlockCard {...item} num={i} key={i} />
                    }
                )}
          </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      data: state.actions.data
   };
};

export default connect(
    mapStateToProps,
)(Form);


