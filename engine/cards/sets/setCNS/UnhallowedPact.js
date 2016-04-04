"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnhallowedPactBase = require("../setAVR/UnhallowedPact.js");

class UnhallowedPact extends UnhallowedPactBase {
  constructor(game) {
    super(game, "Unhallowed Pact", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = UnhallowedPact;
