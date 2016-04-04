"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunforgerBase = require("../setMM2/Sunforger.js");

class Sunforger extends SunforgerBase {
  constructor(game) {
    super(game, "Sunforger", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Sunforger;
