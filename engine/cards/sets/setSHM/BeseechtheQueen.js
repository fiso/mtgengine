"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeseechtheQueenBase = require("../setHOP/BeseechtheQueen.js");

class BeseechtheQueen extends BeseechtheQueenBase {
  constructor(game) {
    super(game, "Beseech the Queen", "Shadowmoor", "SHM");
  }
}

module.exports = BeseechtheQueen;
