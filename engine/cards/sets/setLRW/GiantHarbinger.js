"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantHarbinger extends Card {
  constructor(game) {
    super(game, "Giant Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = GiantHarbinger;
