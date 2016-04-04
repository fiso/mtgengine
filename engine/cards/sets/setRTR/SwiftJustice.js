"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SwiftJusticeBase = require("../setDDN/SwiftJustice.js");

class SwiftJustice extends SwiftJusticeBase {
  constructor(game) {
    super(game, "Swift Justice", "Return to Ravnica", "RTR");
  }
}

module.exports = SwiftJustice;
