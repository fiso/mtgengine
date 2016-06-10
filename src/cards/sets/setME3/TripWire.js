"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TripWire extends UnimplementedCard {
  constructor (game) {
    super(game, "Trip Wire", "Masters Edition III", "ME3");
  }
}

module.exports = TripWire;
