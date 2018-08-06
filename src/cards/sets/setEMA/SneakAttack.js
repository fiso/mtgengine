"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SneakAttack extends UnimplementedCard {
  constructor (game) {
    super(game, "Sneak Attack", "Eternal Masters", "EMA");
  }
}

module.exports = SneakAttack;
