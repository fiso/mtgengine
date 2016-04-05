"use strict";
const Constants = require ("../../../Constants");
const JaggedLightningBase = require("../setPO2/JaggedLightning");

class JaggedLightning extends JaggedLightningBase {
  constructor(game) {
    super(game, "Jagged Lightning", "Urza's Saga", "USG");
  }
}

module.exports = JaggedLightning;
