"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TellingTimeBase = require("../setMM2/TellingTime.js");

class TellingTime extends TellingTimeBase {
  constructor(game) {
    super(game, "Telling Time", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = TellingTime;
