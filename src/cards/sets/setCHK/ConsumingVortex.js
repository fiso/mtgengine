"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConsumingVortex extends UnimplementedCard {
  constructor (game) {
    super(game, "Consuming Vortex", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ConsumingVortex;
