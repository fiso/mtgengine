"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlateStreetRuffian extends Card {
  constructor(game) {
    super(game, "Slate Street Ruffian", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SlateStreetRuffian;
