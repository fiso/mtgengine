"use strict";
const Constants = require ("../../../Constants");
const HermitDruidBase = require("../setpJGP/HermitDruid");

class HermitDruid extends HermitDruidBase {
  constructor(game) {
    super(game, "Hermit Druid", "Tempest Remastered", "TPR");
  }
}

module.exports = HermitDruid;
