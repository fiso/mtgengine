"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaggedLightningBase = require("../setPO2/JaggedLightning.js");

class JaggedLightning extends JaggedLightningBase {
  constructor(game) {
    super(game, "Jagged Lightning", "Urza's Saga", "USG");
  }
}

module.exports = JaggedLightning;
