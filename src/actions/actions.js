import * as constants from '../constants/actions';

function copyFirst() {
   let action = {
      type: constants.COPY_FIRST,
   };
   return action;
}

function copyLast() {
   let action = {
      type: constants.COPY_LAST,
   };
   return action;
}

function removeFirst() {
   let action = {
      type: constants.REMOVE_FIRST,
   };
   return action;
}

function removeLast() {
   let action = {
      type: constants.REMOVE_LAST,
   };
   return action;
}

function viewList() {
   let action = {
      type: constants.VIEW_LIST,
   };
   return action;
}

function viewCard() {
   let action = {
      type: constants.VIEW_CARD,
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
