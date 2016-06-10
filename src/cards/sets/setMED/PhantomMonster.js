"use strict";
const Constants = require ("../../../Constants");
const PhantomMonsterBase = require("../setCED/PhantomMonster");

class PhantomMonster extends PhantomMonsterBase {
  constructor (game) {
    super(game, "Phantom Monster", "Masters Edition", "MED");
  }
}

module.exports = PhantomMonster;
