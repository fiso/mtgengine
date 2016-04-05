"use strict";
const Constants = require ("../../../Constants");
const UlamogtheInfiniteGyreBase = require("../setV11/UlamogtheInfiniteGyre");

class UlamogtheInfiniteGyre extends UlamogtheInfiniteGyreBase {
  constructor(game) {
    super(game, "Ulamog, the Infinite Gyre", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UlamogtheInfiniteGyre;
