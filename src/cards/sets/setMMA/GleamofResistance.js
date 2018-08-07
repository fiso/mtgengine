"use strict";
const Constants = require ("../../../Constants");
const GleamofResistanceBase = require("../setCN2/GleamofResistance");

class GleamofResistance extends GleamofResistanceBase {
  constructor (game) {
    super(game, "Gleam of Resistance", "Modern Masters", "MMA");
  }
}

module.exports = GleamofResistance;
