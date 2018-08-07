"use strict";
const Constants = require ("../../../Constants");
const EngineeredPlagueBase = require("../setF07/EngineeredPlague");

class EngineeredPlague extends EngineeredPlagueBase {
  constructor (game) {
    super(game, "Engineered Plague", "World Championship Decks 2001", "WC01");
  }
}

module.exports = EngineeredPlague;
