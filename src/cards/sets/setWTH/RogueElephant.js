"use strict";
const Constants = require ("../../../Constants");
const RogueElephantBase = require("../setWC97/RogueElephant");

class RogueElephant extends RogueElephantBase {
  constructor (game) {
    super(game, "Rogue Elephant", "Weatherlight", "WTH");
  }
}

module.exports = RogueElephant;
