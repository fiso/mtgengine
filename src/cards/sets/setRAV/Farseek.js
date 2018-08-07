"use strict";
const Constants = require ("../../../Constants");
const FarseekBase = require("../setC17/Farseek");

class Farseek extends FarseekBase {
  constructor (game) {
    super(game, "Farseek", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Farseek;
