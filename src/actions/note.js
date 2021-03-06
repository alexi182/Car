import * as constants from '../constants/form';

function add(val) {
   return {
      type: constants.ADD,
      payload: val
   };
}

function complete(id) {
   return {
      type: constants.COMPLETE,
      payload: id
   };
}

function remove(id) {
   return {
      type: constants.REMOVE,
      payload: id
   };
}

export { add,complete,remove }
