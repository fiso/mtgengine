"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusKeyruneBase = require("../setC13/AzoriusKeyrune.js");

class AzoriusKeyrune extends AzoriusKeyruneBase {
  constructor(game) {
    super(game, "Azorius Keyrune", "Return to Ravnica", "RTR");
  }
}

module.exports = AzoriusKeyrune;
