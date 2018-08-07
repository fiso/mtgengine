"use strict";
const Constants = require ("../../../Constants");
const SilvergladeElementalBase = require("../setHOP/SilvergladeElemental");

class SilvergladeElemental extends SilvergladeElementalBase {
  constructor (game) {
    super(game, "Silverglade Elemental", "Mercadian Masques", "MMQ");
  }
}

module.exports = SilvergladeElemental;
