"use strict";
const Constants = require ("../../../Constants");
const MassofGhoulsBase = require("../set10E/MassofGhouls");

class MassofGhouls extends MassofGhoulsBase {
  constructor (game) {
    super(game, "Mass of Ghouls", "Future Sight", "FUT");
  }
}

module.exports = MassofGhouls;
