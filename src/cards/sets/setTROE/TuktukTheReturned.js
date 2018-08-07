"use strict";
const Constants = require ("../../../Constants");
const TuktukTheReturnedBase = require("../setTCM2/TuktukTheReturned");

class TuktukTheReturned extends TuktukTheReturnedBase {
  constructor (game) {
    super(game, "Tuktuk The Returned", "Rise of the Eldrazi Tokens", "TROE");
  }
}

module.exports = TuktukTheReturned;
