/* eslint-disable no-magic-numbers */

import greaterThan from "@unction/greaterthan"
import equals from "@unction/equals"
import type {UnaryFunctionType} from "types"
import type {NumberType} from "types"

export default function range (minimum: NumberType): UnaryFunctionType {
  return function rangeMinimum (maximum: NumberType): NumberType {
    if (greaterThan(minimum)(maximum)) {
      throw new Error("minimum can't be greater than maximum")
    }

    if (equals(minimum)(maximum)) {
      return minimum
    }

    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
  }
}
