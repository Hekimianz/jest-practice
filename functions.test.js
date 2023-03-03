/* eslint-disable no-undef */
import {
  reverseString,
  capitalize,
  calculator,
  ceasarCypher,
  analyzeArray,
} from "./functions";

test("capitalize: one letter string", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("capitalize: multi letter string", () => {
  expect(capitalize("hello world!")).toMatch("Hello world!");
});

test("reverse: one letter string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("reverse: two letter string", () => {
  expect(reverseString("hello world!")).toMatch("!dlrow olleh");
});

test("calculator: add two positive numbers", () => {
  expect(calculator.add(10, 20)).toBe(30);
});

test("calculator: add two negative numbers", () => {
  expect(calculator.add(-20, 10)).toBe(-10);
});

test("calculator: subtract two positive numbers", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("calculator: subtract two negative numbers", () => {
  expect(calculator.subtract(-10, -5)).toBe(-5);
});

test("calculator: divide with positive numbers", () => {
  expect(calculator.divide(200, 2)).toBe(100);
});

test("calculator: divide with negative numbers", () => {
  expect(calculator.divide(-200, 2)).toBe(-100);
});

test("calculator: muliply with positive numbers", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("calculator: muliply with negative numbers", () => {
  expect(calculator.multiply(5, -3)).toBe(-15);
});

test("ceasar cipher: one letter string", () => {
  expect(ceasarCypher("hello")).toBe("ifmmp");
});

test("ceasar cipher: multi letter string", () => {
  expect(ceasarCypher("hello world")).toBe("ifmmp xpsme");
});

test("ceasar cipher: ignore punctuation", () => {
  expect(ceasarCypher("hello, world!")).toBe("ifmmp, xpsme!");
});

test("ceasar cipher: not case sensitive", () => {
  expect(ceasarCypher("Hello, World!")).toBe("ifmmp, xpsme!");
});

test("analyzeArray: return correct data", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
