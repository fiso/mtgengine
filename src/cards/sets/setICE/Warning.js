"use strict";
const Constants = require ("../../../Constants");
const WarningBase = require("../setME2/Warning");

class Warning extends WarningBase {
  constructor (game) {
    super(game, "Warning", "Ice Age", "ICE");
  }
}

module.exports = Warning;
