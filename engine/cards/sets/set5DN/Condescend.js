"use strict";
const Constants = require ("../../../Constants");
const CondescendBase = require("../setDD3_JVC/Condescend");

class Condescend extends CondescendBase {
  constructor(game) {
    super(game, "Condescend", "Fifth Dawn", "5DN");
  }
}

module.exports = Condescend;
