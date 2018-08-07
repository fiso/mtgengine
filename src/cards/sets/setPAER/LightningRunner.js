"use strict";
const Constants = require ("../../../Constants");
const LightningRunnerBase = require("../setAER/LightningRunner");

class LightningRunner extends LightningRunnerBase {
  constructor (game) {
    super(game, "Lightning Runner", "Aether Revolt Promos", "PAER");
  }
}

module.exports = LightningRunner;
