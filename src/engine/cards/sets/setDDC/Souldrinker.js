"use strict";
const Constants = require ("../../../Constants");
const SouldrinkerBase = require("../setDVD/Souldrinker");

class Souldrinker extends SouldrinkerBase {
  constructor (game) {
    super(game, "Souldrinker", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = Souldrinker;
