"use strict";
const Constants = require ("../../../Constants");
const FireElementalBase = require("../setM19/FireElemental");

class FireElemental extends FireElementalBase {
  constructor (game) {
    super(game, "Fire Elemental", "Limited Edition Beta", "LEB");
  }
}

module.exports = FireElemental;
