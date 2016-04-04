"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SilvergladeElementalBase = require("../setMMQ/SilvergladeElemental.js");

class SilvergladeElemental extends SilvergladeElementalBase {
  constructor(game) {
    super(game, "Silverglade Elemental", "Planechase", "HOP");
  }
}

module.exports = SilvergladeElemental;
