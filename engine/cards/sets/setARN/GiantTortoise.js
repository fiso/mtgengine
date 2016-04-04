"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GiantTortoise extends Card {
  constructor(game) {
    super(game, "Giant Tortoise", "Arabian Nights", "ARN");
  }
}

module.exports = GiantTortoise;
