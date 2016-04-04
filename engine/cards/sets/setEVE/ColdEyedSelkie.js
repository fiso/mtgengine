"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ColdEyedSelkieBase = require("../setC15/ColdEyedSelkie.js");

class ColdEyedSelkie extends ColdEyedSelkieBase {
  constructor(game) {
    super(game, "Cold-Eyed Selkie", "Eventide", "EVE");
  }
}

module.exports = ColdEyedSelkie;
