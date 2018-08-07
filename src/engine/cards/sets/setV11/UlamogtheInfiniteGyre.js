"use strict";
const Constants = require ("../../../Constants");
const UlamogtheInfiniteGyreBase = require("../setMM2/UlamogtheInfiniteGyre");

class UlamogtheInfiniteGyre extends UlamogtheInfiniteGyreBase {
  constructor (game) {
    super(game, "Ulamog, the Infinite Gyre", "From the Vault: Legends", "V11");
  }
}

module.exports = UlamogtheInfiniteGyre;
