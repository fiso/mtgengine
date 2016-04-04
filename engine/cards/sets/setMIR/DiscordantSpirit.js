"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiscordantSpirit extends Card {
  constructor(game) {
    super(game, "Discordant Spirit", "Mirage", "MIR");
  }
}

module.exports = DiscordantSpirit;
