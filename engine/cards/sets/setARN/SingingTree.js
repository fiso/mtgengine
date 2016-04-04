"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SingingTree extends Card {
  constructor(game) {
    super(game, "Singing Tree", "Arabian Nights", "ARN");
  }
}

module.exports = SingingTree;
