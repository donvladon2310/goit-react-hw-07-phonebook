
import Phonebook from './modules/Phonebook/Phonebook';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-07-phonebook">
        <Phonebook />
      </BrowserRouter>
    </Provider>
  );
};
