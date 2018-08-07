"use strict";
const Constants = require ("../../../Constants");
const ThornElementalBase = require("../setDOM/ThornElemental");

class ThornElemental extends ThornElementalBase {
  constructor (game) {
    super(game, "Thorn Elemental", "Eighth Edition", "8ED");
  }
}

module.exports = ThornElemental;
