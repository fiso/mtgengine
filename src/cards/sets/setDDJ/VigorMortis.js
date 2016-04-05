"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigorMortis extends UnimplementedCard {
  constructor(game) {
    super(game, "Vigor Mortis", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = VigorMortis;
