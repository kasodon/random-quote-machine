import { FETCH_QUOTES, NEW_QUOTE } from '../constants';

const initialState = {
  loading: true,
  error: false,
  data: [],
  randomNumber: '',
  colors: [
    '#ccffff',
    '#ff99ff',
    '#ff3300',
    '#99cc00',
    '#666633',
    '#0033cc',
    '#669999',
    '#00ff00',
    '#ffff99',
    '#ff9966',
    '#0000ff',
    '#660066',
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case NEW_QUOTE:
      return {
        ...state,
        randomNumber: action.payload,
      };
    default:
      return state;
  }
}
