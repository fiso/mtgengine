"use strict";
const Constants = require ("../../../Constants");
const CloudSpiritBase = require("../setME4/CloudSpirit");

class CloudSpirit extends CloudSpiritBase {
  constructor(game) {
    super(game, "Cloud Spirit", "Portal", "POR");
  }
}

module.exports = CloudSpirit;
