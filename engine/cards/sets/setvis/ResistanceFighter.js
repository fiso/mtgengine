"use strict";
const Constants = require ("../../../Constants");
const ResistanceFighterBase = require("../set6ED/ResistanceFighter");

class ResistanceFighter extends ResistanceFighterBase {
  constructor(game) {
    super(game, "Resistance Fighter", "Visions", "VIS");
  }
}

module.exports = ResistanceFighter;
