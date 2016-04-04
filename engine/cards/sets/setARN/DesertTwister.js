"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesertTwister extends Card {
  constructor(game) {
    super(game, "Desert Twister", "Arabian Nights", "ARN");
  }
}

module.exports = DesertTwister;
