"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReverseDamage extends Card {
  constructor(game) {
    super(game, "Reverse Damage", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ReverseDamage;
