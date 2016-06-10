"use strict";
const Constants = require ("../../../Constants");
const SwiftJusticeBase = require("../setDDN/SwiftJustice");

class SwiftJustice extends SwiftJusticeBase {
  constructor (game) {
    super(game, "Swift Justice", "Return to Ravnica", "RTR");
  }
}

module.exports = SwiftJustice;
