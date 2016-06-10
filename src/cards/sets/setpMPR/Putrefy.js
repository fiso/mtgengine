"use strict";
const Constants = require ("../../../Constants");
const PutrefyBase = require("../setC15/Putrefy");

class Putrefy extends PutrefyBase {
  constructor (game) {
    super(game, "Putrefy", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Putrefy;
