"use strict";
const Constants = require ("../../../Constants");
const TavernSwindlerBase = require("../setBBD/TavernSwindler");

class TavernSwindler extends TavernSwindlerBase {
  constructor (game) {
    super(game, "Tavern Swindler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TavernSwindler;
