"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaggedLightningBase = require("../setPO2/JaggedLightning.js");

class JaggedLightning extends JaggedLightningBase {
  constructor(game) {
    super(game, "Jagged Lightning", "Starter 1999", "S99");
  }
}

module.exports = JaggedLightning;
