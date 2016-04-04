"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmolderingCraterBase = require("../setATH/SmolderingCrater.js");

class SmolderingCrater extends SmolderingCraterBase {
  constructor(game) {
    super(game, "Smoldering Crater", "Commander 2015", "C15");
  }
}

module.exports = SmolderingCrater;
