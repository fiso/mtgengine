"use strict";
const Constants = require ("../../../Constants");
const SeersSundialBase = require("../setC13/SeersSundial");

class SeersSundial extends SeersSundialBase {
  constructor (game) {
    super(game, "Seer's Sundial", "Worldwake", "WWK");
  }
}

module.exports = SeersSundial;
