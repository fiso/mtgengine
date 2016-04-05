"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DregMangler extends UnimplementedCard {
  constructor(game) {
    super(game, "Dreg Mangler", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DregMangler;
