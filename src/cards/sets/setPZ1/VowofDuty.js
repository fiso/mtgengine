"use strict";
const Constants = require ("../../../Constants");
const VowofDutyBase = require("../setE02/VowofDuty");

class VowofDuty extends VowofDutyBase {
  constructor (game) {
    super(game, "Vow of Duty", "Legendary Cube", "PZ1");
  }
}

module.exports = VowofDuty;
