"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientCravingBase = require("../setC15/AncientCraving.js");

class AncientCraving extends AncientCravingBase {
  constructor(game) {
    super(game, "Ancient Craving", "Portal Second Age", "PO2");
  }
}

module.exports = AncientCraving;
