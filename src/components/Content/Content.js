import ContentBlock from './ContentBlock/ContentBlock';
import './Content.scss';
/*import * as actions from '../../actions/actions';
import { connect } from 'react-redux';*/

/*@connect( store => {
   return store.actions;
})*/

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

      let {data} = this.props.data.data;

      return (
          <div className="content">
             {
                data !== undefined &&
                data.map((item, i) =>
                 <ContentBlock
                     {...item}
                     num={i}
                     key={i} />
             )}
          </div>
      );
   }
}


export default Content

