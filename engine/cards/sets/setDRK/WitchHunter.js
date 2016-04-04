"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WitchHunterBase = require("../setCHR/WitchHunter.js");

class WitchHunter extends WitchHunterBase {
  constructor(game) {
    super(game, "Witch Hunter", "The Dark", "DRK");
  }
}

module.exports = WitchHunter;
