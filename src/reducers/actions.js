import * as constants from '../constants/actions';
import data from '../../data.json'

export default function actionReducers(state = {
   data: data.data,
   viewList: true,
   viewCard: false
}, action) {

   switch (action.type) {

      case constants.COPY_FIRST: {
         let updatedList = [...state.data];
         let lastElement = updatedList.slice(updatedList.indexOf(updatedList[updatedList.length - 1]));

         if (updatedList.length) {
            updatedList.unshift(lastElement[0]);
         }

         return state = {...state, data: updatedList };
      }

      case constants.COPY_LAST: {
         let updatedList = [...state.data];
         let firstElement = updatedList.slice(updatedList.indexOf(updatedList[0]));

         if (updatedList.length) {
            updatedList.push(firstElement[0]);
         }

         return state = {...state, data: updatedList };
      }

      case constants.REMOVE_ELEMENT: {
         let updatedList = [...state.data];
         updatedList.splice(action.payload, 1);

         return state = {...state, data: updatedList };
      }

      case constants.VIEW_LIST: {
         return state = {...state,
            viewList: true,
            viewCard: false
         };
      }

      case constants.VIEW_CARD: {
         return state = {...state,
            viewList: false,
            viewCard: true
         };
      }

      default:
         return state;
   }
}

