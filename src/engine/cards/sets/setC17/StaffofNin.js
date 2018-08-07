"use strict";
const Constants = require ("../../../Constants");
const StaffofNinBase = require("../setCM2/StaffofNin");

class StaffofNin extends StaffofNinBase {
  constructor (game) {
    super(game, "Staff of Nin", "Commander 2017", "C17");
  }
}

module.exports = StaffofNin;
