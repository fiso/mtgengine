"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BirdMaiden extends Card {
  constructor(game) {
    super(game, "Bird Maiden", "Arabian Nights", "ARN");
  }
}

module.exports = BirdMaiden;
