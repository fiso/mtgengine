"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Galvanoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Galvanoth", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Galvanoth;
