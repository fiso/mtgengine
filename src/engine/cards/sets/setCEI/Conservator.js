"use strict";
const Constants = require ("../../../Constants");
const ConservatorBase = require("../set4ED/Conservator");

class Conservator extends ConservatorBase {
  constructor (game) {
    super(game, "Conservator", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Conservator;
