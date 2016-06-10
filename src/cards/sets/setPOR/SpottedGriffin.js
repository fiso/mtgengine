"use strict";
const Constants = require ("../../../Constants");
const SpottedGriffinBase = require("../setME4/SpottedGriffin");

class SpottedGriffin extends SpottedGriffinBase {
  constructor (game) {
    super(game, "Spotted Griffin", "Portal", "POR");
  }
}

module.exports = SpottedGriffin;
