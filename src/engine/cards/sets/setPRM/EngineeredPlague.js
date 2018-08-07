"use strict";
const Constants = require ("../../../Constants");
const EngineeredPlagueBase = require("../setF07/EngineeredPlague");

class EngineeredPlague extends EngineeredPlagueBase {
  constructor (game) {
    super(game, "Engineered Plague", "Magic Online Promos", "PRM");
  }
}

module.exports = EngineeredPlague;
