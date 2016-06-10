"use strict";
const Constants = require ("../../../Constants");
const AshenmoorGougerBase = require("../setMM2/AshenmoorGouger");

class AshenmoorGouger extends AshenmoorGougerBase {
  constructor (game) {
    super(game, "Ashenmoor Gouger", "Shadowmoor", "SHM");
  }
}

module.exports = AshenmoorGouger;
