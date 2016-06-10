"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoralFighters extends UnimplementedCard {
  constructor (game) {
    super(game, "Coral Fighters", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CoralFighters;
