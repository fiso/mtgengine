"use strict";
const Constants = require ("../../../Constants");
const SuddenImpactBase = require("../setPD2/SuddenImpact");

class SuddenImpact extends SuddenImpactBase {
  constructor (game) {
    super(game, "Sudden Impact", "Ninth Edition", "9ED");
  }
}

module.exports = SuddenImpact;
