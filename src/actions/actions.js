import * as constants from '../constants/actions';
import loadData from '../../data.json'

function init() {
   let data = {
      type: constants.INIT,
      payload: loadData
   };
   return data;
}

function copyFirst(id) {
   let action = {
      type: constants.COPY_FIRST,
      payload: id
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
   init,
   copyFirst,
   copyLast,
   removeFirst,
   removeLast,
   viewList,
   viewCard
}
