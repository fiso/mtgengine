"use strict";
const Constants = require ("../../../Constants");
const JaggedLightningBase = require("../setS99/JaggedLightning");

class JaggedLightning extends JaggedLightningBase {
  constructor (game) {
    super(game, "Jagged Lightning", "Portal Second Age", "P02");
  }
}

module.exports = JaggedLightning;
