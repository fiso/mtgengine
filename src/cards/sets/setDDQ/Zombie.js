"use strict";
const Constants = require ("../../../Constants");
const ZombieBase = require("../setTC18/Zombie");

class Zombie extends ZombieBase {
  constructor (game) {
    super(game, "Zombie", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = Zombie;
