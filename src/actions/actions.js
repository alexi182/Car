import * as constants from '../constants/actions';

const copyFirst = () => ({
   type: constants.COPY_FIRST,
});

const copyLast = () => ({
   type: constants.COPY_LAST,
});

const removeFirst = (id) => ({
   type: constants.REMOVE_FIRST,
   payload: id
})

const removeLast = (id) => ( {
   type: constants.REMOVE_LAST,
   payload: id
})

function viewList(id) {
   let action = {
      type: constants.VIEW_LIST,
      payload: id
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
