export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const REMOVE_ALL_FROM_WISHLIST = "REMOVE_ALL_FROM_WISHLIST";

// add to wishlist
export const addToWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Added To Wishlist", {
        appearance: "success",
        autoDismiss: true
      });
    }
    dispatch({ type: ADD_TO_WISHLIST, payload: item });
  };
};

// remove from wishlist
export const removeFromWishlist = (item, addToast) => {
  return dispatch => {
    if (addToast) {
      addToast("Removed From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: item });
  };
};

//remove all from wishlist
export const removeAllFromWishlist = addToast => {
  return dispatch => {
    if (addToast) {
      addToast("Removed All From Wishlist", {
        appearance: "error",
        autoDismiss: true
      });
    }
    dispatch({ type: REMOVE_ALL_FROM_WISHLIST });
  };
};
