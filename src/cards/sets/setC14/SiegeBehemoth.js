"use strict";
const Constants = require ("../../../Constants");
const SiegeBehemothBase = require("../setCMA/SiegeBehemoth");

class SiegeBehemoth extends SiegeBehemothBase {
  constructor (game) {
    super(game, "Siege Behemoth", "Commander 2014", "C14");
  }
}

module.exports = SiegeBehemoth;
