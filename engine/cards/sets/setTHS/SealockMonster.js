"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SealockMonsterBase = require("../setDDO/SealockMonster.js");

class SealockMonster extends SealockMonsterBase {
  constructor(game) {
    super(game, "Sealock Monster", "Theros", "THS");
  }
}

module.exports = SealockMonster;
