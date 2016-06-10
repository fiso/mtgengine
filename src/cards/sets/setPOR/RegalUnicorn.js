"use strict";
const Constants = require ("../../../Constants");
const RegalUnicornBase = require("../set6ED/RegalUnicorn");

class RegalUnicorn extends RegalUnicornBase {
  constructor (game) {
    super(game, "Regal Unicorn", "Portal", "POR");
  }
}

module.exports = RegalUnicorn;
