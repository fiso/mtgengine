"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientCravingBase = require("../setC15/AncientCraving.js");

class AncientCraving extends AncientCravingBase {
  constructor(game) {
    super(game, "Ancient Craving", "Starter 1999", "S99");
  }
}

module.exports = AncientCraving;
