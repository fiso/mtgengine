"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuildscornWard extends Card {
  constructor(game) {
    super(game, "Guildscorn Ward", "Gatecrash", "GTC");
  }
}

module.exports = GuildscornWard;
