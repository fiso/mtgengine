"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadWeight extends UnimplementedCard {
  constructor (game) {
    super(game, "Dead Weight", "Innistrad", "ISD");
  }
}

module.exports = DeadWeight;
