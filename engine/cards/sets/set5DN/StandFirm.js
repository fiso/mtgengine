"use strict";
const Constants = require ("../../../Constants");
const StandFirmBase = require("../setDDL/StandFirm");

class StandFirm extends StandFirmBase {
  constructor(game) {
    super(game, "Stand Firm", "Fifth Dawn", "5DN");
  }
}

module.exports = StandFirm;
