"use strict";
const Constants = require ("../../../Constants");
const FireElementalBase = require("../set6ED/FireElemental");

class FireElemental extends FireElementalBase {
  constructor(game) {
    super(game, "Fire Elemental", "Starter 1999", "S99");
  }
}

module.exports = FireElemental;
