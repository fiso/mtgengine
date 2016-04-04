"use strict";
const Constants = require ("../../../Constants");
const RocofKherRidgesBase = require("../setCED/RocofKherRidges");

class RocofKherRidges extends RocofKherRidgesBase {
  constructor(game) {
    super(game, "Roc of Kher Ridges", "International Collector's Edition", "CEI");
  }
}

module.exports = RocofKherRidges;
