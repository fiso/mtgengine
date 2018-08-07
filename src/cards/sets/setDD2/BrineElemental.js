"use strict";
const Constants = require ("../../../Constants");
const BrineElementalBase = require("../setA25/BrineElemental");

class BrineElemental extends BrineElementalBase {
  constructor (game) {
    super(game, "Brine Elemental", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = BrineElemental;
