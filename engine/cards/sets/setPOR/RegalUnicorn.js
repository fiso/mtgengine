"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RegalUnicornBase = require("../set6ED/RegalUnicorn.js");

class RegalUnicorn extends RegalUnicornBase {
  constructor(game) {
    super(game, "Regal Unicorn", "Portal", "POR");
  }
}

module.exports = RegalUnicorn;
