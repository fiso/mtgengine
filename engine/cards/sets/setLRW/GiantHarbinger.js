"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantHarbinger extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = GiantHarbinger;
