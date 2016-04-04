"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoggartHarbinger extends Card {
  constructor(game) {
    super(game, "Boggart Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = BoggartHarbinger;
