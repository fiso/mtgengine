"use strict";
const Constants = require ("../../../Constants");
const HellsparkElementalBase = require("../setCON/HellsparkElemental");

class HellsparkElemental extends HellsparkElementalBase {
  constructor (game) {
    super(game, "Hellspark Elemental", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = HellsparkElemental;
