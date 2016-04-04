"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SneakAttack extends Card {
  constructor(game) {
    super(game, "Sneak Attack", "Judge Gift Program", "pJGP");
  }
}

module.exports = SneakAttack;
