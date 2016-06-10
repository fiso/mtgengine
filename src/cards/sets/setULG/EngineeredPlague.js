"use strict";
const Constants = require ("../../../Constants");
const EngineeredPlagueBase = require("../setpFNM/EngineeredPlague");

class EngineeredPlague extends EngineeredPlagueBase {
  constructor (game) {
    super(game, "Engineered Plague", "Urza's Legacy", "ULG");
  }
}

module.exports = EngineeredPlague;
