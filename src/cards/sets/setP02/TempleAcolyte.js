"use strict";
const Constants = require ("../../../Constants");
const TempleAcolyteBase = require("../setME4/TempleAcolyte");

class TempleAcolyte extends TempleAcolyteBase {
  constructor (game) {
    super(game, "Temple Acolyte", "Portal Second Age", "P02");
  }
}

module.exports = TempleAcolyte;
