"use strict";
const Constants = require ("../../../Constants");
const MonssGoblinRaidersBase = require("../setCED/MonssGoblinRaiders");

class MonssGoblinRaiders extends MonssGoblinRaidersBase {
  constructor (game) {
    super(game, "Mons's Goblin Raiders", "International Collector's Edition", "CEI");
  }
}

module.exports = MonssGoblinRaiders;
