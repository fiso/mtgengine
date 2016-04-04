"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Desert extends Card {
  constructor(game) {
    super(game, "Desert", "Arabian Nights", "ARN");
  }
}

module.exports = Desert;
