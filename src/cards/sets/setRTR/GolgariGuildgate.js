"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setCMA/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor (game) {
    super(game, "Golgari Guildgate", "Return to Ravnica", "RTR");
  }
}

module.exports = GolgariGuildgate;
