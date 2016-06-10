"use strict";
const Constants = require ("../../../Constants");
const JaggedLightningBase = require("../setPO2/JaggedLightning");

class JaggedLightning extends JaggedLightningBase {
  constructor (game) {
    super(game, "Jagged Lightning", "Starter 1999", "S99");
  }
}

module.exports = JaggedLightning;
