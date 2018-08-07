"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdventurousImpulse extends UnimplementedCard {
  constructor (game) {
    super(game, "Adventurous Impulse", "Dominaria", "DOM");
  }
}

module.exports = AdventurousImpulse;
