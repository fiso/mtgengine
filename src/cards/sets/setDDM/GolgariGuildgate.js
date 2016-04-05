"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildgateBase = require("../setC13/GolgariGuildgate");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor(game) {
    super(game, "Golgari Guildgate", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GolgariGuildgate;
