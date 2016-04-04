"use strict";
const Constants = require ("../../../Constants");
const BlackViseBase = require("../setCED/BlackVise");

class BlackVise extends BlackViseBase {
  constructor(game) {
    super(game, "Black Vise", "International Collector's Edition", "CEI");
  }
}

module.exports = BlackVise;
