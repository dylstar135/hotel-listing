import React from "react";
import { render, fireEvent } from "@testing-library/react";
import HotelSorter from "../components/HotelSorter";

test("clicking on sort options should call handleSortChange with correct sortType", () => {
  const handleSortChange = jest.fn();
  const { getByText } = render(
    <HotelSorter handleSortChange={handleSortChange} />
  );

  fireEvent.click(getByText(/alphabetically/i));
  expect(handleSortChange).toHaveBeenCalledWith("alphabetically");

  fireEvent.click(getByText(/price/i));
  expect(handleSortChange).toHaveBeenCalledWith("price");

  fireEvent.click(getByText(/rating/i));
  expect(handleSortChange).toHaveBeenCalledWith("rating");
});
