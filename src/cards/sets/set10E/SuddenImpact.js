"use strict";
const Constants = require ("../../../Constants");
const SuddenImpactBase = require("../set8ED/SuddenImpact");

class SuddenImpact extends SuddenImpactBase {
  constructor(game) {
    super(game, "Sudden Impact", "Tenth Edition", "10E");
  }
}

module.exports = SuddenImpact;
