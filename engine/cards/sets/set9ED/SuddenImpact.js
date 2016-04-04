"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuddenImpactBase = require("../set8ED/SuddenImpact.js");

class SuddenImpact extends SuddenImpactBase {
  constructor(game) {
    super(game, "Sudden Impact", "Ninth Edition", "9ED");
  }
}

module.exports = SuddenImpact;
