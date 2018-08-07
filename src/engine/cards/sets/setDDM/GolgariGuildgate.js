"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setCMA/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor (game) {
    super(game, "Golgari Guildgate", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GolgariGuildgate;
