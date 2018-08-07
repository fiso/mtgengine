"use strict";
const Constants = require ("../../../Constants");
const WhisperingMadnessBase = require("../setC16/WhisperingMadness");

class WhisperingMadness extends WhisperingMadnessBase {
  constructor (game) {
    super(game, "Whispering Madness", "Gatecrash", "GTC");
  }
}

module.exports = WhisperingMadness;
