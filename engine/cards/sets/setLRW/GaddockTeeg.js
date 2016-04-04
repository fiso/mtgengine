"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaddockTeeg extends Card {
  constructor(game) {
    super(game, "Gaddock Teeg", "Lorwyn", "LRW");
  }
}

module.exports = GaddockTeeg;
