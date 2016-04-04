"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PrecursorGolemBase = require("../setMM2/PrecursorGolem.js");

class PrecursorGolem extends PrecursorGolemBase {
  constructor(game) {
    super(game, "Precursor Golem", "Scars of Mirrodin", "SOM");
  }
}

module.exports = PrecursorGolem;
