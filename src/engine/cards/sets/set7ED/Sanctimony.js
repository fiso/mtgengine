"use strict";
const Constants = require ("../../../Constants");
const SanctimonyBase = require("../set8ED/Sanctimony");

class Sanctimony extends SanctimonyBase {
  constructor (game) {
    super(game, "Sanctimony", "Seventh Edition", "7ED");
  }
}

module.exports = Sanctimony;
