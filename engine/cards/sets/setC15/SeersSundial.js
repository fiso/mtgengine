"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeersSundialBase = require("../setC13/SeersSundial.js");

class SeersSundial extends SeersSundialBase {
  constructor(game) {
    super(game, "Seer's Sundial", "Commander 2015", "C15");
  }
}

module.exports = SeersSundial;
