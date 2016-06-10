"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RapaciousOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Rapacious One", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RapaciousOne;
