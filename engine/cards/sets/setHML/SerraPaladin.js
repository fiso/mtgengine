"use strict";
const Constants = require ("../../../Constants");
const SerraPaladinBase = require("../set5ED/SerraPaladin");

class SerraPaladin extends SerraPaladinBase {
  constructor(game) {
    super(game, "Serra Paladin", "Homelands", "HML");
  }
}

module.exports = SerraPaladin;
