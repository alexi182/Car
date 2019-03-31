import * as constants from '../constants/actions';

const copyFirst = () => ({
   type: constants.COPY_FIRST,
});

const copyLast = () => ({
   type: constants.COPY_LAST,
});

const removeElement = (id) => ({
   type: constants.REMOVE_ELEMENT,
   payload: id
})

const viewList = () => ({
   type: constants.VIEW_LIST
})

const viewCard = () => ({
   type: constants.VIEW_CARD
})

export {
   copyFirst,
   copyLast,
   removeElement,
   viewList,
   viewCard
}
