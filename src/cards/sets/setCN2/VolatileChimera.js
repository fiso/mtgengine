"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VolatileChimera extends UnimplementedCard {
  constructor (game) {
    super(game, "Volatile Chimera", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = VolatileChimera;
