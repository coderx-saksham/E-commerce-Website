import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/loading/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("checkdiv", () => {
    const {queryByTitle} = render(<App/>);
    const maindiv = queryByTitle("testdiv");
    expect(maindiv).toBeTruthy();
  })

  it("check-left-div", () => {
    const {queryByTitle} = render(<App/>);
    const leftdiv = queryByTitle("test-left-div");
    expect(leftdiv).toBeTruthy();
  })
  
  it("check-right-div", () => {
    const {queryByTitle} = render(<App/>);
    const rightdiv = queryByTitle("test-right-div");
    expect(rightdiv).toBeTruthy();
  })