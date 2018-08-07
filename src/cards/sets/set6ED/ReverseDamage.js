"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set9ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ReverseDamage;
