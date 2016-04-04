"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoubleCleaveBase = require("../setEVE/DoubleCleave.js");

class DoubleCleave extends DoubleCleaveBase {
  constructor(game) {
    super(game, "Double Cleave", "Planechase", "HOP");
  }
}

module.exports = DoubleCleave;
