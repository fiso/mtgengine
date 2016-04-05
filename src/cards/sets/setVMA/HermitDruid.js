"use strict";
const Constants = require ("../../../Constants");
const HermitDruidBase = require("../setpJGP/HermitDruid");

class HermitDruid extends HermitDruidBase {
  constructor(game) {
    super(game, "Hermit Druid", "Vintage Masters", "VMA");
  }
}

module.exports = HermitDruid;
