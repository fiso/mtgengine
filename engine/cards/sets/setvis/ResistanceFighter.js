"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ResistanceFighterBase = require("../set6ED/ResistanceFighter.js");

class ResistanceFighter extends ResistanceFighterBase {
  constructor(game) {
    super(game, "Resistance Fighter", "Visions", "VIS");
  }
}

module.exports = ResistanceFighter;
