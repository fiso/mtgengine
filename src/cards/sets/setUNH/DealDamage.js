"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DealDamage extends UnimplementedCard {
  constructor (game) {
    super(game, "Deal Damage", "Unhinged", "UNH");
  }
}

module.exports = DealDamage;
