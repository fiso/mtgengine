"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DreamStalker extends Card {
  constructor(game) {
    super(game, "Dream Stalker", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = DreamStalker;
