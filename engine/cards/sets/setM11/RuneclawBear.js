"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuneclawBearBase = require("../setDPA/RuneclawBear.js");

class RuneclawBear extends RuneclawBearBase {
  constructor(game) {
    super(game, "Runeclaw Bear", "Magic 2011", "M11");
  }
}

module.exports = RuneclawBear;
