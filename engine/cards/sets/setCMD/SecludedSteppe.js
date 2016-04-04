"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SecludedSteppeBase = require("../setARC/SecludedSteppe.js");

class SecludedSteppe extends SecludedSteppeBase {
  constructor(game) {
    super(game, "Secluded Steppe", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SecludedSteppe;
