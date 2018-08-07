"use strict";
const Constants = require ("../../../Constants");
const FalloftheHammerBase = require("../setCM2/FalloftheHammer");

class FalloftheHammer extends FalloftheHammerBase {
  constructor (game) {
    super(game, "Fall of the Hammer", "Commander 2015", "C15");
  }
}

module.exports = FalloftheHammer;
