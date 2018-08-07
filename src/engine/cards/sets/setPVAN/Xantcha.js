"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Xantcha extends UnimplementedCard {
  constructor (game) {
    super(game, "Xantcha", "Vanguard Series", "PVAN");
  }
}

module.exports = Xantcha;
