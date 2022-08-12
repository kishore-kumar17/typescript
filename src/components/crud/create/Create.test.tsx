import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import "./Create";
import Create from "./Create";

const middlewares = [thunk];
const store = configureStore({
  reducer: {},
  middleware: middlewares,
});

describe("<Create />", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Provider store={store}>
        <Router>
          <Create />
        </Router>
      </Provider>
    );
  });

  it("just-tested", () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const name: HTMLInputElement = screen.getByTestId("name");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const fathername: HTMLInputElement = screen.getByTestId("fathername");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const adharnumber: HTMLInputElement = screen.getByTestId("adharnumber");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const mobilenumber: HTMLInputElement = screen.getByTestId("mobilenumber");
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const dob: HTMLInputElement = screen.getByTestId("dob");

    fireEvent.change(name, { target: { value: "kishore" } });
    fireEvent.change(fathername, { target: { value: "kumar" } });
    fireEvent.change(adharnumber, { target: { value: "1212 1212 1212" } });
    fireEvent.change(mobilenumber, { target: { value: "1234567890" } });
    fireEvent.change(dob, { target: { value: "12.12.1994" } });

    expect(name.value).toBe("kishore");
    expect(fathername.value).toBe("kumar");
    expect(adharnumber.value).toBe("1212 1212 1212");
    expect(mobilenumber.value).toBe("1234567890");
    expect(dob.value).toBe("12.12.1994");
  });
});
