"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PutrefyBase = require("../setC15/Putrefy.js");

class Putrefy extends PutrefyBase {
  constructor(game) {
    super(game, "Putrefy", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Putrefy;
