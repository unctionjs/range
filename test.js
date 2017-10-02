/* eslint-disable no-magic-numbers */
import {test} from "tap"
import equals from "@unction/equals"

import range from "./index"

test(({equal, end}) => {
  equal(
    range(0)(0),
    0
  )

  end()
})

test(({equal, end}) => {
  equal(
    range(1)(1),
    1
  )

  end()
})

test(({ok, end}) => {
  const value = range(0)(1)

  ok(
    equals(0)(value) || equals(1)(value)
  )

  end()
})


test(({notEqual, end}) => {
  notEqual(
    range(0)(100),
    101
  )

  end()
})


test(({throws, end}) => {
  throws(
    () => range(1)(0)
  )

  end()
})
