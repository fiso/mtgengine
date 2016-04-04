"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BellowsLizardBase = require("../setORI/BellowsLizard.js");

class BellowsLizard extends BellowsLizardBase {
  constructor(game) {
    super(game, "Bellows Lizard", "Return to Ravnica", "RTR");
  }
}

module.exports = BellowsLizard;
