"use strict";
const Constants = require ("../../../Constants");
const MastersCallBase = require("../setMBS/MastersCall");

class MastersCall extends MastersCallBase {
  constructor (game) {
    super(game, "Master's Call", "Wizards Play Network 2011", "PWP11");
  }
}

module.exports = MastersCall;
