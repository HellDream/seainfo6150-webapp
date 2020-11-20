import React from "react";
import ArticleImage from "./ArticleImage";

describe("ArticleImage tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleImage url="http://www.123.com" title="hello" />);
    expect(container).toMatchSnapshot();
  });
});
