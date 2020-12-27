import { leapYear } from ".";

describe("Test of leapYear()", function () {

  it("2000 is a leap year", function () {
    expect(leapYear(2000)).toEqual(true);
  });

  it("1900 is not a leap year", function () {
    expect(leapYear(1900)).toEqual(false);
  });

  it("2020 is a leap year", function () {
    expect(leapYear(2020)).toEqual(true);
  });

  it("2011 is not a leap year", function () {
    expect(leapYear(2011)).toEqual(false);
  });

});
