import * as constants from '../constants/actions';
import data from '../../data.json'

export default function actionReducers(state = {data: data.data}, action) {

   switch (action.type) {

      case constants.COPY_FIRST: {

         let updatedList = [...state.data];
         console.log(updatedList);

         let lastElement = updatedList.slice(updatedList.indexOf(updatedList[updatedList.length - 1]));
         console.log(lastElement[0]);

         updatedList.unshift(lastElement[0]);

         return state = {...state, data: updatedList };
      }

      case constants.COPY_LAST: {
         let updatedList = [...state.data];
         console.log(updatedList);

         let firstElement = updatedList.slice(updatedList.indexOf(updatedList[0]));
         console.log(firstElement[0]);

         updatedList.push(firstElement[0]);

         return state = {...state, data: updatedList };
      }

      case constants.REMOVE_FIRST: {
         let updatedList = [...state.data];

         updatedList.splice(0,1);

         return state = {...state, data: updatedList };
      }

      case constants.REMOVE_LAST: {
         let updatedList = [...state.data];

         updatedList.splice(updatedList.indexOf(updatedList[updatedList.length - 1]),1);

         return state = {...state, data: updatedList };
      }

      default:
         return state;
   }
}

