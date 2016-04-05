"use strict";
const Constants = require ("../../../Constants");
const VowofDutyBase = require("../setC15/VowofDuty");

class VowofDuty extends VowofDutyBase {
  constructor(game) {
    super(game, "Vow of Duty", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VowofDuty;
