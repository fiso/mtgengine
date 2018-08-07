"use strict";
const Constants = require ("../../../Constants");
const AzoriusKeyruneBase = require("../setCMA/AzoriusKeyrune");

class AzoriusKeyrune extends AzoriusKeyruneBase {
  constructor (game) {
    super(game, "Azorius Keyrune", "Commander 2013", "C13");
  }
}

module.exports = AzoriusKeyrune;
