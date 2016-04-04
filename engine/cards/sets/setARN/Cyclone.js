"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cyclone extends Card {
  constructor(game) {
    super(game, "Cyclone", "Arabian Nights", "ARN");
  }
}

module.exports = Cyclone;
