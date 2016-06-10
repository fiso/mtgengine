"use strict";
const Constants = require ("../../../Constants");
const RocofKherRidgesBase = require("../setCED/RocofKherRidges");

class RocofKherRidges extends RocofKherRidgesBase {
  constructor (game) {
    super(game, "Roc of Kher Ridges", "Unlimited Edition", "2ED");
  }
}

module.exports = RocofKherRidges;
