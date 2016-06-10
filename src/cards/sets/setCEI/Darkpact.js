"use strict";
const Constants = require ("../../../Constants");
const DarkpactBase = require("../setCED/Darkpact");

class Darkpact extends DarkpactBase {
  constructor (game) {
    super(game, "Darkpact", "International Collector's Edition", "CEI");
  }
}

module.exports = Darkpact;
