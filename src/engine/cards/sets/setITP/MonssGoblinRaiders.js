"use strict";
const Constants = require ("../../../Constants");
const MonssGoblinRaidersBase = require("../setS00/MonssGoblinRaiders");

class MonssGoblinRaiders extends MonssGoblinRaidersBase {
  constructor (game) {
    super(game, "Mons's Goblin Raiders", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = MonssGoblinRaiders;
