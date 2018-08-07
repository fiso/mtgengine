"use strict";
const Constants = require ("../../../Constants");
const AzoriusKeyruneBase = require("../setCMA/AzoriusKeyrune");

class AzoriusKeyrune extends AzoriusKeyruneBase {
  constructor (game) {
    super(game, "Azorius Keyrune", "Return to Ravnica", "RTR");
  }
}

module.exports = AzoriusKeyrune;
