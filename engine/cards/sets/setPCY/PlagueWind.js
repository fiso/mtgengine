"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueWindBase = require("../set8ED/PlagueWind.js");

class PlagueWind extends PlagueWindBase {
  constructor(game) {
    super(game, "Plague Wind", "Prophecy", "PCY");
  }
}

module.exports = PlagueWind;
