"use strict";
const Constants = require ("../../../Constants");
const HermitDruidBase = require("../setTPR/HermitDruid");

class HermitDruid extends HermitDruidBase {
  constructor (game) {
    super(game, "Hermit Druid", "Stronghold", "STH");
  }
}

module.exports = HermitDruid;
