"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PanicAttackBase = require("../set8ED/PanicAttack.js");

class PanicAttack extends PanicAttackBase {
  constructor(game) {
    super(game, "Panic Attack", "Ninth Edition", "9ED");
  }
}

module.exports = PanicAttack;
