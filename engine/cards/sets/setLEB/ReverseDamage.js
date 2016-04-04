"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReverseDamageBase = require("../set6ED/ReverseDamage.js");

class ReverseDamage extends ReverseDamageBase {
  constructor(game) {
    super(game, "Reverse Damage", "Limited Edition Beta", "LEB");
  }
}

module.exports = ReverseDamage;
