"use strict";
const Constants = require ("../../../Constants");
const BreakingBase = require("../setDGM/Breaking");

class Breaking extends BreakingBase {
  constructor (game) {
    super(game, "Breaking", "Launch Parties", "pLPA");
  }
}

module.exports = Breaking;
