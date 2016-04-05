"use strict";
const Constants = require ("../../../Constants");
const BalefulStareBase = require("../set9ED/BalefulStare");

class BalefulStare extends BalefulStareBase {
  constructor(game) {
    super(game, "Baleful Stare", "Portal", "POR");
  }
}

module.exports = BalefulStare;
