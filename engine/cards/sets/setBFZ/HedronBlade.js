"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedronBlade extends UnimplementedCard {
  constructor(game) {
    super(game, "Hedron Blade", "Battle for Zendikar", "BFZ");
  }
}

module.exports = HedronBlade;
