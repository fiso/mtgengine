"use strict";
const Constants = require ("../../../Constants");
const SeaMonsterBase = require("../setTPR/SeaMonster");

class SeaMonster extends SeaMonsterBase {
  constructor (game) {
    super(game, "Sea Monster", "Tenth Edition", "10E");
  }
}

module.exports = SeaMonster;
