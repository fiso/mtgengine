"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AshenmoorGougerBase = require("../setMM2/AshenmoorGouger.js");

class AshenmoorGouger extends AshenmoorGougerBase {
  constructor(game) {
    super(game, "Ashenmoor Gouger", "Shadowmoor", "SHM");
  }
}

module.exports = AshenmoorGouger;
