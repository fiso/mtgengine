"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingRage extends UnimplementedCard {
  constructor (game) {
    super(game, "Consuming Rage", "Battle the Horde", "TBTH");
  }
}

module.exports = ConsumingRage;
