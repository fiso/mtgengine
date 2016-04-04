"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishHexhunter extends Card {
  constructor(game) {
    super(game, "Elvish Hexhunter", "Shadowmoor", "SHM");
  }
}

module.exports = ElvishHexhunter;
