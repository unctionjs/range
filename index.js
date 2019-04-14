/* eslint-disable no-magic-numbers */
import greaterThan from "@unction/greaterthan";
import equals from "@unction/equals";
export default function range (minimum) {
  return function rangeMinimum (maximum) {
    if (greaterThan(minimum)(maximum)) {
      throw new Error("minimum can't be greater than maximum");
    }

    if (equals(minimum)(maximum)) {
      return minimum;
    }

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  };
}
