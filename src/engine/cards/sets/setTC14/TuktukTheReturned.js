"use strict";
const Constants = require ("../../../Constants");
const TuktukTheReturnedBase = require("../setTCM2/TuktukTheReturned");

class TuktukTheReturned extends TuktukTheReturnedBase {
  constructor (game) {
    super(game, "Tuktuk The Returned", "Commander 2014 Tokens", "TC14");
  }
}

module.exports = TuktukTheReturned;
