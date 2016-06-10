"use strict";
const Constants = require ("../../../Constants");
const HellsparkElementalBase = require("../setCON/HellsparkElemental");

class HellsparkElemental extends HellsparkElementalBase {
  constructor (game) {
    super(game, "Hellspark Elemental", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = HellsparkElemental;
