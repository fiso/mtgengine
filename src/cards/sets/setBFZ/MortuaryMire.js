"use strict";
const Constants = require ("../../../Constants");
const MortuaryMireBase = require("../setC18/MortuaryMire");

class MortuaryMire extends MortuaryMireBase {
  constructor (game) {
    super(game, "Mortuary Mire", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MortuaryMire;
