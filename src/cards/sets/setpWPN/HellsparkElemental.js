"use strict";
const Constants = require ("../../../Constants");
const HellsparkElementalBase = require("../setCON/HellsparkElemental");

class HellsparkElemental extends HellsparkElementalBase {
  constructor (game) {
    super(game, "Hellspark Elemental", "WPN and Gateway", "pWPN");
  }
}

module.exports = HellsparkElemental;
