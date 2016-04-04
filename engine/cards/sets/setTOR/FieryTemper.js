"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryTemperBase = require("../setpGTW/FieryTemper.js");

class FieryTemper extends FieryTemperBase {
  constructor(game) {
    super(game, "Fiery Temper", "Torment", "TOR");
  }
}

module.exports = FieryTemper;
