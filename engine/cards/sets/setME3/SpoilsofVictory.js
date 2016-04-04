"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpoilsofVictoryBase = require("../setC13/SpoilsofVictory.js");

class SpoilsofVictory extends SpoilsofVictoryBase {
  constructor(game) {
    super(game, "Spoils of Victory", "Masters Edition III", "ME3");
  }
}

module.exports = SpoilsofVictory;
