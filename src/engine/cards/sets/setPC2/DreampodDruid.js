"use strict";
const Constants = require ("../../../Constants");
const DreampodDruidBase = require("../setPCA/DreampodDruid");

class DreampodDruid extends DreampodDruidBase {
  constructor (game) {
    super(game, "Dreampod Druid", "Planechase 2012", "PC2");
  }
}

module.exports = DreampodDruid;
