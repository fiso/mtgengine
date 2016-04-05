"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlateStreetRuffian extends UnimplementedCard {
  constructor(game) {
    super(game, "Slate Street Ruffian", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = SlateStreetRuffian;
