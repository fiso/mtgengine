"use strict";
const Constants = require ("../../../Constants");
const BFMBigFurryMonsterBase = require("../setUGL/BFMBigFurryMonster");

class BFMBigFurryMonster extends BFMBigFurryMonsterBase {
  constructor (game) {
    super(game, "B.F.M. (Big Furry Monster)", "Unglued", "UGL");
  }
}

module.exports = BFMBigFurryMonster;
