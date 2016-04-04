"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeweledBird extends Card {
  constructor(game) {
    super(game, "Jeweled Bird", "Arabian Nights", "ARN");
  }
}

module.exports = JeweledBird;
