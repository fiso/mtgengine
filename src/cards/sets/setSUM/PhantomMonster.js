"use strict";
const Constants = require ("../../../Constants");
const PhantomMonsterBase = require("../setIMA/PhantomMonster");

class PhantomMonster extends PhantomMonsterBase {
  constructor (game) {
    super(game, "Phantom Monster", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = PhantomMonster;
