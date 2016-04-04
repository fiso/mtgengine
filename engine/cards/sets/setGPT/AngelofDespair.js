"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelofDespair extends Card {
  constructor(game) {
    super(game, "Angel of Despair", "Guildpact", "GPT");
  }
}

module.exports = AngelofDespair;
