"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set6ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Fourth Edition", "4ED");
  }
}

module.exports = ReverseDamage;
