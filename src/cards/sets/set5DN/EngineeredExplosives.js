"use strict";
const Constants = require ("../../../Constants");
const EngineeredExplosivesBase = require("../setMPS/EngineeredExplosives");

class EngineeredExplosives extends EngineeredExplosivesBase {
  constructor (game) {
    super(game, "Engineered Explosives", "Fifth Dawn", "5DN");
  }
}

module.exports = EngineeredExplosives;
