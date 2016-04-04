"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuildFeud extends Card {
  constructor(game) {
    super(game, "Guild Feud", "Return to Ravnica", "RTR");
  }
}

module.exports = GuildFeud;
