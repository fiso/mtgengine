"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoneRiderItThatRidesasOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Lone Rider // It That Rides as One", "Eldritch Moon", "EMN");
  }
}

module.exports = LoneRiderItThatRidesasOne;
