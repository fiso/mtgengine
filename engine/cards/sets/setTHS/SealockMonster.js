"use strict";
const Constants = require ("../../../Constants");
const SealockMonsterBase = require("../setDDO/SealockMonster");

class SealockMonster extends SealockMonsterBase {
  constructor(game) {
    super(game, "Sealock Monster", "Theros", "THS");
  }
}

module.exports = SealockMonster;
