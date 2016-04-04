"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ConsumingBonfire extends Card {
  constructor(game) {
    super(game, "Consuming Bonfire", "Lorwyn", "LRW");
  }
}

module.exports = ConsumingBonfire;
