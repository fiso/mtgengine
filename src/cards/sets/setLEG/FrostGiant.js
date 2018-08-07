"use strict";
const Constants = require ("../../../Constants");
const FrostGiantBase = require("../setME3/FrostGiant");

class FrostGiant extends FrostGiantBase {
  constructor (game) {
    super(game, "Frost Giant", "Legends", "LEG");
  }
}

module.exports = FrostGiant;
