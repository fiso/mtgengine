"use strict";
const Constants = require ("../../../Constants");
const WarningBase = require("../setICE/Warning");

class Warning extends WarningBase {
  constructor(game) {
    super(game, "Warning", "Masters Edition II", "ME2");
  }
}

module.exports = Warning;
