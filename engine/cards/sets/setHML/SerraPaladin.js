"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraPaladinBase = require("../set5ED/SerraPaladin.js");

class SerraPaladin extends SerraPaladinBase {
  constructor(game) {
    super(game, "Serra Paladin", "Homelands", "HML");
  }
}

module.exports = SerraPaladin;
