"use strict";
const Constants = require ("../../../Constants");
const HermitDruidBase = require("../setTPR/HermitDruid");

class HermitDruid extends HermitDruidBase {
  constructor (game) {
    super(game, "Hermit Druid", "Judge Gift Cards 2004", "G04");
  }
}

module.exports = HermitDruid;
