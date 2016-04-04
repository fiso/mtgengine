"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpsejackMenaceBase = require("../setpPRE/CorpsejackMenace.js");

class CorpsejackMenace extends CorpsejackMenaceBase {
  constructor(game) {
    super(game, "Corpsejack Menace", "Return to Ravnica", "RTR");
  }
}

module.exports = CorpsejackMenace;
