import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("Test Cases", () => {
  test("just test", () => {
    render(<LoginForm />);

    const userid: HTMLElement = screen.getByTestId("userid");
    const signin: HTMLElement = screen.getByTestId("signin");

    fireEvent.change(userid, { target: { value: "kishore" } });
    fireEvent.click(signin, { target: { value: "done" } });
    // expect(userid.value).toBe("kishore");
    // expect(signin.value).toBe("done");
  });
});
