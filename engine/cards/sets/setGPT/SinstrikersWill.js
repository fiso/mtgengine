"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SinstrikersWill extends Card {
  constructor(game) {
    super(game, "Sinstriker's Will", "Guildpact", "GPT");
  }
}

module.exports = SinstrikersWill;
