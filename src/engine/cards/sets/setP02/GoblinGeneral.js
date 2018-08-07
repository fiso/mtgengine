"use strict";
const Constants = require ("../../../Constants");
const GoblinGeneralBase = require("../setVMA/GoblinGeneral");

class GoblinGeneral extends GoblinGeneralBase {
  constructor (game) {
    super(game, "Goblin General", "Portal Second Age", "P02");
  }
}

module.exports = GoblinGeneral;
