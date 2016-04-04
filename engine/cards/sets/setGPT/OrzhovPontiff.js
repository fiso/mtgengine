"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrzhovPontiff extends Card {
  constructor(game) {
    super(game, "Orzhov Pontiff", "Guildpact", "GPT");
  }
}

module.exports = OrzhovPontiff;
