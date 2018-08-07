"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Massacre extends UnimplementedCard {
  constructor (game) {
    super(game, "Massacre", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Massacre;
