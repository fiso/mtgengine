"use strict";
const Constants = require ("../../../Constants");
const DeathBase = require("../setAPC/Death");

class Death extends DeathBase {
  constructor(game) {
    super(game, "Death", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = Death;
