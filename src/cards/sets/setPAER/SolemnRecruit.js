"use strict";
const Constants = require ("../../../Constants");
const SolemnRecruitBase = require("../setAER/SolemnRecruit");

class SolemnRecruit extends SolemnRecruitBase {
  constructor (game) {
    super(game, "Solemn Recruit", "Aether Revolt Promos", "PAER");
  }
}

module.exports = SolemnRecruit;
