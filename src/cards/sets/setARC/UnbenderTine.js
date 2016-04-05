"use strict";
const Constants = require ("../../../Constants");
const UnbenderTineBase = require("../setARB/UnbenderTine");

class UnbenderTine extends UnbenderTineBase {
  constructor(game) {
    super(game, "Unbender Tine", "Archenemy", "ARC");
  }
}

module.exports = UnbenderTine;
