"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallowedHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Hallowed Healer", "Odyssey", "ODY");
  }
}

module.exports = HallowedHealer;
