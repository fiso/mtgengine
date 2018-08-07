"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VileAggregate extends UnimplementedCard {
  constructor (game) {
    super(game, "Vile Aggregate", "Battle for Zendikar", "BFZ");
  }
}

module.exports = VileAggregate;
