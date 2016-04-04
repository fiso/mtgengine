"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CoralFighters extends Card {
  constructor(game) {
    super(game, "Coral Fighters", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = CoralFighters;
