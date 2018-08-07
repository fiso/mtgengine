"use strict";
const Constants = require ("../../../Constants");
const GoblinGeneralBase = require("../setVMA/GoblinGeneral");

class GoblinGeneral extends GoblinGeneralBase {
  constructor (game) {
    super(game, "Goblin General", "Starter 1999", "S99");
  }
}

module.exports = GoblinGeneral;
