"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Resurrection extends UnimplementedCard {
  constructor (game) {
    super(game, "Resurrection", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Resurrection;
