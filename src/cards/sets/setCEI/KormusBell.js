"use strict";
const Constants = require ("../../../Constants");
const KormusBellBase = require("../setCED/KormusBell");

class KormusBell extends KormusBellBase {
  constructor (game) {
    super(game, "Kormus Bell", "International Collector's Edition", "CEI");
  }
}

module.exports = KormusBell;
