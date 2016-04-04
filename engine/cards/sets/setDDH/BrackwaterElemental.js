"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BrackwaterElementalBase = require("../setCON/BrackwaterElemental.js");

class BrackwaterElemental extends BrackwaterElementalBase {
  constructor(game) {
    super(game, "Brackwater Elemental", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = BrackwaterElemental;
