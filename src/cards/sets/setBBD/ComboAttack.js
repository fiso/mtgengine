"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ComboAttack extends UnimplementedCard {
  constructor (game) {
    super(game, "Combo Attack", "Battlebond", "BBD");
  }
}

module.exports = ComboAttack;
