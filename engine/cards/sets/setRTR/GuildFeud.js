"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuildFeud extends UnimplementedCard {
  constructor(game) {
    super(game, "Guild Feud", "Return to Ravnica", "RTR");
  }
}

module.exports = GuildFeud;
