"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhantomMonsterBase = require("../setCED/PhantomMonster.js");

class PhantomMonster extends PhantomMonsterBase {
  constructor(game) {
    super(game, "Phantom Monster", "International Collector's Edition", "CEI");
  }
}

module.exports = PhantomMonster;
