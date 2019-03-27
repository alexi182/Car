import * as constants from '../constants/actions';

/*
const init = () => ({
   type: constants.INIT,
});
*/

const copyFirst = () => ({
   type: constants.COPY_FIRST,
});

const copyLast = () => ({
   type: constants.COPY_LAST,
});

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
   /*init,*/
   copyFirst,
   copyLast,
   removeFirst,
   removeLast,
   viewList,
   viewCard
}
