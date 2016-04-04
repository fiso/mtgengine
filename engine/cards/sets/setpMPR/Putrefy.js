"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PutrefyBase = require("../setC15/Putrefy.js");

class Putrefy extends PutrefyBase {
  constructor(game) {
    super(game, "Putrefy", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Putrefy;
