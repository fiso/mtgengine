"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishHealerBase = require("../setCST/OrcishHealer.js");

class OrcishHealer extends OrcishHealerBase {
  constructor(game) {
    super(game, "Orcish Healer", "Ice Age", "ICE");
  }
}

module.exports = OrcishHealer;
