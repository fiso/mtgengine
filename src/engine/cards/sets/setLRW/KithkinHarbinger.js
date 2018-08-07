"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KithkinHarbinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Kithkin Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = KithkinHarbinger;
