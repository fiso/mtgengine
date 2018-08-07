"use strict";
const Constants = require ("../../../Constants");
const SuddenImpactBase = require("../setPD2/SuddenImpact");

class SuddenImpact extends SuddenImpactBase {
  constructor (game) {
    super(game, "Sudden Impact", "Eighth Edition", "8ED");
  }
}

module.exports = SuddenImpact;
