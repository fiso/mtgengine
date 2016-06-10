"use strict";
const Constants = require ("../../../Constants");
const BellowsLizardBase = require("../setORI/BellowsLizard");

class BellowsLizard extends BellowsLizardBase {
  constructor (game) {
    super(game, "Bellows Lizard", "Return to Ravnica", "RTR");
  }
}

module.exports = BellowsLizard;
