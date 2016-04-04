"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlackViseBase = require("../setCED/BlackVise.js");

class BlackVise extends BlackViseBase {
  constructor(game) {
    super(game, "Black Vise", "International Collector's Edition", "CEI");
  }
}

module.exports = BlackVise;
