"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set9ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Collectors’ Edition", "CED");
  }
}

module.exports = ReverseDamage;
