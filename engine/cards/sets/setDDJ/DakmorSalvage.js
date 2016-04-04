"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorSalvage extends Card {
  constructor(game) {
    super(game, "Dakmor Salvage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DakmorSalvage;
