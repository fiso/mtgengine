"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dissipate extends UnimplementedCard {
  constructor(game) {
    super(game, "Dissipate", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Dissipate;
