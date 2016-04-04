"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BronzeHorse extends Card {
  constructor(game) {
    super(game, "Bronze Horse", "Chronicles", "CHR");
  }
}

module.exports = BronzeHorse;
