"use strict";
const Constants = require ("../../../Constants");
const ThornElementalBase = require("../set8ED/ThornElemental");

class ThornElemental extends ThornElementalBase {
  constructor (game) {
    super(game, "Thorn Elemental", "Seventh Edition", "7ED");
  }
}

module.exports = ThornElemental;
