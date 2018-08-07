"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DurableHandicraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Durable Handicraft", "Kaladesh", "KLD");
  }
}

module.exports = DurableHandicraft;
