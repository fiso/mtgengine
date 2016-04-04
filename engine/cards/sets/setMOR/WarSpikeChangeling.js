"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarSpikeChangelingBase = require("../setMMA/WarSpikeChangeling.js");

class WarSpikeChangeling extends WarSpikeChangelingBase {
  constructor(game) {
    super(game, "War-Spike Changeling", "Morningtide", "MOR");
  }
}

module.exports = WarSpikeChangeling;
