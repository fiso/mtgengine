"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreasuredFind extends Card {
  constructor(game) {
    super(game, "Treasured Find", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TreasuredFind;
