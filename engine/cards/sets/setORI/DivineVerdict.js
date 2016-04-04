"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DivineVerdictBase = require("../setM10/DivineVerdict.js");

class DivineVerdict extends DivineVerdictBase {
  constructor(game) {
    super(game, "Divine Verdict", "Magic Origins", "ORI");
  }
}

module.exports = DivineVerdict;
