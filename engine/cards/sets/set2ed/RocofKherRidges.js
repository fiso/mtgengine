"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RocofKherRidgesBase = require("../setCED/RocofKherRidges.js");

class RocofKherRidges extends RocofKherRidgesBase {
  constructor(game) {
    super(game, "Roc of Kher Ridges", "Unlimited Edition", "2ED");
  }
}

module.exports = RocofKherRidges;
