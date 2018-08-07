"use strict";
const Constants = require ("../../../Constants");
const KrenkoMobBossBase = require("../setDDT/KrenkoMobBoss");

class KrenkoMobBoss extends KrenkoMobBossBase {
  constructor (game) {
    super(game, "Krenko, Mob Boss", "Magic 2013", "M13");
  }
}

module.exports = KrenkoMobBoss;
