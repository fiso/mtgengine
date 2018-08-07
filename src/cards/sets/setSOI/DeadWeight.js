"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadWeight extends UnimplementedCard {
  constructor (game) {
    super(game, "Dead Weight", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DeadWeight;
