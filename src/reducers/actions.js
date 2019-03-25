import * as constants from '../constants/actions';
import loadData from '../../data.json'

export default function actionReducers(state = { data: loadData }, action) {
   let updatedList;

   switch (action.type) {

      case constants.COPY_FIRST: {

         updatedList = [...state.data.data];

         console.log(updatedList);

         let lastElement = updatedList.slice(updatedList.indexOf(updatedList[updatedList.length - 1]));

         console.log(lastElement[0]);

         updatedList.unshift(lastElement[0]);

         state = {...state, data: updatedList }
         break;
      }

      default:
         return state;
   }
   return state;
}

