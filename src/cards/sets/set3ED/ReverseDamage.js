"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set6ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Revised Edition", "3ED");
  }
}

module.exports = ReverseDamage;
