"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OverseeroftheDamned extends UnimplementedCard {
  constructor (game) {
    super(game, "Overseer of the Damned", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = OverseeroftheDamned;
