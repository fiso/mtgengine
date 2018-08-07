"use strict";
const Constants = require ("../../../Constants");
const WarSpikeChangelingBase = require("../setMMA/WarSpikeChangeling");

class WarSpikeChangeling extends WarSpikeChangelingBase {
  constructor (game) {
    super(game, "War-Spike Changeling", "Morningtide", "MOR");
  }
}

module.exports = WarSpikeChangeling;
