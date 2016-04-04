"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EngineeredExplosivesBase = require("../set5DN/EngineeredExplosives.js");

class EngineeredExplosives extends EngineeredExplosivesBase {
  constructor(game) {
    super(game, "Engineered Explosives", "Modern Masters", "MMA");
  }
}

module.exports = EngineeredExplosives;
