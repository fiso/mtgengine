"use strict";
const Constants = require ("../../../Constants");
const StaffofNinBase = require("../setCM2/StaffofNin");

class StaffofNin extends StaffofNinBase {
  constructor (game) {
    super(game, "Staff of Nin", "Magic Online Promos", "PRM");
  }
}

module.exports = StaffofNin;
