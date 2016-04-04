"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VowofDutyBase = require("../setC15/VowofDuty.js");

class VowofDuty extends VowofDutyBase {
  constructor(game) {
    super(game, "Vow of Duty", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = VowofDuty;
