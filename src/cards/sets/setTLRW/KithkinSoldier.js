"use strict";
const Constants = require ("../../../Constants");
const KithkinSoldierBase = require("../setTCMA/KithkinSoldier");

class KithkinSoldier extends KithkinSoldierBase {
  constructor (game) {
    super(game, "Kithkin Soldier", "Lorwyn Tokens", "TLRW");
  }
}

module.exports = KithkinSoldier;
