"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CullingSun extends Card {
  constructor(game) {
    super(game, "Culling Sun", "Guildpact", "GPT");
  }
}

module.exports = CullingSun;
