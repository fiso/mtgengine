"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VitalitySalve extends UnimplementedCard {
  constructor (game) {
    super(game, "Vitality Salve", "Battle the Horde", "TBTH");
  }
}

module.exports = VitalitySalve;
