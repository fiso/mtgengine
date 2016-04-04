"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MossMonsterBase = require("../set8ED/MossMonster.js");

class MossMonster extends MossMonsterBase {
  constructor(game) {
    super(game, "Moss Monster", "Legends", "LEG");
  }
}

module.exports = MossMonster;
