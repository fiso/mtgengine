"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DampeningPulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Dampening Pulse", "Battle for Zendikar", "BFZ");
  }
}

module.exports = DampeningPulse;
