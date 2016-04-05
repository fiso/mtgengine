"use strict";
const Constants = require ("../../../Constants");
const ChimericStaffBase = require("../set10E/ChimericStaff");

class ChimericStaff extends ChimericStaffBase {
  constructor(game) {
    super(game, "Chimeric Staff", "Urza's Saga", "USG");
  }
}

module.exports = ChimericStaff;
