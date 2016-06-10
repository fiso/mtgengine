"use strict";
const Constants = require ("../../../Constants");
const FrostGiantBase = require("../setLEG/FrostGiant");

class FrostGiant extends FrostGiantBase {
  constructor (game) {
    super(game, "Frost Giant", "Masters Edition III", "ME3");
  }
}

module.exports = FrostGiant;
