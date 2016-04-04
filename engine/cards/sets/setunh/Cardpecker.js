"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cardpecker extends Card {
  constructor(game) {
    super(game, "Cardpecker", "Unhinged", "UNH");
  }
}

module.exports = Cardpecker;
