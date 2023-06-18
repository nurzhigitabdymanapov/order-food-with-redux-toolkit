import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  severity: "",
  message: "",
  open: false,
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    doSuccess(state) {
      state.severity = "success";
      state.message = "Вы добавили блюдо в корзину.";
      state.open = true;
    },
    doError(state) {
      state.severity = "error";
      state.message = "Произошло ошибка, пожалуйста подождите!";
      state.open = true;
    },
    closeSnackbar(state) {
      state.open = false;
    },
    incrementSucces(state) {
      state.severity = "success";
      state.message = "Вы добавили одно блюдо!";
      state.open = true;
    },
    decrementSnackbar(state) {
      state.severity = "warning";
      state.message = "Вы удалили одно блюдо!";
      state.open = true;
    },
    deleteItemBasket(state) {
      state.severity = "warning";
      state.message =
        "Вы удалили продукт, можете еще добавить это блюдо на главной странице.";
      state.open = true;
    },
  },
});
export const snackbarActions = snackbarSlice.actions;
