"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostWarden extends Card {
  constructor(game) {
    super(game, "Ghost Warden", "Guildpact", "GPT");
  }
}

module.exports = GhostWarden;
