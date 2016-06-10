"use strict";
const Constants = require ("../../../Constants");
const PhantomMonsterBase = require("../setCED/PhantomMonster");

class PhantomMonster extends PhantomMonsterBase {
  constructor (game) {
    super(game, "Phantom Monster", "Limited Edition Beta", "LEB");
  }
}

module.exports = PhantomMonster;
