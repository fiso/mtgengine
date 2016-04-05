"use strict";
const Constants = require ("../../../Constants");
const DrumhunterBase = require("../setC13/Drumhunter");

class Drumhunter extends DrumhunterBase {
  constructor(game) {
    super(game, "Drumhunter", "Shards of Alara", "ALA");
  }
}

module.exports = Drumhunter;
