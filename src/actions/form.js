import * as constants from '../constants/form';

const addPost = () => ({
   type: constants.ADD_POST,
   payload: {
      id,
      name,
      point,
      text
   }
});

export {
   addPost
}
