"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BreakingBase = require("../setDGM/Breaking.js");

class Breaking extends BreakingBase {
  constructor(game) {
    super(game, "Breaking", "Launch Parties", "pLPA");
  }
}

module.exports = Breaking;
