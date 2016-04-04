"use strict";
const Constants = require ("../../../Constants");
const EngineeredExplosivesBase = require("../set5DN/EngineeredExplosives");

class EngineeredExplosives extends EngineeredExplosivesBase {
  constructor(game) {
    super(game, "Engineered Explosives", "Modern Masters", "MMA");
  }
}

module.exports = EngineeredExplosives;
