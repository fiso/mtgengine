"use strict";
const Constants = require ("../../../Constants");
const GleamofResistanceBase = require("../setCON/GleamofResistance");

class GleamofResistance extends GleamofResistanceBase {
  constructor(game) {
    super(game, "Gleam of Resistance", "Modern Masters", "MMA");
  }
}

module.exports = GleamofResistance;
