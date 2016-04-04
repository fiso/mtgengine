"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RamsesOverdarkBase = require("../setLEG/RamsesOverdark.js");

class RamsesOverdark extends RamsesOverdarkBase {
  constructor(game) {
    super(game, "Ramses Overdark", "Masters Edition III", "ME3");
  }
}

module.exports = RamsesOverdark;
