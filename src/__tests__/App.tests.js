import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("sorting hotels alphabetically", () => {
  const { getByText, getAllByRole } = render(<App />);
  fireEvent.click(getByText(/sort alphabetically/));
  const hotelNames = getAllByRole("heading", { level: 2 }).map(
    (h) => h.textContent
  );
  expect(hotelNames).toEqual(hotelNames.slice().sort());
});

test("sorting hotels by price", () => {
  const { getByText, getAllByText } = render(<App />);
  fireEvent.click(getByText(/sort by price/));
  const hotelPrices = getAllByText(/£\d+(\.\d+)?/).map((p) =>
    parseFloat(p.textContent.replace("£", "").replace(",", ""))
  );
  expect(hotelPrices).toEqual(hotelPrices.slice().sort((a, b) => a - b));
});

//test("sorting hotels by rating", () => {
// const { getByText, getAllByText } = render(<App />);
// fireEvent.click(getByText(/sort by rating/));
//const hotelRatings = getAllByText(/\*+/).map((r) => r.textContent.length);
//expect(hotelRatings).toEqual(hotelRatings.slice().sort((a, b) => b - a));
//});
