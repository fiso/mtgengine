"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeedStrangle extends Card {
  constructor(game) {
    super(game, "Weed Strangle", "Lorwyn", "LRW");
  }
}

module.exports = WeedStrangle;
