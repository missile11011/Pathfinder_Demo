import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider} from 'react-redux';
import store from "./utils/store";

test('app and redux store provider', () => {
  render(<Provider store={store}><App /></Provider>);
  const linkElement = screen.getByText(/Pathfinder/i);
  expect(linkElement).toBeInTheDocument();
});