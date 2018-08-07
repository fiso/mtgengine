"use strict";
const Constants = require ("../../../Constants");
const KorSoldierBase = require("../setTC14/KorSoldier");

class KorSoldier extends KorSoldierBase {
  constructor (game) {
    super(game, "Kor Soldier", "Zendikar Tokens", "TZEN");
  }
}

module.exports = KorSoldier;
