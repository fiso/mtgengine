"use strict";
const Constants = require ("../../../Constants");
const FireElementalBase = require("../set6ED/FireElemental");

class FireElemental extends FireElementalBase {
  constructor (game) {
    super(game, "Fire Elemental", "Seventh Edition", "7ED");
  }
}

module.exports = FireElemental;
