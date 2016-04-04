"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AltarofDementiaBase = require("../setCNS/AltarofDementia.js");

class AltarofDementia extends AltarofDementiaBase {
  constructor(game) {
    super(game, "Altar of Dementia", "Tempest", "TMP");
  }
}

module.exports = AltarofDementia;
