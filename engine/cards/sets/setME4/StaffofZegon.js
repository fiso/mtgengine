"use strict";
const Constants = require ("../../../Constants");
const StaffofZegonBase = require("../setATQ/StaffofZegon");

class StaffofZegon extends StaffofZegonBase {
  constructor(game) {
    super(game, "Staff of Zegon", "Masters Edition IV", "ME4");
  }
}

module.exports = StaffofZegon;
