"use strict";
const Constants = require ("../../../Constants");
const ArmorofThornsBase = require("../setVMA/ArmorofThorns");

class ArmorofThorns extends ArmorofThornsBase {
  constructor (game) {
    super(game, "Armor of Thorns", "Mirage", "MIR");
  }
}

module.exports = ArmorofThorns;
