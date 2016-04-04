"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RunedServitorBase = require("../setDDF/RunedServitor.js");

class RunedServitor extends RunedServitorBase {
  constructor(game) {
    super(game, "Runed Servitor", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = RunedServitor;
