import * as constants from '../constants/actions';
import data from '../../data.json'

export default function actionReducers(state = {
   data: data.data,
   post: {name, point, text}
}, action) {

   switch (action.type) {

      case constants.ADD_POST: {

         add({ title, body }) {
            let maxId = Math.max(...this.state.blogs.map(b => b.id));
            let blog = { title, body, userId: 1, id: maxId + 1 };
            let blogs = this.state.blogs.slice(0);



            let updatedList = [...state.data];
         let lastElement = updatedList.slice(updatedList.indexOf(updatedList[updatedList.length - 1]));

         if (updatedList.length) {
            updatedList.unshift(lastElement[0]);
         }

         return state = {...state, data: updatedList };
      }

      default:
         return state;
   }
}

