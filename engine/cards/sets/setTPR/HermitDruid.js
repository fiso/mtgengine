"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HermitDruidBase = require("../setpJGP/HermitDruid.js");

class HermitDruid extends HermitDruidBase {
  constructor(game) {
    super(game, "Hermit Druid", "Tempest Remastered", "TPR");
  }
}

module.exports = HermitDruid;
