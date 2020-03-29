import { FETCH_QUOTES, NEW_QUOTE } from '../constants';

export const fetchQuotes = () => dispatch => {
  fetch(
    'https://gist.githubusercontent.com/kasodon/089a8b53a2137aa250b83070f2c27863/raw/734b3fa1e9387d92294fb32302a1a043732ad000/quotes.json'
  )
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      console.log('ok');
      return response.json();
    })
    .then(data => {
      //   this.setState({ loading: false, error: false, posts: data });
      dispatch({ type: FETCH_QUOTES, payload: data.quotes });
    })
    .catch(error => {
      console.log(error);
      //   this.setState({ loading: false, error: true });
    });
};

export const newQuote = randomNo => ({
  type: NEW_QUOTE,
  payload: randomNo,
});
