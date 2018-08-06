"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ItThatRidesasOne extends UnimplementedCard {
  constructor (game) {
    super(game, "It That Rides as One", "Eldritch Moon", "EMN");
  }
}

module.exports = ItThatRidesasOne;
