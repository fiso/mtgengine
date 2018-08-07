"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandDeliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Stand // Deliver", "Invasion", "INV");
  }
}

module.exports = StandDeliver;
