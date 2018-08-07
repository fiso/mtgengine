"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Confiscate extends UnimplementedCard {
  constructor (game) {
    super(game, "Confiscate", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = Confiscate;
