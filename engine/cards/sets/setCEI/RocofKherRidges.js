"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RocofKherRidgesBase = require("../setCED/RocofKherRidges.js");

class RocofKherRidges extends RocofKherRidgesBase {
  constructor(game) {
    super(game, "Roc of Kher Ridges", "International Collector's Edition", "CEI");
  }
}

module.exports = RocofKherRidges;
