"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vacuumelt extends UnimplementedCard {
  constructor(game) {
    super(game, "Vacuumelt", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Vacuumelt;
