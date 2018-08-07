"use strict";
const Constants = require ("../../../Constants");
const StaffofNinBase = require("../setCM2/StaffofNin");

class StaffofNin extends StaffofNinBase {
  constructor (game) {
    super(game, "Staff of Nin", "Commander 2015", "C15");
  }
}

module.exports = StaffofNin;
