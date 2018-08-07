"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set9ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Seventh Edition", "7ED");
  }
}

module.exports = ReverseDamage;
