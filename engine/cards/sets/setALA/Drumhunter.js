"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrumhunterBase = require("../setC13/Drumhunter.js");

class Drumhunter extends DrumhunterBase {
  constructor(game) {
    super(game, "Drumhunter", "Shards of Alara", "ALA");
  }
}

module.exports = Drumhunter;
