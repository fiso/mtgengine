"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinGeneralBase = require("../setME4/GoblinGeneral.js");

class GoblinGeneral extends GoblinGeneralBase {
  constructor(game) {
    super(game, "Goblin General", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinGeneral;
