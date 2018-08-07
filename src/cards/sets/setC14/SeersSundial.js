"use strict";
const Constants = require ("../../../Constants");
const SeersSundialBase = require("../setC18/SeersSundial");

class SeersSundial extends SeersSundialBase {
  constructor (game) {
    super(game, "Seer's Sundial", "Commander 2014", "C14");
  }
}

module.exports = SeersSundial;
