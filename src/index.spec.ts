import { leapYear } from ".";

describe("Test of leapYear()", function () {

  it("2021 isn't a leap year", function () {
    expect(leapYear(2021)).toEqual(false);
  });

  it("2020 is a leap year", function () {
    expect(leapYear(2020)).toEqual(true);
  });

  it("2024 is a leap year", function () {
    expect(leapYear(2024)).toEqual(true);
  });

  it("1900 isn't a leap year", function () {
    expect(leapYear(1900)).toEqual(false);
  });

  it("2100 isn't a leap year", function () {
    expect(leapYear(2100)).toEqual(false);
  });

  it("2000 i a leap year", function () {
    expect(leapYear(2000)).toEqual(true);
  });

  it("1600 i a leap year", function () {
    expect(leapYear(1600)).toEqual(true);
  });



});
