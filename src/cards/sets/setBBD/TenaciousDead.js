"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TenaciousDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Tenacious Dead", "Battlebond", "BBD");
  }
}

module.exports = TenaciousDead;
