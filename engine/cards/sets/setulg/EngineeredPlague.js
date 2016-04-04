"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EngineeredPlagueBase = require("../setpFNM/EngineeredPlague.js");

class EngineeredPlague extends EngineeredPlagueBase {
  constructor(game) {
    super(game, "Engineered Plague", "Urza's Legacy", "ULG");
  }
}

module.exports = EngineeredPlague;
