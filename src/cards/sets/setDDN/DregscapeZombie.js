"use strict";
const Constants = require ("../../../Constants");
const DregscapeZombieBase = require("../setARC/DregscapeZombie");

class DregscapeZombie extends DregscapeZombieBase {
  constructor (game) {
    super(game, "Dregscape Zombie", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = DregscapeZombie;
