"use strict";
const Constants = require ("../../../Constants");
const BalefulStareBase = require("../set9ED/BalefulStare");

class BalefulStare extends BalefulStareBase {
  constructor (game) {
    super(game, "Baleful Stare", "Seventh Edition", "7ED");
  }
}

module.exports = BalefulStare;
