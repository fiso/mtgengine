"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KithkinHarbinger extends Card {
  constructor(game) {
    super(game, "Kithkin Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = KithkinHarbinger;
