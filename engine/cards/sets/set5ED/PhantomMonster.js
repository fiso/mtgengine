"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomMonsterBase = require("../setCED/PhantomMonster.js");

class PhantomMonster extends PhantomMonsterBase {
  constructor(game) {
    super(game, "Phantom Monster", "Fifth Edition", "5ED");
  }
}

module.exports = PhantomMonster;
