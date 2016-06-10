"use strict";
const Constants = require ("../../../Constants");
const SilvergladeElementalBase = require("../setMMQ/SilvergladeElemental");

class SilvergladeElemental extends SilvergladeElementalBase {
  constructor (game) {
    super(game, "Silverglade Elemental", "Planechase", "HOP");
  }
}

module.exports = SilvergladeElemental;
