"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormHerd extends Card {
  constructor(game) {
    super(game, "Storm Herd", "Guildpact", "GPT");
  }
}

module.exports = StormHerd;
