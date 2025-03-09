import { configureStore, createSlice } from '@reduxjs/toolkit';

// Слайс для хранения выбранного монумента
const monumentSlice = createSlice({
  name: 'monument',
  initialState: null,
  reducers: {
    selectMonument: (state, action) => {
      return action.payload; // Сохраняем выбранный монумент
    },
  },
});

export const { selectMonument } = monumentSlice.actions;

// Создаем хранилище
const store = configureStore({
  reducer: {
    monument: monumentSlice.reducer,
  },
});

export default store;