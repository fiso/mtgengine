"use strict";
const Constants = require ("../../../Constants");
const PhantomMonsterBase = require("../setCED/PhantomMonster");

class PhantomMonster extends PhantomMonsterBase {
  constructor (game) {
    super(game, "Phantom Monster", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = PhantomMonster;
