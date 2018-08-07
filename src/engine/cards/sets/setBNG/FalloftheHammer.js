"use strict";
const Constants = require ("../../../Constants");
const FalloftheHammerBase = require("../setCM2/FalloftheHammer");

class FalloftheHammer extends FalloftheHammerBase {
  constructor (game) {
    super(game, "Fall of the Hammer", "Born of the Gods", "BNG");
  }
}

module.exports = FalloftheHammer;
