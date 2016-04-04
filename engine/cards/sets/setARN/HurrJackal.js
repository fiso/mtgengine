"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HurrJackal extends Card {
  constructor(game) {
    super(game, "Hurr Jackal", "Arabian Nights", "ARN");
  }
}

module.exports = HurrJackal;
