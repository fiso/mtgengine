"use strict";
const Constants = require ("../../../Constants");
const WickedPactBase = require("../setME4/WickedPact");

class WickedPact extends WickedPactBase {
  constructor(game) {
    super(game, "Wicked Pact", "Portal", "POR");
  }
}

module.exports = WickedPact;
