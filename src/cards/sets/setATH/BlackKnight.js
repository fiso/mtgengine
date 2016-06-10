"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackKnight extends UnimplementedCard {
  constructor (game) {
    super(game, "Black Knight", "Anthologies", "ATH");
  }
}

module.exports = BlackKnight;
