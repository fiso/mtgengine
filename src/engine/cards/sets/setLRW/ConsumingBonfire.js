"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingBonfire extends UnimplementedCard {
  constructor (game) {
    super(game, "Consuming Bonfire", "Lorwyn", "LRW");
  }
}

module.exports = ConsumingBonfire;
