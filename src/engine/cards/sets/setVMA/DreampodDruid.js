"use strict";
const Constants = require ("../../../Constants");
const DreampodDruidBase = require("../setPCA/DreampodDruid");

class DreampodDruid extends DreampodDruidBase {
  constructor (game) {
    super(game, "Dreampod Druid", "Vintage Masters", "VMA");
  }
}

module.exports = DreampodDruid;
