"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamekinHarbinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamekin Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = FlamekinHarbinger;
