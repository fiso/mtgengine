"use strict";
const Constants = require ("../../../Constants");
const MossMonsterBase = require("../set8ED/MossMonster");

class MossMonster extends MossMonsterBase {
  constructor (game) {
    super(game, "Moss Monster", "Legends", "LEG");
  }
}

module.exports = MossMonster;
