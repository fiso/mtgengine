"use strict";
const Constants = require ("../../../Constants");
const TempleAcolyteBase = require("../setDDF/TempleAcolyte");

class TempleAcolyte extends TempleAcolyteBase {
  constructor (game) {
    super(game, "Temple Acolyte", "Masters Edition IV", "ME4");
  }
}

module.exports = TempleAcolyte;
