"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JudgesFamiliarBase = require("../setpFNM/JudgesFamiliar.js");

class JudgesFamiliar extends JudgesFamiliarBase {
  constructor(game) {
    super(game, "Judge's Familiar", "Return to Ravnica", "RTR");
  }
}

module.exports = JudgesFamiliar;
