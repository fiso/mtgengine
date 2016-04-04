"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TavernSwindler extends Card {
  constructor(game) {
    super(game, "Tavern Swindler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TavernSwindler;
