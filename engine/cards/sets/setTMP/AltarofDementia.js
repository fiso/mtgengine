"use strict";
const Constants = require ("../../../Constants");
const AltarofDementiaBase = require("../setCNS/AltarofDementia");

class AltarofDementia extends AltarofDementiaBase {
  constructor(game) {
    super(game, "Altar of Dementia", "Tempest", "TMP");
  }
}

module.exports = AltarofDementia;
