"use strict";
const Constants = require ("../../../Constants");
const BattleMasteryBase = require("../setBBD/BattleMastery");

class BattleMastery extends BattleMasteryBase {
  constructor (game) {
    super(game, "Battle Mastery", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BattleMastery;
