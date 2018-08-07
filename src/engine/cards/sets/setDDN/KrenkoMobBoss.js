"use strict";
const Constants = require ("../../../Constants");
const KrenkoMobBossBase = require("../setDDT/KrenkoMobBoss");

class KrenkoMobBoss extends KrenkoMobBossBase {
  constructor (game) {
    super(game, "Krenko, Mob Boss", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = KrenkoMobBoss;
