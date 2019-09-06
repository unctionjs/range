/* eslint-disable no-magic-numbers */
import equals from "@unction/equals";

import range from "./index.ts";

test(() => {
  expect(range(0)(0)).toBe(0);
});

test(() => {
  expect(range(1)(1)).toBe(1);
});

test(() => {
  const value = range(0)(1);

  expect(equals(0)(value) || equals(1)(value)).toBeTruthy();
});


test(() => {
  expect(range(0)(100)).not.toBe(101);
});


test(() => {
  expect(() => range(1)(0)).toThrow();
});
