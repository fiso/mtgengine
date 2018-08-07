"use strict";
const Constants = require ("../../../Constants");
const GleamofResistanceBase = require("../setCN2/GleamofResistance");

class GleamofResistance extends GleamofResistanceBase {
  constructor (game) {
    super(game, "Gleam of Resistance", "Conflux", "CON");
  }
}

module.exports = GleamofResistance;
