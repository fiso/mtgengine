"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaerieHarbinger extends Card {
  constructor(game) {
    super(game, "Faerie Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = FaerieHarbinger;
