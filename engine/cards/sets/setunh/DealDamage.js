"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DealDamage extends Card {
  constructor(game) {
    super(game, "Deal Damage", "Unhinged", "UNH");
  }
}

module.exports = DealDamage;
