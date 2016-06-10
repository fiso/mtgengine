"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SneakAttack extends UnimplementedCard {
  constructor (game) {
    super(game, "Sneak Attack", "Judge Gift Program", "pJGP");
  }
}

module.exports = SneakAttack;
