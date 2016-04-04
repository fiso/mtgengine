"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TempleAcolyteBase = require("../setDDF/TempleAcolyte.js");

class TempleAcolyte extends TempleAcolyteBase {
  constructor(game) {
    super(game, "Temple Acolyte", "Portal Second Age", "PO2");
  }
}

module.exports = TempleAcolyte;
