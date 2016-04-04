"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryTemperBase = require("../setpGTW/FieryTemper.js");

class FieryTemper extends FieryTemperBase {
  constructor(game) {
    super(game, "Fiery Temper", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FieryTemper;
