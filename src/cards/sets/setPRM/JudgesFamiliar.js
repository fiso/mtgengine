"use strict";
const Constants = require ("../../../Constants");
const JudgesFamiliarBase = require("../setF13/JudgesFamiliar");

class JudgesFamiliar extends JudgesFamiliarBase {
  constructor (game) {
    super(game, "Judge's Familiar", "Magic Online Promos", "PRM");
  }
}

module.exports = JudgesFamiliar;
