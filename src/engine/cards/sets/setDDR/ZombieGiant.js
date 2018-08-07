"use strict";
const Constants = require ("../../../Constants");
const ZombieGiantBase = require("../setTBBD/ZombieGiant");

class ZombieGiant extends ZombieGiantBase {
  constructor (game) {
    super(game, "Zombie Giant", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = ZombieGiant;
