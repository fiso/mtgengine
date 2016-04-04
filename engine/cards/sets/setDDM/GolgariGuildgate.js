"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariGuildgateBase = require("../setC13/GolgariGuildgate.js");

class GolgariGuildgate extends GolgariGuildgateBase {
  constructor(game) {
    super(game, "Golgari Guildgate", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = GolgariGuildgate;
