import './ContentBlockCard.scss'
import {Fragment} from "react";

const ContentBlockCard = (props) => {

   let {title, attributes, description, num } = props;

   return (
       <Fragment>
          <div className="content-list">
             <div className="content-list__top">
                <div className="content-list__number">{num+1}</div>
                <div className="content-list__title">{title}</div>
                <div className="content-list__attributes">
                   {
                      attributes.map((item, i) =>
                          <div className="content-list__attributes-item"
                               key={i}
                          >
                             {item}
                          </div>
                      )
                   }
                </div>
             </div>
             <div className="content-list__description">{description}</div>
          </div>
       </Fragment>
   )
};

export default ContentBlockCard