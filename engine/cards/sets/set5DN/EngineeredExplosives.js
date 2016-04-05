"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EngineeredExplosives extends UnimplementedCard {
  constructor(game) {
    super(game, "Engineered Explosives", "Fifth Dawn", "5DN");
  }
}

module.exports = EngineeredExplosives;
