"use strict";
const Constants = require ("../../../Constants");
const BayouBase = require("../setCED/Bayou");

class Bayou extends BayouBase {
  constructor (game) {
    super(game, "Bayou", "International Collector's Edition", "CEI");
  }
}

module.exports = Bayou;
