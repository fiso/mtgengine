"use strict";
const Constants = require ("../../../Constants");
const RogueKavuBase = require("../set9ED/RogueKavu");

class RogueKavu extends RogueKavuBase {
  constructor (game) {
    super(game, "Rogue Kavu", "Invasion", "INV");
  }
}

module.exports = RogueKavu;
