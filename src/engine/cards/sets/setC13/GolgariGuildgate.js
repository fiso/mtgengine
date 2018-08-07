"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setCMA/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor (game) {
    super(game, "Golgari Guildgate", "Commander 2013", "C13");
  }
}

module.exports = GolgariGuildgate;
