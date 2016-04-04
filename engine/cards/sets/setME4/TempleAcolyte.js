"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempleAcolyteBase = require("../setDDF/TempleAcolyte.js");

class TempleAcolyte extends TempleAcolyteBase {
  constructor(game) {
    super(game, "Temple Acolyte", "Masters Edition IV", "ME4");
  }
}

module.exports = TempleAcolyte;
