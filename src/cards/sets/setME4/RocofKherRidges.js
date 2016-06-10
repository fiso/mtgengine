"use strict";
const Constants = require ("../../../Constants");
const RocofKherRidgesBase = require("../setCED/RocofKherRidges");

class RocofKherRidges extends RocofKherRidgesBase {
  constructor (game) {
    super(game, "Roc of Kher Ridges", "Masters Edition IV", "ME4");
  }
}

module.exports = RocofKherRidges;
