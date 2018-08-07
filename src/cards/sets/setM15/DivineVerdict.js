"use strict";
const Constants = require ("../../../Constants");
const DivineVerdictBase = require("../setRIX/DivineVerdict");

class DivineVerdict extends DivineVerdictBase {
  constructor (game) {
    super(game, "Divine Verdict", "Magic 2015", "M15");
  }
}

module.exports = DivineVerdict;
