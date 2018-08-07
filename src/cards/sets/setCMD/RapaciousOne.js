"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RapaciousOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Rapacious One", "Commander 2011", "CMD");
  }
}

module.exports = RapaciousOne;
