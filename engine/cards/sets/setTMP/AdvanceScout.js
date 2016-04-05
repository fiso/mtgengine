"use strict";
const Constants = require ("../../../Constants");
const AdvanceScoutBase = require("../setBRB/AdvanceScout");

class AdvanceScout extends AdvanceScoutBase {
  constructor(game) {
    super(game, "Advance Scout", "Tempest", "TMP");
  }
}

module.exports = AdvanceScout;
