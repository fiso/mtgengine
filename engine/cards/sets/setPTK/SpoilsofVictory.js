"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpoilsofVictoryBase = require("../setC13/SpoilsofVictory.js");

class SpoilsofVictory extends SpoilsofVictoryBase {
  constructor(game) {
    super(game, "Spoils of Victory", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = SpoilsofVictory;
