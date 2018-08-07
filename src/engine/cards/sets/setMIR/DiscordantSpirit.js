"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscordantSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Discordant Spirit", "Mirage", "MIR");
  }
}

module.exports = DiscordantSpirit;
