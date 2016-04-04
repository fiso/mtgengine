"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnbenderTineBase = require("../setARB/UnbenderTine.js");

class UnbenderTine extends UnbenderTineBase {
  constructor(game) {
    super(game, "Unbender Tine", "Archenemy", "ARC");
  }
}

module.exports = UnbenderTine;
