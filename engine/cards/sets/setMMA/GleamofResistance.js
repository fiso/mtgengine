"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GleamofResistanceBase = require("../setCON/GleamofResistance.js");

class GleamofResistance extends GleamofResistanceBase {
  constructor(game) {
    super(game, "Gleam of Resistance", "Modern Masters", "MMA");
  }
}

module.exports = GleamofResistance;
