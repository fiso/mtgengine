"use strict";
const Constants = require ("../../../Constants");
const DivineVerdictBase = require("../setM10/DivineVerdict");

class DivineVerdict extends DivineVerdictBase {
  constructor(game) {
    super(game, "Divine Verdict", "Magic 2015 Core Set", "M15");
  }
}

module.exports = DivineVerdict;
