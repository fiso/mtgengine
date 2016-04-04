"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StandFirmBase = require("../setDDL/StandFirm.js");

class StandFirm extends StandFirmBase {
  constructor(game) {
    super(game, "Stand Firm", "Fifth Dawn", "5DN");
  }
}

module.exports = StandFirm;
