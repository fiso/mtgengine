"use strict";
const Constants = require ("../../../Constants");
const VampireLaceratorBase = require("../setA25/VampireLacerator");

class VampireLacerator extends VampireLaceratorBase {
  constructor (game) {
    super(game, "Vampire Lacerator", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = VampireLacerator;
