"use strict";
const Constants = require ("../../../Constants");
const SeersSundialBase = require("../setC18/SeersSundial");

class SeersSundial extends SeersSundialBase {
  constructor (game) {
    super(game, "Seer's Sundial", "Commander 2013", "C13");
  }
}

module.exports = SeersSundial;
