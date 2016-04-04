"use strict";
const Constants = require ("../../../Constants");
const GoblinGeneralBase = require("../setME4/GoblinGeneral");

class GoblinGeneral extends GoblinGeneralBase {
  constructor(game) {
    super(game, "Goblin General", "Vintage Masters", "VMA");
  }
}

module.exports = GoblinGeneral;
