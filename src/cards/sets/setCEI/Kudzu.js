"use strict";
const Constants = require ("../../../Constants");
const KudzuBase = require("../setCED/Kudzu");

class Kudzu extends KudzuBase {
  constructor (game) {
    super(game, "Kudzu", "International Collector's Edition", "CEI");
  }
}

module.exports = Kudzu;
