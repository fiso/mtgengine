"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorSalvage extends UnimplementedCard {
  constructor (game) {
    super(game, "Dakmor Salvage", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = DakmorSalvage;
