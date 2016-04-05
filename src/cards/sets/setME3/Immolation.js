"use strict";
const Constants = require ("../../../Constants");
const ImmolationBase = require("../set4ED/Immolation");

class Immolation extends ImmolationBase {
  constructor(game) {
    super(game, "Immolation", "Masters Edition III", "ME3");
  }
}

module.exports = Immolation;
