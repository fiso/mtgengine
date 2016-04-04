"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChimericStaffBase = require("../set10E/ChimericStaff.js");

class ChimericStaff extends ChimericStaffBase {
  constructor(game) {
    super(game, "Chimeric Staff", "Urza's Saga", "USG");
  }
}

module.exports = ChimericStaff;
