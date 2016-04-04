"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmolderingCraterBase = require("../setATH/SmolderingCrater.js");

class SmolderingCrater extends SmolderingCraterBase {
  constructor(game) {
    super(game, "Smoldering Crater", "Urza's Saga", "USG");
  }
}

module.exports = SmolderingCrater;
