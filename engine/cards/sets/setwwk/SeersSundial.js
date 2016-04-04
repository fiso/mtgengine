"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeersSundialBase = require("../setC13/SeersSundial.js");

class SeersSundial extends SeersSundialBase {
  constructor(game) {
    super(game, "Seer's Sundial", "Worldwake", "WWK");
  }
}

module.exports = SeersSundial;
