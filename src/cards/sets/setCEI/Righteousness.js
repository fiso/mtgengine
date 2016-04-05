"use strict";
const Constants = require ("../../../Constants");
const RighteousnessBase = require("../setCED/Righteousness");

class Righteousness extends RighteousnessBase {
  constructor(game) {
    super(game, "Righteousness", "International Collector's Edition", "CEI");
  }
}

module.exports = Righteousness;
