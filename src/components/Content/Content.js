import ContentBlock from './ContentBlock/ContentBlock';
import ContentBlockCard from './ContentBlockCard/ContentBlockCard';
import './Content.scss';
import {connect} from "react-redux";

class Content extends React.Component {

   render() {
      return (
          <div className="content">
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
      data: state.actions.data,
      viewList: state.actions.viewList,
      viewCard: state.actions.viewCard,
   };
};

export default connect(
    mapStateToProps,
)(Content);



