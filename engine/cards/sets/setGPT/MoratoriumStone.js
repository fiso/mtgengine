"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoratoriumStone extends Card {
  constructor(game) {
    super(game, "Moratorium Stone", "Guildpact", "GPT");
  }
}

module.exports = MoratoriumStone;
