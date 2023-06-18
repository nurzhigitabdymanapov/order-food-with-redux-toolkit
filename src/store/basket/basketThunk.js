import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRequest } from "../../lib/fetchAPI";
import { snackbarActions } from "../snackbar";

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRequest("/basket");
      return response.items;
    } catch (error) {
      return rejectWithValue(
        error?.response?.message || "Something went wrong!"
      );
    }
  }
);

export const addItem = createAsyncThunk(
  "basket/addItem",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchRequest(`/foods/${payload.id}/addToBasket`, {
        method: "POST",
        body: { amount: payload.amount },
      });

      dispatch(getBasket());
      // payload.succesHandler();
      return await response.items;
    } catch (error) {
      // payload.errorHandler();
      return rejectWithValue(error);
    }
  }
);

// export const incrementFood = (id, amount) => {
//   return async (dispatch) => {
//     try {
//       const response = await fetchRequest(`/basketItem/${id}/update`, {
//         method: "PUT",
//         body: { amount: amount + 1 },
//       });

//       dispatch(getBasket());

//       return await response.items;
//     } catch (error) {
//       new Error(error);
//     }
//   };
// };

export const incrementFood = createAsyncThunk(
  "basket/increment",
  async (payload, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetchRequest(`/basketItem/${payload.id}/update`, {
        method: "PUT",
        body: { amount: payload.amount + 1 },
      });
      dispatch(getBasket());
      return await response;
    } catch (error) {
      rejectWithValue(error?.response?.message || "Something went wrong!");
    }
  }
);

// export const decrementFood = (id, amount) => {
//   return async (dispatch) => {
//     if (amount !== 0) {
//       try {
//         const response = await fetchRequest(`/basketItem/${id}/update`, {
//           method: "PUT",
//           body: { amount: amount },
//         });

//         dispatch(getBasket());

//         return await response.items;
//       } catch (error) {
//         new Error(error);
//       }
//     } else {
//       try {
//         const response = await fetchRequest(`/basketItem/${id}/delete`, {
//           method: "DELETE",
//         });

//         dispatch(getBasket());

//         return await response.items;
//       } catch (error) {
//         new Error(error);
//       }
//     }
//   };
// };
export const decrementFood = createAsyncThunk(
  "basket/decrement",
  async (payload, { rejectWithValue, dispatch }) => {
    if (payload.amount !== 0) {
      try {
        const response = await fetchRequest(
          `/basketItem/${payload.id}/update`,
          {
            method: "PUT",
            body: { amount: payload.amount },
          }
        );
        dispatch(getBasket());
        return await response;
      } catch (error) {
        rejectWithValue(error?.response?.message || "Something went wrong!");
      }
    } else {
      try {
        const response = await fetchRequest(
          `/basketItem/${payload.id}/delete`,
          {
            method: "DELETE",
          }
        );
        dispatch(snackbarActions.deleteItemBasket());
        dispatch(getBasket());
        return await response;
      } catch (error) {
        dispatch(snackbarActions.doError(error));
        rejectWithValue(error?.response?.message || "Something went wrong!");
      }
    }
  }
);
