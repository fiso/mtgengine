"use strict";
const Constants = require ("../../../Constants");
const ReverseDamageBase = require("../set6ED/ReverseDamage");

class ReverseDamage extends ReverseDamageBase {
  constructor(game) {
    super(game, "Reverse Damage", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = ReverseDamage;
