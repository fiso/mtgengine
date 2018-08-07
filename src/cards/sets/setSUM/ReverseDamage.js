"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set9ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = ReverseDamage;
