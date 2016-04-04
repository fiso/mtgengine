"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AdvanceScoutBase = require("../setBRB/AdvanceScout.js");

class AdvanceScout extends AdvanceScoutBase {
  constructor(game) {
    super(game, "Advance Scout", "Tempest", "TMP");
  }
}

module.exports = AdvanceScout;
