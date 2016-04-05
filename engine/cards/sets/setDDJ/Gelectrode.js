"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gelectrode extends UnimplementedCard {
  constructor(game) {
    super(game, "Gelectrode", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Gelectrode;
