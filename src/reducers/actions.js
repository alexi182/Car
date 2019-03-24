import * as constants from '../constants/actions';

export default function actionReducers(state = { data: [] }, action) {

   switch (action.type) {

      case constants.INIT: {
         state = { ...state, data: action.payload }
         break;
      }

      // case constants.SEARCH: {
      //
      //    let val = action.payload.toLowerCase();
      //    let people;
      //
      //    if (val.length > 0) {
      //       people = state._people.filter((p) =>
      //           p.name.toLowerCase().indexOf(val) !== -1 ||
      //           p.surname.toLowerCase().indexOf(val) !== -1 ||
      //           p.age.toString().toLowerCase().indexOf(val) !== -1 )
      //    } else {
      //       people = state._people;
      //    }
      //
      //    state = { ...state, people };  ///...state - берём старый state(который в начале задане)
      //    break;
      // }

      default:
         return state;
   }
   return state;
}

