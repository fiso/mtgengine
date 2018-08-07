"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setCMA/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor (game) {
    super(game, "Golgari Guildgate", "Modern Masters 2017", "MM3");
  }
}

module.exports = GolgariGuildgate;
