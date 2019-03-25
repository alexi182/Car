import * as constants from '../constants/actions';

function copyFirst() {
   let action = {
      type: constants.COPY_FIRST,
      payload: ''
   };
   return action;
}

function copyLast(id) {
   let action = {
      type: constants.COPY_LAST,
      payload: id
   };
   return action;
}

function removeFirst(id) {
   let action = {
      type: constants.REMOVE_FIRST,
      payload: id
   };
   return action;
}

function removeLast(id) {
   let action = {
      type: constants.REMOVE_LAST,
      payload: id
   };
   return action;
}

function viewList() {
   let action = {
      type: constants.VIEW_LIST,
      payload: ''
   };
   return action;
}

function viewCard() {
   let action = {
      type: constants.VIEW_CARD,
      payload: ''
   };
   return action;
}

export {
   copyFirst,
   copyLast,
   removeFirst,
   removeLast,
   viewList,
   viewCard
}
