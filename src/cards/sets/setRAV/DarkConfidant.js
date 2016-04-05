"use strict";
const Constants = require ("../../../Constants");
const DarkConfidantBase = require("../setpJGP/DarkConfidant");

class DarkConfidant extends DarkConfidantBase {
  constructor(game) {
    super(game, "Dark Confidant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DarkConfidant;
