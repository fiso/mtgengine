"use strict";
const Constants = require ("../../../Constants");
const GoblinGeneralBase = require("../setVMA/GoblinGeneral");

class GoblinGeneral extends GoblinGeneralBase {
  constructor (game) {
    super(game, "Goblin General", "Masters Edition IV", "ME4");
  }
}

module.exports = GoblinGeneral;
