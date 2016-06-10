"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set6ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor (game) {
    super(game, "Reverse Damage", "Limited Edition Beta", "LEB");
  }
}

module.exports = ReverseDamage;
