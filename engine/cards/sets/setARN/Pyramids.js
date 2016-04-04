"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Pyramids extends Card {
  constructor(game) {
    super(game, "Pyramids", "Arabian Nights", "ARN");
  }
}

module.exports = Pyramids;
