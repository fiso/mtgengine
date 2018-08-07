"use strict";
const Constants = require ("../../../Constants");
const FireElementalBase = require("../setM19/FireElemental");

class FireElemental extends FireElementalBase {
  constructor (game) {
    super(game, "Fire Elemental", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = FireElemental;
