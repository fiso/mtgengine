"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setCMA/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor (game) {
    super(game, "Golgari Guildgate", "Commander 2015", "C15");
  }
}

module.exports = GolgariGuildgate;
